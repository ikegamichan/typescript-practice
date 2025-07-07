import type { ReactNode } from 'react';
import { Slider } from '@/components/slider';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] px-4 py-8">
      <div className="pb-8">{children}</div>
      <div className="relative w-full px-8">
        <Slider />
      </div>
    </div>
  );
}
