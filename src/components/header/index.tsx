import type { FontSizeType } from './type';
import { fontSizeStyle } from './type';

export const Header = ({ title, size }: { title: string; size: FontSizeType }) => {
  return <header className={`font-bold ${fontSizeStyle[size]}`}>{title}</header>;
};
