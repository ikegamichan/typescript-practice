import React from 'react';
import { Header } from '@/components/header';
import { TitleCard } from '@/components/title-card';
import { PATH } from '@/const/path';

export default function Page() {
  return (
    <>
      <Header title="勉強中のもの" />
      <div className="grid grid-cols-3 gap-4">
        <TitleCard primaryTitle={'ARRAY'} href={PATH.ARRAY} />
        <TitleCard primaryTitle={'OBJECT'} href={PATH.OBJECT} />
        <TitleCard primaryTitle={'ARRAY-OF-OBJECT'} href={PATH.ARRAY_OF_OBJECT} />
      </div>
    </>
  );
}
