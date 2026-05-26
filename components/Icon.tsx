type IconName =
  | 'arrow' | 'arrowSm' | 'check' | 'chevDown' | 'chevRight'
  | 'plus' | 'minus' | 'shield' | 'sparkles' | 'lock' | 'clock'
  | 'users' | 'palette' | 'box' | 'file' | 'target' | 'moon' | 'sun'
  | 'bank' | 'globe' | 'coins' | 'handshake' | 'chart';

const PATHS: Record<IconName, string> = {
  arrow:    'M5 12h14M12 5l7 7-7 7',
  arrowSm:  'M7 17 17 7M7 7h10v10',
  check:    'M20 6 9 17l-5-5',
  chevDown: 'm6 9 6 6 6-6',
  chevRight:'m9 6 6 6-6 6',
  plus:     'M12 5v14M5 12h14',
  minus:    'M5 12h14',
  shield:   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  sparkles: 'M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2z',
  lock:     'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4',
  clock:    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  users:    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  palette:  'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.4 0 2.5-1.1 2.5-2.5 0-.6-.2-1.2-.6-1.6-.4-.4-.6-1-.6-1.6 0-1.4 1.1-2.5 2.5-2.5H17c2.8 0 5-2.2 5-5 0-4.4-4.5-7.8-10-7.8z',
  box:      'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  file:     'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8',
  target:   'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  moon:     'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  sun:      'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42',
  bank:     'M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3',
  globe:    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  coins:    'M9 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM15 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM15 17a5 5 0 0 1-5-5M9 7a5 5 0 0 1 5 5',
  handshake:'M11 17l2 2a1 1 0 1 0 1.4-1.4M16.5 14.5l4 4a1 1 0 1 0 1.4-1.4l-4-4M3 9l3-3 4 4-3 3a2 2 0 0 1-3 0 2 2 0 0 1 0-3zM13 7l3-3 4 4-3 3-4-4z',
  chart:    'M3 3v18h18M7 16l4-4 4 4 5-5',
};

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export default function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.6 }: Props) {
  const path = PATHS[name];
  if (!path) return <span style={{ width: size, height: size }} />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {path.split(' M').map((d, i) => (
        <path key={i} d={i === 0 ? d : 'M' + d} />
      ))}
    </svg>
  );
}
