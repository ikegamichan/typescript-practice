'use client';

import { AccordionBox } from '@/components/accordion-box';
import { CodeBlock } from '@/components/code-block';
import { Section } from '@/components/description';
import { Header } from '@/components/header';

export const ArrayPractice = () => {
  return (
    <div>
      <Header title="Array(配列)について" />
      <Section title="概要">えええええええええええええええええええ</Section>
      <Section title="利用シーン">えええええええええええええええええええ</Section>
      <Section title="具体例">
        <AccordionBox title="こんにちは">
          <div>
            <CodeBlock code={sampleCode} />
          </div>
        </AccordionBox>
      </Section>
    </div>
  );
};

const sampleCode = `// 文字列を逆にして出力する関数
    function reverseString(str: string): string {
      return str
        // 文字列を配列に分割
        .split('')
        // 配列を逆順に
        .reverse()
        // 配列を再び文字列に結合
        .join('');
    }

    console.log(reverseString('hello')); // => 'olleh'
  `;
