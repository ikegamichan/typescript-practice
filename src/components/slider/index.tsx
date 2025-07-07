'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../card';
import { NextButton } from './next-button';
import { PrevButton } from './prev-button';
import { sliderCards } from '@/const/card';

//slider1つの大きさ(96px)
const SLIDER_WIDTH = 96;
//slider間の余白の大きさ
const GAP = 16;

export const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // 状態管理
  const [currentSliderNo, setCurrentSliderNo] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const totalCardCount = sliderCards.length;
  const noMoreMoveRight = currentSliderNo + maxSlides === totalCardCount;
  const noMoreMoveLeft = currentSliderNo === 0;

  useEffect(() => {
    if (!sliderRef.current) return;

    const updateWidthMeasurements = () => {
      if (!sliderRef.current) return;
      const currentWidth = sliderRef.current.clientWidth;

      const slides = Math.floor((currentWidth + GAP) / (SLIDER_WIDTH + GAP));
      setMaxSlides(slides);
    };

    updateWidthMeasurements();

    window.addEventListener('resize', updateWidthMeasurements);

    return () => window.removeEventListener('resize', updateWidthMeasurements);
  }, []);

  useEffect(() => {
    setTranslateX(currentSliderNo * (SLIDER_WIDTH + GAP));
  }, [currentSliderNo]);

  const handleClickNext = () => {
    if (noMoreMoveRight) return;
    setCurrentSliderNo(currentSliderNo + 1);
  };

  const handleClickPrev = () => {
    if (noMoreMoveLeft) return;
    setCurrentSliderNo(currentSliderNo - 1);
  };

  return (
    <div ref={sliderRef} className="flex snap-x snap-mandatory space-x-4 overflow-hidden overflow-x-scroll">
      {sliderCards.map((card) => {
        const isCurrentPage = pathname === card.path;
        return (
          <button
            key={card.title}
            disabled={isCurrentPage}
            className="snap-start transition duration-300 ease-in-out"
            style={{ transform: `translateX(${-translateX}px)` }}
          >
            <Card title={card.title} size={card.size} href={card.path} isDisabled={isCurrentPage} />
          </button>
        );
      })}
      <PrevButton isDisabled={noMoreMoveLeft} handleClickPrev={handleClickPrev} />
      <NextButton isDisabled={noMoreMoveRight} handleClickNext={handleClickNext} />
    </div>
  );
};
