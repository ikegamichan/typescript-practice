import { AccordionBox } from '@/components/accordion-box';
import { Header } from '@/components/header';
import { Ul } from '@/components/ul';

export const Weekly20250701 = () => {
  return (
    <AccordionBox title="2025年7月1日・7日メモ">
      <Header title="CSSについて" size="S" />
      <Header
        title="### 同じ余白を当てたい時は個別にmarginをあてるのではなく、grid-gapやgap、spaceを使用する"
        size="XS"
      />
      <Ul type="primary">
        <li>
          デザイン崩れのリスクが高まるため
          <Ul type="secondary">
            <li>
              条件分岐によって出しわけをしているコンポーネントの要素が出ない場合に、個別に当てていると余分なスペースが生まれてしまうリスクがあり、デザイン修正保守コストがかなり高くなる
            </li>
          </Ul>
        </li>
        <li>再利用性向上のため</li>
        <Ul type="secondary">
          <li>コンポーネント側で要素の外側に余白(margin)はつけない。利用側(親)でよしなに指定してあげるべき</li>
        </Ul>
      </Ul>
      <br />
      <Header title="### graphQLの ... on xxxはユニオン型でデータを持っているものだった場合に必ず必要" size="XS" />
      <div>
        xxxの部分にはユニオン型の要素名が入る。ユニオン型共通で使用しているものはこの中に入れないで問題ないが、各ユニオン型で1つでも使用されていないfieldの場合は、...
        on xxxの中に入れる必要がある。
      </div>
      <div>呼び出す際は、型ガードを使用することで、型安全に呼び出して使用することができる</div>
      <br />
      <div>
        例）ミニ末端をホバーするとfetchVideoが走る。その後末端を開いてもfetchVideoは走らないがデータを取得できている。idと_typeNameによってキャッシュがある場合には叩かないようにgraphQLがよしなに対応しているのでコードとしての記述はない。叩かないことで効率よくデータを表示することができるようになっている。
        <br />
        直接リンクにアクセスされた場合にはもちろんキャッシュがないので、fetchVideoが走るようなコードになっている。そのため、ミニ末端と末端で取得できるフィールドは一緒になっており、一緒だからこそ再度叩かないでよくなる。もし足りない場合はもう一度取得する必要があるためあえてミニ末端では使わないものも一緒に取得している。
        <br />
        これが in memory cacheというもの。cache.tsにあるInMemoryCacheがそれをやってくれている処理。
        <br />
        <br />
        <Header title="### fetch policy" size="XS" />
        <Ul type="primary">
          <li>
            ⭐️cache-first(default)
            <Ul type="secondary">
              <li>
                全てのデータが取得済みでキャッシュされており利用可能な場合、GraphQLサーバーにクエリを送信しない方法
              </li>
              <li>まさにミニ末端から末端にアクセスした場合がこれに当たるような理解をしている</li>
            </Ul>
          </li>
          <li>
            cache-only
            <Ul type="secondary">
              <li>cacheからのみクエリを取得する方法。</li>
              <li>リクエストした全てのフィールドがcacheにない場合は、エラーをスローする</li>
            </Ul>
          </li>
          <li>
            cache-and-network
            <Ul type="secondary">
              <li>cacheとgraphQLサーバーの双方にリクエストを送りクエリを取得する方法。</li>
              <li>cache-firstとの違いがよくわからん。。。同時にアクセスする方がいいのか？？</li>
            </Ul>
          </li>
          <li>
            ⭐️network-only
            <Ul type="secondary">
              <li>GraphQLサーバーに必ずリクエストを送る。その後クエリはcacheに保存される</li>
              <li>即座に反応することができない。</li>
            </Ul>
          </li>
          <li>
            ⭐️no-cache
            <Ul type="secondary">
              <li>network-onlyと似ているらしいが、、、</li>
            </Ul>
          </li>
          <li>
            stand-by
            <Ul type="secondary">
              <li>使うのか？？</li>
            </Ul>
          </li>
        </Ul>
        <br />
        <div className="text-lg font-bold">
          それぞれがいつどこでどのように使われているのかのイメージができていないので内田さんに聞く
        </div>
        <br />
        <div className="text-lg font-bold">
          cache-first、network-only、no-cacheの違いがわかれば今のところは良さそう。
        </div>
        <Ul type="primary">
          <li>
            ⭐️cache-first(default)
            <Ul type="secondary">
              <li>弊害：videoのお気に入りなどユーザー操作によって情報が変わる時</li>
              <li>refetchしてしまうか、cacheのお気に入りのフラグだけtrue/falseを切り替えてあげる</li>
              <li>
                fanのartistChannelPostなどは、performanceProviderを使用しているあたりで即時反映のためにcacheを直接書き換えている箇所があるが、直感的ではなくなってしまっていてわかりにくい。
              </li>
              <li>
                その後のポーリング処理で、同じidのデータがサーバーから帰ってきたら、直接書き換えたデータを消す処理を入れているが複雑になり、保守運用コストがかなり上がりそうなイメージ。
              </li>
            </Ul>
          </li>
          <li>
            ⭐️no-cache
            <Ul type="secondary">
              <li>
                新鮮なデータをgraphQLサーバーから取得して、一時的に取得・使用するが、cacheにも保存しない。no-cacheにも弊害がある。cacheされないことがシンプルな問題。ページネーションのようにcacheに溜め込んでデータを判断するものの場合、no-cacheで溜め込まないことでずっとcacheがたまらずバグった。そういう時のためにnetwork-only
              </li>
            </Ul>
          </li>
          <li>
            ⭐️network-only
            <Ul type="secondary">
              <li>弊害として、cacheに入れてしまう。</li>
              <li>
                21-40件目までをnetwork-onlyでデータを取得してしまった後に、前のページに遷移した際にcache-firstでcacheを見てしまったために他のデータが入っているからという理由で、1-20件が取得されずに、21-40件目までが表示されてしまった。だから、cacheにいれないようにno-cacheにした。playerのエピソードリストはno-cacheで取る。そのため、戻るときにも再度リクエストが走るので正しいデータが取得できる。※歪なデータを取得する場合は基本no-cacheにすると安全にデータを取得・処理できる。
                ownerのsrc/lib/apollo/client.tsxで具体的な記述がある。
              </li>
            </Ul>
          </li>
        </Ul>
      </div>
    </AccordionBox>
  );
};
