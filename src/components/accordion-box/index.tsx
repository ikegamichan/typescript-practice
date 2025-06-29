'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import type { ReactNode } from 'react';
import { useState } from 'react';

export const AccordionBox = ({ title, children }: { title: string; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="select-none rounded-lg border border-gray-300">
      <div
        className={`box-border flex h-12 cursor-pointer items-center justify-between px-4 ${isOpen && 'h-[49px] border-b border-b-gray-300'}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="text-lg font-semibold">{title}</div>
        {isOpen ? <ChevronUpIcon className="size-8" /> : <ChevronDownIcon className="size-8" />}
      </div>
      {isOpen && <div className="min-h-20 p-4">{children}</div>}
    </div>
  );
};
