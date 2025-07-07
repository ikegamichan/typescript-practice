'use client';

import { useRouter } from 'next/navigation';
import type { CardSize } from '@/const/card';
import { cn } from '@/utils/cn';

type Props = {
  size: CardSize;
  title: string;
  href: string;
  isDisabled: boolean;
};

export const Card = ({ title, href, size, isDisabled }: Props) => {
  const { push } = useRouter();
  const disabledStyle = isDisabled
    ? 'bg-gray-500 text-gray-100'
    : 'cursor-pointer transition duration-500 ease-in-out hover:bg-gray-100';
  const sizeStyle = size === 'm' ? 'h-24 w-auto text-2xl' : size === 's' ? 'h-20 w-24 text-sm' : '';
  return (
    <div
      onClick={() => {
        push(href);
      }}
      className={cn(
        sizeStyle,
        disabledStyle,
        'my-auto grid items-center rounded-lg border border-gray-300 p-2 text-center shadow-md',
      )}
    >
      <div className="font-bold">{title}</div>
    </div>
  );
};
