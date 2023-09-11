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
        <h2>DIYで作る、最高の作業環境</h2>
        <img src="./img/img001.jpg" width="800" />
        <p>制作職は作業環境が非常に重要です。</p>
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
        <div className='flex'>
          <img src="./img/img008.jpg" width="300" />
          <ul>
            <li><b>M2 MacBook Air</b><p>軽くて高性能。</p></li>
            <li><b>DELLモニター 27インチ 4K</b><p>軽くて高性能。</p></li>
          </ul>
        </div>

        <div className='flex'>
          <img src="./img/img011.jpg" width="500" />
          <ul>
            <li><b>DENONスピーカー</b><p>質の高い音楽で集中力UP。</p></li>
          </ul>
        </div>

        <div className='flex'>
          <img src="./img/img010.jpg" width="500" />
          <ul>
            <li><b>Amazon Echo Dot</b><p>音声で操作できる便利さ。</p></li>
            <li><b>3COINS ストーンディフューザー</b><p>リラックス効果で長時間の作業も快適。</p></li>
          </ul>
        </div >

        <div className='flex'>
          <img src="./img/img014.jpg" width="500" />
          <ul>
            <li><b>LENTION ドッキングステーション</b><p></p></li>
          </ul>
        </div >

        <div className='flex'>
          <img src="./img/img009.jpg" width="300" />
          <ul>
            <li><b>上島珈琲店 真空断熱タンブラー</b><p></p></li>
          </ul>
        </div>

      </section >



      <section className='tools' id="tools">
        <h2>これがあれば何でも作れる!必須DIY道具</h2>
        <div className='flex'>
          <img src="./img/img018.jpg" width="500" />
          <ul>
            <li><b>電動ドライバー</b>基本中の基本。これがないと何も始まらない。</li>
            <li><b>L字ステー</b>木と木をつなぐときに便利。ダボ穴よりも手軽。</li>
            <li><b>ワッシャー</b>L字ステーと組み合わせて木を接合に利用。</li>
            <li><b>RYOBIサンダ</b>木の表面を滑らかにするために。</li>
            <li><b>みつろうクリーム</b>塗装後の最後の仕上げに。</li>
          </ul>
        </div>
      </section>



      <section className='benefits' id="benefits">
        <h2>DIYで得られる5つのメリット</h2>
        <ol>
          <li><b>金額が安く済む</b><p>高い市販品にお金を使わずに済む。</p></li>
          <li><b>修理が容易</b><p>自分で作ったものは自分で修理できる。</p></li>
          <li><b>一生活用できるスキル</b><p>一度覚えれば一生もののスキルが身につく。</p></li>
          <li><b>市販品への興味喪失</b><p>自作する楽しさに気づくと市販品は二の次。</p></li>
          <li><b>自分好みにカスタマイズ可能</b><p>市販品にはない、自分だけの一品を作れる。</p></li>
          ・壁付けできるように支柱を追加
          <div className='flexbox'>
            <img src="./img/img012.jpg" width="114" />
            <img src="./img/img013.jpg" width="200" />
          </div>
          ・壁側の木板にモニターアームを接合しており、自由に距離を調整可能
          <div className='flexbox'>
            <img src="./img/img006.jpg" height="250" />
            <img src="./img/img007.jpg" height="250" />
          </div>
          ・上部にスピーカーも置けるように
          <img src="./img/img005.jpg" width="500"></img>
        </ol>
      </section>

      <section className='conclusion' id="conclusion">
        <h2>DIYスキルは一生の財産</h2>
        <p>多くの学問やスキルは習得するまでに時間がかかりますが、DIYスキルはすぐにでも実践でき、一生の財産になります。</p>
        <p>手を動かして何かを作る喜び、それがDIYの魅力です。</p>
        <div className='flexbox'>
          <img src="./img/img003.jpg" height="250"></img>
          <img src="./img/img017.jpg" height="250"></img>
          <img src="./img/img016.jpg" height="250"></img>
          <img src="./img/img020.jpg" height="250"></img>
          <img src="./img/img021.jpg" height="250"></img>
          <img src="./img/img019.jpg" height="250"></img>
        </div>
      </section>
    </>
  )
}
