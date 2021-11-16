import Chat from "@/types/Chat";

const chatList: Array<Chat> = [
  {speaker: 'human', comment: 'いよいよ初めてのお仕事ですね！僕たちがこの星に最初の住人となるのです！まずは僕たちの部屋を建設しましょう。'},
  {speaker: 'dog', comment: 'じゃあ、ボタンを押して部屋作成を始めてみましょう。'},
  {speaker: 'dog', comment: 'INSERT文はこんな風に使うんだ！INSERT INTO  建物名 （カラム名1'},
  {speaker: 'human', comment: '今回はこの星一番の人気物件「haitsu_yamada」が建物名ですね。...カラム名ってなんでしたっけ？'  },
  {speaker: 'dog', comment: 'カラム名は今矢印で示している部分のことだよ。「ハイツ山田」に入居している人の情報の種類を示しているんだね。今回は「部屋番号'}
]

export default chatList
