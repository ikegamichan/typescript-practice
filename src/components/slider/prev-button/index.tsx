'use client';

import { ChevronLeftIcon } from '@heroicons/react/16/solid';

export const PrevButton = ({ isDisabled, handleClickPrev }: { isDisabled: boolean; handleClickPrev: () => void }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClickPrev}
      className="absolute -left-2 bottom-5 flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 opacity-90 shadow-md hover:bg-gray-300 hover:transition hover:duration-200 hover:ease-in-out disabled:cursor-default disabled:bg-gray-200"
    >
      <ChevronLeftIcon color={isDisabled ? 'lightgray' : 'black'} className="size-8" />
    </button>
  );
};
