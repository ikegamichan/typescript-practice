'use client';

import { AccordionBox } from '@/components/accordion-box';
import { CodeBlock } from '@/components/code-block';
import { Section } from '@/components/description';
import { Header } from '@/components/header';

export const ArrayPractice = () => {
  return (
    <div>
      <Header title="Array(配列)について" size="L" />
      <Section title="概要">TODO:概要を記載する</Section>
      <Section title="利用シーン">TODO:利用シーンを記載する</Section>
      <Section title="配列操作の具体例">
        <div className="space-y-8">
          {/* 1つめ */}
          <AccordionBox title="既存の配列から新たな配列を生成したい時(map)">
            <CodeBlock code={mapCode} />
          </AccordionBox>
          {/* 2つめ */}
          <AccordionBox title="既存の配列から単一のデータを取得したい時(reduce)">
            <div>例：配列から総合計を取得する処理 </div>
            <CodeBlock code={reduceCode} />
          </AccordionBox>
          {/* 3つめ */}
          <AccordionBox title="既存の配列をオブジェクトに変換して取得したい時①(reduce)">
            <div>例：配列から要素の重複数をカウントしオブジェクトでアウトプット </div>
            <CodeBlock code={reduceCode2} />
            <div className="text-gray-800">
              <div>💡理解が難しかったポイント </div>
              <div className="font-semibold">acc[fruit] = (acc[fruit] || 0 ) + 1 ←これ</div>
              <div>- acc[fruit]はaccオブジェクト内のkeyが[fruit]の要素のvalueにアクセスしている(ここまではわかる)</div>
              <div>
                - acc[fruit]でaccオブジェクト内にアクセスしたものの
                <span className="font-semibold text-red-600">
                  keyに[fruit]がなかった場合、新たにオブジェクト内にkey,valueが生成されるされる
                </span>
                という基礎の基礎を理解できていなかったので、何やってんだ？とずっとなっていた
              </div>
            </div>
          </AccordionBox>
          {/* 4つめ */}
          <AccordionBox title="既存の配列をオブジェクトに変換して取得したい時②(reduce)">
            <div>例：配列内のオブジェクトを操作し、新たなオブジェクトでアウトプット </div>
            <CodeBlock code={reduceCode3} />
          </AccordionBox>
        </div>
      </Section>
    </div>
  );
};

const mapCode = `  const NUMBERS = [10, 30, 60];

  const doubleNumbers = NUMBERS.map((number) => {
    return number * 2;
  });

  console.log(doubleNumbers);
  // result => [20,60,120]`;

const reduceCode = `const PRICES = [10, 30, 60];
const total = PRICES.reduce((prev, currentPrice) => {
  // prev: これまでの合計値
  // currentPrice: 現在の要素
  return prev + currentPrice;
}, 0);

console.log(total);
return => 100`;

const reduceCode2 = `const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const FruitsCountObject = fruits.reduce<Record<string, number>>((prev, fruit) => {

  prev[fruit] = (prev[fruit] || 0) + 1;
  return prev;
}, {});

console.log(FruitsCountObject, 'FruitsCountObject');
return => {apple: 3, banana: 2, orange: 1};`;

const reduceCode3 = `type User = { id: number; name: string; age: number };
const users: User[] = [
  { id: 10, name: 'たくと', age: 28 },
  { id: 15, name: 'はなこ', age: 22 },
  { id: 23, name: 'じろう', age: 34 },
];

const userMap = users.reduce<Record<number, User>>((prev, user) => {
  prev[user.id] = user;
  return prev;
}, {});

console.log(userMap);
return =>
{
  10: { id: 10, name: 'たくと', age: 28 },
  15: { id: 15, name: 'はなこ', age: 22 },
  23: { id: 23, name: 'じろう', age: 34 },
}`;
