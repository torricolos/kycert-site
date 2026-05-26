'use client';

import { useEffect, useRef, useState } from 'react';
import Mark from './Mark';
import Icon from './Icon';
import { useTheme } from './useTheme';

export type NavItem = {
  label: string;
  href?: string;
  dropdown?: Array<{ label: string; href: string; hint?: string; badge?: string }>;
};

type Props = {
  items: NavItem[];
  current?: string;
};

export default function Nav({ items, current }: Props) {
  const { theme, toggle } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('click', handle);
    return () => document.removeEventListener('click', handle);
  }, []);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <a href="/" style={{ display: 'inline-flex' }} aria-label="KYCERT - página inicial">
            <Mark size={20} />
          </a>
          <div style={{ display: 'flex', gap: 24 }} ref={dropdownRef}>
            {items.map((it) => {
              if (it.dropdown) {
                const isOpen = openDropdown === it.label;
                return (
                  <div key={it.label} style={{ position: 'relative' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setOpenDropdown(isOpen ? null : it.label); }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        padding: 0, background: 'transparent', border: 'none',
                        fontFamily: 'inherit', cursor: 'pointer',
                        fontSize: 'var(--text-sm)', fontWeight: 500,
                        color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {it.label}
                      <Icon name="chevDown" size={12} strokeWidth={2} />
                    </button>
                    {isOpen && (
                      <div style={{
                        position: 'absolute', top: 'calc(100% + 12px)', left: -16,
                        minWidth: 320,
                        background: 'var(--surface-canvas)',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        padding: 8, zIndex: 200,
                      }}>
                        {it.dropdown.map((d) => (
                          <a
                            key={d.label}
                            href={d.href}
                            onClick={() => setOpenDropdown(null)}
                            style={{
                              display: 'flex', alignItems: 'center',
                              padding: '10px 12px', borderRadius: 'var(--radius-sm)',
                              textDecoration: 'none',
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-primary)' }}>
                                {d.label}
                              </div>
                              {d.hint && (
                                <div style={{ marginTop: 2, fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
                                  {d.hint}
                                </div>
                              )}
                            </div>
                            {d.badge && (
                              <span style={{
                                marginLeft: 8, padding: '2px 7px', borderRadius: 'var(--radius-full)',
                                background: d.badge === 'Disponível' ? 'var(--status-success-bg)' : 'var(--surface-sunken)',
                                color: d.badge === 'Disponível' ? 'var(--status-success)' : 'var(--text-tertiary)',
                                fontSize: 10, fontWeight: 600,
                              }}>{d.badge}</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={it.label}
                  href={it.href}
                  style={{
                    fontSize: 'var(--text-sm)', fontWeight: 500,
                    color: current === it.label ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                  }}
                >
                  {it.label}
                </a>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={toggle}
            aria-label="Alternar tema claro/escuro"
            style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'transparent', border: '1px solid var(--border-default)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} size={14} />
          </button>
          <a href="#login" style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-secondary)' }}>
            Entrar
          </a>
          <a
            href="#demo"
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-md)',
              background: 'var(--text-primary)', color: 'var(--surface-canvas)',
              fontSize: 'var(--text-sm)', fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}
          >
            Agendar demo<Icon name="arrow" size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}
