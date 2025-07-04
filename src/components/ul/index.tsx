import type { ReactNode } from 'react';

export const Ul = ({ type, children }: { type: 'main' | 'sub'; children: ReactNode }) => {
  const baseStyle = 'mx-4 list-outside';
  const dotStyle = type === 'main' ? 'list-disc' : 'list-[circle]';
  return <ul className={baseStyle + dotStyle}>{children}</ul>;
};
