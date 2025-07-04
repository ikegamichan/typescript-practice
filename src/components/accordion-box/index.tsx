'use client';

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

export const AccordionBox = ({ title, children }: { title: string; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    if (isOpen) {
      headerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isOpen]);

  return (
    <div className="mx-2 rounded-lg border border-gray-300">
      <div
        ref={headerRef}
        className={`box-border flex h-12 cursor-pointer select-none items-center justify-between bg-gray-200 px-4 ${isOpen && 'ease h-[49px] border-b border-b-gray-300 transition duration-300'}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="text-lg font-semibold">{title}</div>
        {isOpen ? <ChevronDownIcon className="size-8" /> : <ChevronRightIcon className="size-8" />}
      </div>
      {isOpen && <div className="min-h-20 p-4">{children}</div>}
    </div>
  );
};
