import React from 'react';
import { Header } from '@/components/header';
import { TitleCard } from '@/components/title-card';
import { titleCards } from '@/const/card';

export default function Page() {
  return (
    <div>
      <Header title="勉強中のもの" size="L" />
      <div className="grid grid-cols-3 gap-4">
        {titleCards.map((titleCard) => {
          return (
            <TitleCard key={titleCard.title} title={titleCard.title} href={titleCard.path} size={titleCard.size} />
          );
        })}
      </div>
    </div>
  );
}
