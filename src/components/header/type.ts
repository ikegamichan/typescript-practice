export const fontSizeStyle = { XS: 'text-lg', S: 'text-xl mb-4', M: 'text-2xl mb-4', L: 'text-3xl mb-8' } as const;
export type FontSizeType = keyof typeof fontSizeStyle;
