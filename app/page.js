import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className="mainVisualWrapper">
        <div className="imageWrapper">
          <img className='overlay' src="./img/img002.jpg" />
        </div>
        <div className="copyContainer">
          <h1>DeskCrafters</h1>
          <p>〜Techを支える場所〜</p>
        </div>
      </div>


      <section className='introduction' id="introduction">
        <h2>スキルの源泉は最高の作業環境から</h2>
        <img src="./img/img001.jpg" width="800" />
        <p>リモートワークをする人間はもちろんのこと、学習の場としても作業環境は非常に重要です。</p>
        <p></p>
        <p>しかし、市販のアイテムでは必ずしも自分に適してない場合も多くあります。</p>
        <p>ここでは多くの失敗を重ねて、作業環境をDIYすることに辿り着いた私の作業スペースを紹介します。</p>
      </section >




      <section className='background' id="background">
        <h2>なぜDIYに至ったのか？</h2>
        <p>昔からアウトドア気質で、特に休みの日に長時間座っているのが苦手でした。</p>
        <p>しかし、そうは言ってもITに携わる人間として学習や実践は欠かせません。</p>
        <p>そこで考えたのが「机に向かいたくなる」作業環境の構築です。</p>
        <p>ただ、市販のデスクなどは価格もピンキリで、購入しても自分に合うかどうかは運要素が多いと感じていました。</p>
        <p>（そしていざ購入しても、グレードの高いものを買えばもっと良くなるのでは？という疑念が残る）</p>
        <p>そんな折、ふと「机なんて板に木がついてるだけだし簡単につくれるのでは？」と思い、早速実践したのが全ての始まりです。</p>
      </section >


      <section className='tools' id="tools">
        <h2>制作を支える愛用のDIYツール</h2>
        <div className='flex'>
          <img src="./img/img018.jpg" width="500" />
          <ul>
            <li><b>電動ドライバー</b><br />安価だけどめちゃくちゃ使う。超便利。</li>
            <li><b>L字ステー</b><br />木と木をつなぐ道具。ダボ穴より目立つが手軽。</li>
            <li><b>ワッシャー</b><br />L字ステーで木を接合する時に利用。</li>
            <li><b>RYOBIサンダ</b><br />木の表面を滑らかにするためのヤスリがけに利用。</li>
            <li><b>みつろうクリーム</b><br />塗装後のツヤ消し・ツヤ出しに</li>
          </ul>
        </div>
      </section>


      <section className='benefits' id="benefits">
        <h2>得られたメリット</h2>
        <ol>
          <li><b>金額が安く済む</b><p>高い市販デスクなどを買わずとも満足の行くものを使える。</p>
            <p>ホームセンターで桧や杉の板と間材4本であれば高くとも1万以内で収まる</p></li>
          <li><b>修理が容易</b><p>壊れてもすぐに直せる。</p>
            <p>そもそもめちゃくちゃ丈夫にも作れてガタガタも全く無いようにできる。</p></li>
          <li><b>一生活用できる</b><p>同じものをまた作ることは容易だし、応用して別のものを作ることもできる。</p>
            <p>人生で一度習得すればその先ずっと役立つ。</p>
            <p>実際に同一の技術でダイニングテーブルやテレビの壁付け用ボードや本棚を制作済み。</p></li>
          <li><b>自分好みにカスタマイズ可能</b><p>市販品にはない、自分だけの一品を作れる。</p></li>
          ・机の上になるべくものを置きたくないのでモニターを壁付けできるように支柱を追加
          <div className='flexbox'>
            <img src="./img/img012.jpg" width="114" />
            <img src="./img/img013.jpg" width="200" />
          </div>
          ・壁側の木板にモニターアームを接合しており、自由に距離を調整可能
          <div className='flexbox'>
            <img src="./img/img006.jpg" height="250" />
            <img src="./img/img007.jpg" height="250" />
          </div>
          ・大きくて邪魔なスピーカーも上部の専用エリアに置けることで机はスッキリ
          <div className='flexbox'>
            <img src="./img/img005.jpg" width="500"></img>
            <img src="./img/img004.jpg" width="180"></img>
          </div>
        </ol>
      </section>



      <section className='items' id="items">
        <h2>最高のデスクに存在する、最高のアイテム</h2>
        <p>机周りにあまりものを置きたくないのですが、そんな中でもこれは良いと思ったものを紹介</p>
        <div className='flex'>
          <img src="./img/img008.jpg" width="300" />
          <ul>
            <li><b>M2 MacBook Air ミッドナイト</b><p>トラックパッド、キーボードが非常に好きで、<br />本体＋外部モニターのみで使っています。</p></li>
            <li><b>DELLモニター 27インチ 4K</b><p>シンプルなデザインかつ必要十分。</p></li>
          </ul>
        </div>

        <div className='flex'>
          <img src="./img/img011.jpg" width="500" />
          <ul>
            <li><b>DENONスピーカー DHT-S217</b><p>良い音過ぎなく、作業中も自然な感じで聞ける<br />Bluetoothでコードの削減にも役立っている。</p></li>
          </ul>
        </div>

        <div className='flex'>
          <img src="./img/img010.jpg" width="500" />
          <ul>
            <li><b>Amazon Echo Dot</b><p>「おやすみ」でエアコンも照明も切れる設定が便利。</p></li>
            <li><b>3COINS ストーンディフューザー</b><p>3COINSのコスパぶっ壊れ製品。</p><br /><p>たしか500円の商品だが、他の店の製品でここまで質感の良いものは倍の金額を出してもまずない。</p></li>
          </ul>
        </div >

        <div className='flex'>
          <img src="./img/img014.jpg" width="500" />
          <ul>
            <li><b>LENTION ドッキングステーション</b><p>デスク裏に配置し、MacとUSB一本で接続。<br />モニターのほか、マイクやSSDと接続。</p></li>
          </ul>
        </div >

        <div className='flex'>
          <img src="./img/img016.jpg" height="440"></img>
          <ul>
            <li><b>MX ANYWHERE 3S</b><p>ボタンで3つのデバイスを切り替えできて便利。<br />Windowsを使いたい時にも活用。<br />欠点は高すぎること。</p></li>
          </ul>
        </div >

        <div className='flex'>
          <img src="./img/img009.jpg" width="300" />
          <ul>
            <li><b>上島珈琲店 真空断熱タンブラー</b><p>上島珈琲店のムックでのみ購入のできる限定商品<br />銅の色合いと質感が最高に渋くて良い。</p>
              <img src="./img/item_cup.jpg" width="250" />
            </li>
          </ul>
        </div>

      </section >



      <section className='conclusion' id="conclusion">
        <h2>DIYスキルは一生の財産</h2>
        <p>多くの学問やスキルは習得するまでに時間がかかり、それを実践することもまた時間がかかりますが、</p>
        <p>DIYスキルはすぐにでも実践でき、自分にメリットをもたらしてくれます。</p>
        <p>自分の作業環境で思うところがあればいっそ気軽に作ってみるのはいかがでしょうか。</p>
        <div className='flexbox'>
          <img src="./img/img003.jpg" height="250"></img>
          <img src="./img/img017.jpg" height="250"></img>
          <img src="./img/img020.jpg" height="250"></img>
          <img src="./img/img021.jpg" height="250"></img>
          <img src="./img/img019.jpg" height="250"></img>
        </div>
      </section>

      <section className='copyright'>
        ©2023 futa.
      </section>
    </>
  )
}
