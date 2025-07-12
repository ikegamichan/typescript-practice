import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  href: string;
  anchorText: string;
  className?: string;
} & ComponentPropsWithoutRef<'a'>;

export const Anchor = (props: Props) => {
  const { href, anchorText, className, ...rest } = props;
  return (
    <a className={cn('text-blue-500 underline', className)} href={href} {...rest}>
      {anchorText}
    </a>
  );
};
