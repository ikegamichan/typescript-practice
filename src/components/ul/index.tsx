import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export const Ul = ({ type, children }: { type: 'primary' | 'secondary'; children: ReactNode }) => {
  const baseStyle = 'mx-4 list-outside';
  const dotStyle = type === 'primary' ? 'list-disc' : 'list-[circle]';
  return <ul className={cn(baseStyle, dotStyle)}>{children}</ul>;
};
