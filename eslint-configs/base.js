/**
 * Base ESLint 設定
 * - import の並び替え、未使用 import の削除など、プロジェクト共通で適用したいルールを定義。
 * {@link https://eslint.org/docs/latest/rules/}
 */
module.exports = {
  // export、importの並び替えと未使用のimportを削除するためのプラグイン
  plugins: ['sort-exports', 'import', 'unused-imports'],
  // 推奨されるESLintのルールと、importプラグインによるエラー・警告のルールを拡張
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    // 未使用のimportを禁止する
    'unused-imports/no-unused-imports': 'error',
    // 未使用の変数の宣言を禁止する（ただし、_から始まる変数名は無視する）
    'unused-imports/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    // デフォルトのESLintのsort-importsルールを無効化し、カスタムのimport/orderルールを使用
    'sort-imports': 'off',
    // importの順序をアルファベット順に統一
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    // デフォルトのno-unused-varsルールを無効化し、unused-importsプラグインを使用
    'no-unused-vars': 'off',
    // console.logの使用を禁止し、console.warnとconsole.errorのみを許可
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'], // console.warnとconsole.errorのみ許可
      },
    ],
  },
};
