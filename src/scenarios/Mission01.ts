import Chat from "@/types/Chat";

const chatList: Array<Chat> = [
  {speaker: 'human', comment: 'いよいよ初めてのお仕事ですね！僕たちがこの星に最初の住人となるのです！まずは僕たちの部屋を建設しましょう。'},
  {speaker: 'dog', comment: 'じゃあ、あの住居を選択してくれる？'},
  {speaker: 'dog', comment: 'いいね、次に部屋を作りたいから「Create Room」ボタンをクリックしよう'},
  {speaker: 'human', comment: 'お、なんだか色々出てきましたね...'},
  {speaker: 'dog', comment: '住居の右上の表はこの物件の部屋の情報を示すものだよ。まだ誰も住んでないから情報は空だね。'},
  {speaker: 'dog', comment: '画面下のモニターはSQLを記述するための画面だよ。'},
  {speaker: 'human', comment: 'なるほど、ここにSQLを書いて部屋を建設することができるんですね！'  },
  {speaker: 'dog', comment: 'そうそう。まずは部屋を作成するための「Insert文」のお手本を示すね！'},
  {speaker: 'dog', comment: 'INSERT文はこんな風に使うんだ。INSERT INTO  建物名 （カラム名1, カラム名2, ...）VALUES（値1, 値2,  ...）;'},
  {speaker: 'human', comment: '今回はこの星一番の人気物件「haitsu_yamada」が建物名ですね。...カラム名ってなんでしたっけ？'  },
  {speaker: 'dog', comment: 'カラム名は今矢印で示している部分のことだよ。「ハイツ山田」に入居している人の情報の種類を示しているんだね。今回は「部屋番号, 名前, 引越し日」のことだよ。'},
  {speaker: 'human', comment: 'なるほど〜。覚えられるかなぁ...。'},
  {speaker: 'dog', comment: '繰り返す内に自然と覚えるから安心してね。'},
  {speaker: 'dog', comment: 'じゃあ、これで実行してみよう！Runボタンを押してくれる？'},
  {speaker: 'human', comment: 'あ！部屋が増えました！'},
  {speaker: 'dog', comment: '簡単でしょ！[username]もやってみよう！'},
  {speaker: 'human', comment: `えーっと、\n INSERT INTO  建物名 （カラム名1, カラム名2, ...）VALUES（値1, 値2,  ...）; \n と書けばOKでしたね、頑張って下さい！`},
  {speaker: 'human', comment: 'おぉ、すごいです！さすが期待の新人ですね！'},
  {speaker: 'dog', comment: '最後にもう１部屋追加して終わりにしましょう！'},
  {speaker: 'dog', comment: '完璧だねー！もう部屋は好きなように作れるね！お疲れ様！'},
]

export default chatList
