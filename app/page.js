import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1>DeskCrafters 〜自分だけの作業空間〜</h1>
      <section className='introduction' id="introduction">
        <h2>DIYで作る、最高の作業環境</h2>
        <p>制作職というのは作業環境が非常に重要です。</p>
        <p>しかし市販の机や椅子が必ずしも最適でない場合もあります。</p>
        <p>そんなときには、DIYで自分だけの作業スペースを作るのが一番!このサイトでは、DIYで作業環境を作る楽しさとそのメリットを紹介します。</p>
      </section >
      <section className='background' id="background">
        <h2>なぜDIYで作業環境を作るのか？</h2>
        <p>長時間座って作業をするのは得意ではありませんでしたが、制作職には避けては通れません。</p>
        <p>そこで考えたのが、自分が「机に向かいたくなる」作業環境の構築です。市販の机に満足できず、金額もかさむ中で出会ったのがDIY。</p>
        <p>自分で作れば、全てが自分好みに!</p>
      </section >
      <section className='items' id="items">
        <h2>最高のパートナー、私のデスク周りのアイテム</h2>
        <ul>
          <li>M2 MacBook Air:軽くて高性能。</li>
          <li>DELLモニター 27インチ 4K:作業効率が格段に上がる。</li>
          <li>DENONスピーカー:質の高い音楽で集中力UP。</li>
          <li>Amazon Echo Dot:音声で操作できる便利さ。</li>
          <li>3COINS ストーンディフューザー:リラックス効果で長時間の作業も快適。</li>
          <li>Ankerマイク:クリアな音質でオンラインミーティングもスムーズ。</li>
        </ul>
      </section>

      <section className='tools' id="tools">
        <h2>これがあれば何でも作れる!必須DIY道具</h2>
        <ul>
          <li>電動ドライバー:基本中の基本。これがないと何も始まらない。</li>
          <li>L字ステー:木と木をつなぐときに便利。ダボ穴よりも手軽。</li>
          <li>仕上サンダ:木の表面を滑らかにするために。</li>
          <li>DAISO塗料＆ニス:手軽に色付けと仕上げ。</li>
          <li>木材用ワックス:最後の仕上げに。</li>
        </ul>
      </section>

      <section className='benefits' id="benefits">
        <h2>DIYで得られる5つのメリット</h2>
        <ol>
          <li>金額が安く済む:高い市販品にお金を使わずに済む。</li>
          <li>修理が容易:自分で作ったものは自分で修理できる。</li>
          <li>一生活用できるスキル:一度覚えれば一生もののスキルが身につく。</li>
          <li>市販品への興味喪失:自作する楽しさに気づくと市販品は二の次。</li>
          <li>自分好みにカスタマイズ可能:市販品にはない、自分だけの一品を作れる。</li>
        </ol>
      </section>

      <section className='conclusion' id="conclusion">
        <h2>DIYスキルは一生の財産</h2>
        <p>多くの学問やスキルは習得するまでに時間がかかりますが、DIYスキルはすぐにでも実践でき、一生の財産になります。</p>
        <p>手を動かして何かを作る喜び、それがDIYの魅力です。</p>
      </section>
    </>
  )
}
