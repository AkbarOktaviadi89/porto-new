// Network-node "A": three connected nodes forming the initial, drawn as a badge.
export function BrandMark({ className = "brand-mark" }: { className?: string }) {
    return (<svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <rect className="brand-mark-bg" width="40" height="40" rx="10"/>
      <path d="M20 11 11 29M20 11l9 18M14.3 22.5h11.4" stroke="#9fb7db" strokeWidth="2" strokeLinecap="round"/>
      <circle className="brand-mark-accent" cx="20" cy="11" r="3.4"/>
      <circle cx="11" cy="29" r="2.9" fill="#fff"/>
      <circle cx="29" cy="29" r="2.9" fill="#fff"/>
    </svg>);
}
