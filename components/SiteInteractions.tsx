'use client';

import { useEffect } from 'react';

/**
 * Porta o site.js do mockup (reveal/contadores/flow/tabs) para um efeito React.
 * Roda por página (cada page.tsx monta seu próprio <SiteInteractions />) para
 * sempre varrer o DOM da página atual.
 */
export default function SiteInteractions() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function inView(el: Element, margin: number) {
      const r = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      return r.top < h - margin && r.bottom > -40;
    }

    function show(el: Element) {
      el.classList.add('in');
      (el as HTMLElement).style.setProperty('opacity', '1', 'important');
      (el as HTMLElement).style.setProperty('transform', 'none', 'important');
    }
    function revealSweep() {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        if (reduce || inView(el, 60)) show(el);
      });
    }

    function animateCount(el: Element) {
      el.setAttribute('data-done', '1');
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const dec = target % 1 !== 0 ? 1 : 0;
      if (reduce) {
        el.textContent = dec ? target.toFixed(1).replace('.', ',') : target.toLocaleString('pt-BR');
        return;
      }
      const dur = 1400;
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 3));
        el.textContent = dec ? v.toFixed(1).replace('.', ',') : Math.round(v).toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = dec ? target.toFixed(1).replace('.', ',') : Math.round(target).toLocaleString('pt-BR');
      }
      requestAnimationFrame(tick);
    }
    function countSweep() {
      document.querySelectorAll('[data-count]:not([data-done])').forEach((el) => {
        if (inView(el, 40)) animateCount(el);
      });
    }

    function runFlow(flow: Element) {
      const line = flow.querySelector('.flow-line') as HTMLElement | null;
      const nodes = flow.querySelectorAll('.fnode');
      const N = nodes.length || 1;
      if (reduce) {
        if (line) line.style.setProperty('--flow', '100%');
        nodes.forEach((n) => n.classList.add('lit'));
        return;
      }
      flow.classList.add('run');
      const dur = 2600;
      const t0 = performance.now();
      (function frame(now?: number) {
        const p = Math.min(((now || t0) - t0) / dur, 1);
        if (line) line.style.setProperty('--flow', p * 100 + '%');
        for (let k = 0; k < N; k++) {
          if (p >= (k + 0.5) / N) nodes[k].classList.add('lit');
        }
        if (p < 1) requestAnimationFrame(frame);
        else setTimeout(() => flow.classList.remove('run'), 500);
      })(t0);
    }
    function flowSweep() {
      document.querySelectorAll('.flow:not([data-done])').forEach((flow) => {
        if (!inView(flow, 80)) return;
        flow.setAttribute('data-done', '1');
        runFlow(flow);
      });
    }

    function runHeroSequence() {
      document.querySelectorAll('.hero .ui-row.seq').forEach((r, i) => {
        setTimeout(() => {
          r.classList.add('in');
          (r as HTMLElement).style.setProperty('opacity', '1', 'important');
          (r as HTMLElement).style.setProperty('transform', 'none', 'important');
        }, reduce ? 0 : 420 + i * 320);
      });
    }

    function sweep() {
      revealSweep();
      countSweep();
      flowSweep();
    }

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);

    const tabHandlers: Array<{ el: Element; fn: () => void }> = [];
    document.querySelectorAll('[data-sc]').forEach((tab) => {
      const fn = () => {
        const group = tab.closest('.showcase');
        if (!group) return;
        group.querySelectorAll('[data-sc]').forEach((t) => t.classList.toggle('active', t === tab));
        const id = tab.getAttribute('data-sc');
        group.querySelectorAll('.sc-panel').forEach((p) => p.classList.toggle('active', p.getAttribute('data-panel') === id));
      };
      tab.addEventListener('click', fn);
      tabHandlers.push({ el: tab, fn });
    });

    runHeroSequence();
    const t0 = performance.now();
    let raf = 0;
    (function loop(now?: number) {
      sweep();
      if ((now || t0) - t0 < 1800) raf = requestAnimationFrame(loop);
    })(t0);
    window.addEventListener('load', sweep);

    return () => {
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      window.removeEventListener('load', sweep);
      if (raf) cancelAnimationFrame(raf);
      tabHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn));
    };
  }, []);

  return null;
}
