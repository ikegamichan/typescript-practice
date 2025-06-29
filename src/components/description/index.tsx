import type { ReactNode } from 'react';
import { Border } from '../border';

export const Section = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div className="p-2 pb-4">
      <div className="mb-8">
        <div className="mb-2 text-2xl font-semibold">{title}</div>
        <Border />
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};
