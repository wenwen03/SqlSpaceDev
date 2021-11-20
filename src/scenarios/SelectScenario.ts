import ScenarioStep from "@/types/ScenarioStep";
import createScenarioStep from "@/utils/createScenarioStep";

const SelectScenario: Array<ScenarioStep> = [
  createScenarioStep(
    {speaker: 'human', comment: 'さて、家が一件あるだけでは殺風景なので、他の建物も欲しいですねー'},
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'そうね、ただ新しく建設しようにも@資源がないからまずは資源の採掘@をやろう。まずはあの@木をクリック@しよう！'},
    state => { state.step += 1; state.isEmphasize = { spaceWood: true } },
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'この木から建設のための資源を取得しようか。\n@ボタンをクリック@してね。'},
    state => { state.step += 1; state.isEmphasize = { titleWindowBtn: true } },
    'spaceWood'
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'おぉ、また色々と出てきましたね'},
    state => { state.step += 1; state.isEmphasize = {} },
    'titleWindowBtn'
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'この木から資源を得るためにもSQLを使う必要があるんだよ。資源を得るには@ここに書かれているタスクをクリアする必要がある@のよ'},
    state => { state.step += 1; state.isEmphasize = { taskCard: true } },
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'えーっと@「wood」だけを取得する@...ですか。'},
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'そうだよ、@この木が蓄えている資源がこのテーブルに表示@されていて、ここから条件にあった資源だけを取得するんだね'},
    state => { state.step += 1; state.isEmphasize = { resourceWindow: true } },
  ),
  createScenarioStep(
    {speaker: 'dog', comment: '特定の資源を取り出すために@Select文@という構文を扱うよ。まずは僕がお手本を示すね'},
    state => { state.step += 1; state.isEmphasize = {} },
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'Select文の構文はこんな感じなんだ！\nSELECT @取得したいカラム名@ FROM @テーブル名@\nWHERE @条件@;'},
    state => { state.step += 1; state.initialText = "SELECT * FROM space_wood01\nWHERE name = 'wood'" }
  ),
  createScenarioStep(
    {speaker: 'human', comment: '先輩のお手本には取得したいカラム名のところに@*（アスタリスク）@がありますけどこれはどんな意味があるんですか？'},
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'これは@「全部」@という意味なんだ。@条件に一致するレコードの全ての列を取得する@ということだね。'},
  ),
  createScenarioStep(
    {speaker: 'human', comment: "ほうほう。条件のところでは「name = 'wood'」と指定して「wood」だけを取り出そうとしているんですね"},
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'そうだよ。この条件を記述する部分を@「Where句」@と呼んで頻繁に使うから覚えておこうね。\nじゃあ@RUNボタンを押してみよう！@'},
    state => { state.step += 1; state.isEmphasize = { runBtn: true } }
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'お、クリアしたみたいですね！...あれ、２つ目のタスクが出てきましたね。'},
    state => { state.step += 1; state.isEmphasize = {}; state.taskStep += 1 },
    'runResultModal'
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'タスクは全部で3つあるから、あと２つだね。'},
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'げ...面倒臭いですね。\n今回は「hardness」が70@以上@とありますけど、これはどうやって条件を書くんですか...？'},
  ),
  createScenarioStep(
    {speaker: 'dog', comment: '「〜以上」という条件は不等号を使って書くよ。〇〇が70以上であれば「〇〇 >= 70」って書くだけだよ！'},
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'なるほど。今回だと@「hardess >= 70」@ って書けばOKですかね。頑張って下さい！'},
  ),
  createScenarioStep(
    {speaker: 'human', comment: 'さすがですね。たくさん資源を獲得できています！次は@「未満」@ですね。これも不等号を使ってかけそうですね！\n@「〇〇 < 90」@とかな気がしまします！やってみましょう。'},
    state => { state.step += 1; state.taskStep += 1 },
    'runResultModal'
  ),
  createScenarioStep(
    {speaker: 'dog', comment: '完璧だね！文句なしの出来栄えだよ！お疲れ様ー！'},
    state => { state.step += 1; state.showCompleteModal = true },
    'runResultModal'
  ),
  createScenarioStep(
    {speaker: 'dog', comment: 'end'},
    _ => void(0),
    ''
  ),
]


export default SelectScenario;