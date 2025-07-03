import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsxをtailwind-mergeでラップしたユーティリティ関数
 *
 * clsxでTailwindCSSのクラス名をマージした際、同じプロパティへの指定があった場合に
 * 重複しないよう、後に指定されたものを優先して適用させるために使用する。
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
