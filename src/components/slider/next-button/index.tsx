'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
// TODO: handleClickNext関数を実装する
// 要件①: クリックすると、画面に表示されているスライダーの要素数の半分(小数点切り捨て)がスクロールされること
// 要件①追加: その際に、スクロールできる要素数が画面に表示されているスライダーの要素数の半分以下の場合、スクロールされた上でNextButtonコンポーネントは非表示になること
// 要件①追加: NextButtonコンポーネントの表示非表示はisDisabledのフラグで判定すること

export const NextButton = ({ isDisabled, handleClickNext }: { isDisabled: boolean; handleClickNext: () => void }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClickNext}
      className="absolute bottom-5 right-2 flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 opacity-90 shadow-md hover:bg-gray-300 hover:transition hover:duration-200 hover:ease-in-out disabled:cursor-default disabled:bg-gray-200"
    >
      <ChevronRightIcon color={isDisabled ? 'lightgray' : 'black'} className="size-8" />
    </button>
  );
};
