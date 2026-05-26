type Props = {
  size?: number;
  color?: string;
  dotColor?: string;
};

export default function Mark({
  size = 22,
  color = 'var(--text-primary)',
  dotColor = 'var(--brand-accent-signal)',
}: Props) {
  const dotSize = Math.round(size * 0.17);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap: dotSize * 0.4 }}>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: size,
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          color,
        }}
      >
        kycert
      </span>
      <span
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: dotColor,
          marginBottom: size * 0.12,
        }}
      />
    </span>
  );
}
