import { PATH } from './path';

const cardSize = { s: 's', m: 'm' } as const;
export type CardSize = (typeof cardSize)[keyof typeof cardSize];

type CardsType = {
  title: string;
  path: string;
  size: CardSize;
}[];

export const titleCards: CardsType = [
  { title: 'PRACTICE', path: PATH.PRACTICE, size: cardSize.m },
  { title: 'ARRAY', path: PATH.ARRAY, size: cardSize.m },
  { title: 'OBJECT', path: PATH.OBJECT, size: cardSize.m },
  { title: 'ARRAY-OF-OBJECT', path: PATH.ARRAY_OF_OBJECT, size: cardSize.m },
  { title: 'WEEKLY-MEMO', path: PATH.WEEKLY_MEMO, size: cardSize.m },
] as const;
