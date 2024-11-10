/**
 * 以下を参考としながら、勉強している。詰まったら再度見る
 * @see https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a
 */

// string型
const myName: string = 'tanaka';
const yourName = 'sato'; // 型推論でstring

// number型
const age: number = 30;
const age2 = 30; //型推論でnumber

// boolean型
const isYoung: boolean = age < 20;
const isNotYoung = age >= 20; //型推論でboolean

// リテラル型
type selectedSize = 'Small' | 'Medium' | 'Large';
const chooseFrenchFriedSize: selectedSize = 'Large'; //"Small"|"Medium"|"Large";のいずれかしか選択できないようになっている

// object型
type PersonalInfo = {
  age: number;
  height: number;
  weight: number;
  from: string;
};

const sato: PersonalInfo = {
  age: 20,
  height: 160,
  weight: 55,
  from: 'Canada',
};

const tanaka = {
  age: 30,
  hight: 180,
  weight: 90,
  from: 'Japan',
}; //型推論でobject型

// Array型
const books: string[] = ['book1', 'book2', 'book3', 'book4'];
const vegetables = ['tomato', 'onion', 'eggplant', 'cabbage']; //型推論でarray型

// Array型(複数のtypeが共存している場合)
const stringAndNumber = ['aaa', 12, 'bbb', 345]; // (string | number)[]
const stringAndNumberAndBoolean = ['ccc', 1, true, 23, 'ddd', false]; // (string | number | boolean)[]

// 型が知りたい時は `typeof`演算子を使うといいよ
console.log(typeof vegetables); //string[]

// 関数型
type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => {
  return a + b;
};

// MEMO: functionに関数型を使用することはできない
//function sum:Sum() {} はエラーになる

// 可変長引数を定義したい場合の型

const countFoodLength = (...foods: string[]) => {
  return foods.length;
};

const result = countFoodLength('aa', 'bb', 'cc');
console.log(result); //3

//==============================================================

// ①typeofでできること
// 型定義をしていないcolorsを作成する
const colors = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};

//colorsをtypeに変換し抽象化する
type ColorsType = typeof colors;
// ColorsTypeは { red: string; green: string; blue: string } という型になる

// ②keyofでできること
// ColorsType { red: string; green: string; blue: string }から、keyだけを抽出しユニオン型にすることが可能
type ColorKeys = keyof ColorsType;
// ColorKeysは "red" | "green" | "blue" という型になる

// ③keyof typeofでできること
// ①と②を1行で実施することができる
type ColorKeys2 = keyof typeof colors;
// ColorKeys2は "red" | "green" | "blue" という型になる

// ④いけてる使い方 valueをユニオン型として抽出したい場合
type Color = (typeof colors)[keyof typeof colors];
// Colorは "#FF0000"|"#00FF00"|"#0000FF" という型になる

//==============================================================

//【応用】 Mapped Types
