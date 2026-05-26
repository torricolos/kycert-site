'use client';

import { PLATFORMS } from './platforms';
import PlatformBadge from './PlatformBadge';
import ItemCard from './ItemCard';

export default function PlatformList() {
  return (
    <>
      {PLATFORMS.map((p, i) => (
        <section
          key={p.name}
          style={{
            padding: '40px 0',
            borderTop: i === 0 ? '1px solid var(--border-default)' : 'none',
            borderBottom: '1px solid var(--border-default)',
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <PlatformBadge name={p.name} color={p.color} icon={p.icon} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {p.items.map((item, j) => (
              <ItemCard key={j} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
