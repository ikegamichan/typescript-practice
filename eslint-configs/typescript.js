/**
 * Typescript ESLint 設定
 * {@link https://typescript-eslint.io/rules}.
 */
module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // 返り値の推論を許容する
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // @ts-ignoreのコメント禁止。@ts-expect-errorを利用し、説明を記載するように警告を出す
    '@typescript-eslint/ban-ts-comment': 'warn',
    // no-unused-imports で import 除去を設定するため無効化
    '@typescript-eslint/no-unused-vars': 'off',
    // import type への振り分けをすることで視認性の向上を行う
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
  },
};
