import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExtLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ExtLink: React.FC<ExtLinkProps> = ({ children, className = '', ...rest }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={`link inline-flex items-baseline gap-0.5 ${className}`}
    {...rest}
  >
    {children}
    <ArrowUpRight className="h-3 w-3 shrink-0 self-center" strokeWidth={1.75} aria-hidden="true" />
  </a>
);
