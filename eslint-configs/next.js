/**
 * Next.js 用の ESLint 設定
 * - 公式の next/core-web-vitals を取り込み、
 *   必要に応じてルールを追加・上書きする。
 */
module.exports = {
  extends: ['next/core-web-vitals'], // eslint-config-next から提供される設定

  rules: {
    // Next.js で <img> タグを使いたい場合に無効化する例
    '@next/next/no-img-element': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
