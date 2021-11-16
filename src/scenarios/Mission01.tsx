import genChat from '@/utils/genChat'

export default [
  genChat('human', 'いよいよ初めてのお仕事ですね！僕たちがこの星に最初の住人となるのです！まずは僕たちの部屋を建設しましょう。', 'InteractiveResidence' ),
  genChat('dog', 'じゃあ、ボタンを押して部屋作成を始めてみましょう。', 'TitleWindowBtn'),
  genChat('dog', 'INSERT文はこんな風に使うんだ！INSERT INTO  建物名 （カラム名1, カラム名2, ...）VALUES（値1, 値2,  ...）;' ),
  genChat('human', '今回はこの星一番の人気物件「haitsu_yamada」が建物名ですね。...カラム名ってなんでしたっけ？' ),
  genChat('dog', 'カラム名は今矢印で示している部分のことだよ。「ハイツ山田」に入居している人の情報の種類を示しているんだね。今回は「部屋番号, 名前, 引越し日」のことだよ。' ),
]

  