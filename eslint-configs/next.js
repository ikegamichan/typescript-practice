/**
 * Next.js ESLint 設定
 * {@link https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-plugin}.
 */
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // img tag直接の利用を許可
    "@next/next/no-img-element": "off",
    // hooksの依存配列の警告を無視
    "react-hooks/exhaustive-deps": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
