import { CheckCircleIcon, InformationCircleIcon, ExclamationCircleIcon } from '@heroicons/react/16/solid';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type AnnotationBoxType = 'recommend' | 'info' | 'attention';
type IconAndBgColorType = {
  icon: ReactNode;
  bgColor: 'bg-green-100' | 'bg-red-100' | 'bg-yellow-100';
};

export const AnnotationBox = ({
  type,
  children,
  title,
}: {
  type: AnnotationBoxType;
  children: ReactNode;
  title?: string;
}) => {
  const iconAndBgColor: IconAndBgColorType = (() => {
    switch (type) {
      case 'recommend':
        return { bgColor: 'bg-green-100', icon: <CheckCircleIcon className="size-6 text-green-700" /> };
      case 'info':
        return { bgColor: 'bg-yellow-100', icon: <InformationCircleIcon className="size-6 text-yellow-500" /> };
      case 'attention':
        return { bgColor: 'bg-red-100', icon: <ExclamationCircleIcon className="size-6 text-red-500" /> };
    }
  })();

  return (
    <div className={cn(iconAndBgColor.bgColor, 'flex justify-start space-x-4 rounded-lg p-2')}>
      <div>{iconAndBgColor.icon}</div>
      {title && <div title={title} />}
      <div>{children}</div>
    </div>
  );
};
