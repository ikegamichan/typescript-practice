import { AccordionBox } from '@/components/accordion-box';
import { Header } from '@/components/header';

export const WeeklyMemo = () => {
  return (
    <div>
      <Header title="Weekly-memo" size="L" />
      <div className="space-y-8">
        <AccordionBox title="2025年7月1日メモ">
          <Header title="CSSについて" size="S" />
          <Header
            title="### 同じ余白を当てたい時は個別にmarginをあてるのではなく、grid-gapやgap、spaceを使用する"
            size="XS"
          />
          <ul className="mx-4 list-outside list-disc">
            <li>
              デザイン崩れのリスクが高まるため
              <ul className="mx-4 list-outside list-[circle]">
                <li>
                  条件分岐によって出しわけをしているコンポーネントの要素が出ない場合に、個別に当てていると余分なスペースが生まれてしまうリスクがあり、デザイン修正保守コストがかなり高くなる
                </li>
              </ul>
            </li>
            <li>再利用性向上のため</li>
            <ul className="mx-4 list-outside list-[circle]">
              <li>コンポーネント側で要素の外側に余白(margin)はつけない。利用側(親)でよしなに指定してあげるべき</li>
            </ul>
          </ul>
          <div>
            graphQLの ... on
            xxxはユニオン型でデータを持っているものだった場合に必ず必要。xxxの部分にはユニオン型の要素名が入る。ユニオン型共通で使用しているものはこの中に入れないで問題ないが、格ユニオン型で1つでも使用されていないfieldの場合は、...
            on xxxの中に入れる必要がある。
          </div>
          <div>呼び出す際は、型ガードを使用することで、型安全に呼び出して使用することができる</div>
          <br />
          <div>
            ミニ末端をホバーするとfetchVideoが走る。その後末端を開いてもfetchVideoは走らないがデータを取得できている。idと_typeNameによってキャッシュがある場合には叩かないようにgraphQLがよしなに対応しているのでコードとしての記述もないが、叩かないことで効率よくデータを表示することができるようになっている。直接リンクにアクセスされた場合にはもちろんキャッシュがないので、fetchVideoが走るようなコードになっている。そのため、ミニ末端と末端で取得できるフィールドは一緒になっており、一緒だからこそサイド叩かないでよくなる。もし足りない場合はもう一度取得する必要があるためあえてミニ末端では使わないものも一緒に取得している。これが
            in memory cacheというもの。cache.tsにあるInMemoryCacheがそれをやってくれている処理。fetch
            policyとはなんぞや？は調べておく！
          </div>
        </AccordionBox>
        <AccordionBox title="2025年xxx月xxx日メモ">xxxxxxxx</AccordionBox>
      </div>
    </div>
  );
};
