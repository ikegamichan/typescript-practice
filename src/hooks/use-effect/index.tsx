// 概要
// useEffectは、Reactのフックの一つで、関数コンポーネント内で副作用を実行するためのフックです。
// 副作用とは、関数の実行以外の操作で、主に以下のようなものがあります。
// 1. 外部APIの呼び出し
// 2. ローカルストレージへのアクセス
// 3. DOMの操作
// 4. タイマーの設定
// @see(公式ドキュメント):https://ja.react.dev/reference/react/useEffect
// @see(わかりやすかったコラム):https://zenn.dev/yend724/articles/20240711-qfbqiba6m9iul2al

// ユーザーのアクション以外でeffectの更新必要な場合にuseEffeectは必要になる。
// @see(公式ドキュメント):https://ja.react.dev/learn/you-might-not-need-an-effect(useEffectを使うべきでないケース)

'use client';

import { useEffect, useState } from 'react';

// 秒数を表示するClockコンポーネントの例
export const Clock = () => {
  // 初回描画時のハイドレーションエラーを防止するためにdateTimeにnullを追加し、nullだった場合にはreturnする処理を入れている。
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!dateTime) return null;

  return <div>{dateTime.toLocaleTimeString()}</div>;
};
