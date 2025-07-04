// TODO: typeもアウトプットできるように変更する

/**
 * 以下を参考としながら、勉強している。詰まったら再度見る
 * @see https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a
 */

// string型
// const myName: string = 'tanaka';
// const yourName = 'sato'; // 型推論でstring

// number型
// const age: number = 30;
// const age2 = 30; //型推論でnumber

// boolean型
// const isYoung: boolean = age < 20;
// const isNotYoung = age >= 20; //型推論でboolean

// リテラル型
// type selectedSize = 'Small' | 'Medium' | 'Large';
// const chooseFrenchFriedSize: selectedSize = 'Large'; //"Small"|"Medium"|"Large";のいずれかしか選択できないようになっている

// object型
// type PersonalInfo = {
//   age: number;
//   height: number;
//   weight: number;
//   from: string;
// };

// const sato: PersonalInfo = {
//   age: 20,
//   height: 160,
//   weight: 55,
//   from: 'Canada',
// };

// const tanaka = {
//   age: 30,
//   hight: 180,
//   weight: 90,
//   from: 'Japan',
// }; //型推論でobject型

// Array型
// const books: string[] = ['book1', 'book2', 'book3', 'book4'];
// const vegetables = ['tomato', 'onion', 'eggplant', 'cabbage']; //型推論でarray型

// Array型(複数のtypeが共存している場合)
// const stringAndNumber = ['aaa', 12, 'bbb', 345]; // (string | number)[]
// const stringAndNumberAndBoolean = ['ccc', 1, true, 23, 'ddd', false]; // (string | number | boolean)[]

// 型が知りたい時は `typeof`演算子を使うといいよ
// console.log(typeof vegetables); //string[]

// 関数型
// type Sum = (a: number, b: number) => number;

// const sum: Sum = (a, b) => {
//   return a + b;
// };

// MEMO: functionに関数型を使用することはできない
//function sum:Sum() {} はエラーになる

// 可変長引数を定義したい場合の型

// const countFoodLength = (...foods: string[]) => {
//   return foods.length;
// };

// const result = countFoodLength('aa', 'bb', 'cc');
// console.log(result); //3

//==============================================================

// ①typeofでできること
// 型定義をしていないcolorsを作成する
// const colors = {
//   red: '#FF0000',
//   green: '#00FF00',
//   blue: '#0000FF',
// };

//colorsをtypeに変換し抽象化する
// type ColorsType = typeof colors;
// ColorsTypeは { red: string; green: string; blue: string } という型になる

// ②keyofでできること
// ColorsType { red: string; green: string; blue: string }から、keyだけを抽出しユニオン型にすることが可能
//ようは"red" | "green" | "blue"の形になっている
// type ColorKeys = keyof ColorsType;
// ColorKeysは "red" | "green" | "blue" という型になる

// ③keyof typeofでできること
// ①と②を1行で実施することができる
// type ColorKeys2 = keyof typeof colors;
// ColorKeys2は "red" | "green" | "blue" という型になる

// ④colorsのvalue
//②と③を使用することで、
//定数colorsのvalue("#FF0000"|"#00FF00"|"#0000FF")を取り出して、新たにユニオン型の"型"を生成することができる
// type Color1 = ColorsType[ColorKeys];
// Colorは "#FF0000"|"#00FF00"|"#0000FF" という型になる

// ⑤typeof(xx)[keyof type xx]でできること
// いけてる使い方(④までにやってきたことを1行で実行可能)
// type Color2 = (typeof colors)[keyof typeof colors];
// ④同様に、Colorは "#FF0000"|"#00FF00"|"#0000FF" という型になる

//==============================================================

// 配列をオブジェクトに変換する方法

// ① 実行時の定数配列をタプルとして定義
// const STATUSES = ['pending', 'done', 'error'] as const;

// ② タプルの要素を取り出すユニオン型を生成
// type Status = (typeof STATUSES)[number]; // "pending" | "done" | "error"

// ③ Record を使ってステータスごとの設定オブジェクト型を定義
// type StatusConfig = Record<Status, { label: string; color: string }>;

// ④ 実際のオブジェクト
// const statusConfig: StatusConfig = {
//   pending: { label: '処理中', color: 'orange' },
//   done: { label: '完了', color: 'green' },
//   error: { label: 'エラー', color: 'red' },
// };

//==============================================================

// オブジェクトを配列に変換する方法
// ① 実行時オブジェクトを定義
// const USER = {
//   id: 1,
//   name: 'Alice',
//   role: 'admin',
// } as const;

// ② キーの配列型を作成
// type UserKey = keyof typeof USER; // "id" | "name" | "role"
// type UserKeyArray = UserKey[]; // Array<"id" | "name" | "role">

// ③ 値の配列型を作成
// type UserValue = (typeof USER)[UserKey]; // 1 | "Alice" | "admin"
// type UserValueArray = UserValue[]; // Array<1 | "Alice" | "admin">

// ④ 実行時に取り出す例
// const keys = Object.keys(USER) as UserKey[]; // ["id","name","role"]
// const values = Object.values(USER) as UserValue[]; // [1,"Alice","admin"]

//==============================================================
//【応用】Lookup Types T[K]

//【応用】Mapped Types

//【応用】Conditional Types
