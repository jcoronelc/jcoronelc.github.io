import React from 'react';

interface DisclosureProps {
  id: string;
  open: boolean;
  children: React.ReactNode;
}

/** Animated expand/collapse region. Collapsed content is inert (not focusable, not read out). */
export const Disclosure: React.FC<DisclosureProps> = ({ id, open, children }) => (
  <div id={id} className="disclosure" data-open={open} inert={!open}>
    <div>{children}</div>
  </div>
);
