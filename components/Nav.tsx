'use client';

import { useState } from 'react';
import Mark from './Mark';
import Icon from './Icon';

const WA = 'https://wa.me/5511937359748?text=Olá%2C+gostaria+de+agendar+uma+demo+da+kycert.';

export type NavItem = { label: string; href: string };
type Props = { items: NavItem[]; current?: string };

export default function Nav({ items, current }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'color-mix(in srgb, var(--surface-app) 88%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo + links desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <a href="/" aria-label="KYCERT — página inicial" style={{ display: 'inline-flex' }}>
            <Mark size={20} />
          </a>
          <div className="nav-links" style={{ display: 'flex', gap: 24 }}>
            {items.map((it) => (
              <a key={it.label} href={it.href} style={{
                fontSize: 'var(--text-sm)', fontWeight: 500,
                color: current === it.label ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}>
                {it.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://admin.kycert.com.br" className="hide-mobile"
            style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-secondary)' }}>
            Entrar
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            padding: '8px 16px', borderRadius: 'var(--radius-md)',
            background: 'var(--text-primary)', color: 'var(--surface-canvas)',
            fontSize: 'var(--text-sm)', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
          }}>
            Agendar demo<Icon name="arrow" size={13} strokeWidth={2} />
          </a>
          {/* Hambúrger mobile */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            style={{
              display: 'none', // overridden by CSS on mobile
              width: 36, height: 36, borderRadius: 'var(--radius-sm)',
              background: 'transparent', border: '1px solid var(--border-default)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              alignItems: 'center', justifyContent: 'center',
            }}
            className="nav-hamburger"
          >
            <Icon name={open ? 'x' : 'menu'} size={16} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          padding: '8px 20px 20px',
          borderTop: '1px solid var(--border-default)',
          background: 'var(--surface-app)',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {items.map((it) => (
            <a key={it.label} href={it.href} onClick={() => setOpen(false)} style={{
              padding: '12px 4px',
              fontSize: 'var(--text-md)', fontWeight: 500, color: 'var(--text-primary)',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              {it.label}
            </a>
          ))}
          <a href="https://admin.kycert.com.br" style={{
            padding: '12px 4px',
            fontSize: 'var(--text-md)', fontWeight: 500, color: 'var(--text-secondary)',
          }}>
            Entrar
          </a>
        </div>
      )}
    </nav>
  );
}
