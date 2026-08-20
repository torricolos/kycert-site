export type LinkCardProps = {
  href: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  iconColor: string;
  external?: boolean;
  linkId: string;
  featured?: boolean;
};

export function LinkCard({ href, label, description, icon, iconColor, external, linkId, featured }: LinkCardProps) {
  return (
    <a
      className={`link-card${featured ? ' feat' : ''}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      data-link-id={linkId}
      data-link-label={label}
      data-link-external={external ? '1' : '0'}
    >
      <span className="link-card-ic" style={{ color: iconColor }}>
        {icon}
      </span>
      <span className="link-card-body">
        <span className="link-card-label">{label}</span>
        {description && <span className="link-card-desc">{description}</span>}
      </span>
      <svg className="link-card-arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </a>
  );
}
