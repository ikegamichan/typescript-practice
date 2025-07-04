import Link from 'next/link';
import type { CardSize } from '@/const/card';
import { cn } from '@/utils/cn';

type Props = {
  size: CardSize;
  title: string;
  href: string;
};

export const Card = ({ title, href, size }: Props) => {
  const sizeStyle = size === 'm' ? 'h-24 w-auto text-2xl' : size === 's' ? 'h-20 w-24 text-sm' : '';
  return (
    <Link href={href}>
      <div
        className={cn(
          sizeStyle,
          'my-auto grid cursor-pointer items-center rounded-lg border border-gray-300 p-2 text-center shadow-md transition duration-500 ease-in-out hover:bg-gray-100',
        )}
      >
        <div className="font-bold">{title}</div>
      </div>
    </Link>
  );
};
