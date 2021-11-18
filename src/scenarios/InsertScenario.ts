import { MissionState } from "@/redux/missions/slice"
import Chat from "@/types/Chat"

interface ScenarioStep {
  serif: Chat,
  condition?: string,
  action: (MissionState?) => void
}

const genScenario = function(
  serif: Chat,
  action: (MissionState) => void = state => state.step += 1,
  condition: string = 'main',
): ScenarioStep {
  return {
    serif,
    action,
    condition
  }
}

const InsertScenario: Array<ScenarioStep> = [
  genScenario(
    {speaker: 'human', comment: 'いよいよ初めてのお仕事ですね！\n僕たちがこの星に最初の住人となるのです！\nまずは僕たちの部屋を建設しましょう。'},
  ),
  genScenario(
    {speaker: 'dog', comment: 'そうね！\nじゃあ[username]さん、@あの住居を選択してくれる？@'},
    state => { state.step += 1; state.isEmphasize = { residence: true }; }
  ),
  genScenario(
    {speaker: 'dog', comment: 'いいね、次に部屋を作りたいから@「Create Room」ボタンをクリック@しよう'},
    state => { state.step += 1; state.isEmphasize = { titleWindowBtn: true }; },
    'residence'
  ),
  genScenario(
    {speaker: 'human', comment: 'お、なんだか色々出てきましたね...'},
    state => { state.step += 1; },
    'titleWindowBtn'
  ),
  genScenario(
    {speaker: 'dog', comment: '住居の右上の表は@この物件の部屋の情報@を示すものだよ。まだ誰も住んでないから情報は空だね。'},
    state => { state.step += 1; state.isEmphasize = {  residenceWindow: true }; }
  ),
  genScenario(
    {speaker: 'dog', comment: '画面下のモニターは@SQLを記述するための画面@だよ。'},
    state => { state.step += 1; state.isEmphasize = { monitor: true }; }
  ),
  genScenario(
    {speaker: 'human', comment: 'なるほど、ここにSQLを書いて部屋を建設することができるんですね！'  },
    state => { state.step += 1; state.isEmphasize = {}; }
  ),
  genScenario(
    {speaker: 'dog', comment: 'そうそう。まずは部屋を作成するための@「Insert文」のお手本を示すね！@'},
    state => { state.step += 1; state.initialText = `INSERT INTO yamada_haitsu \n  (id, name, moved_at)\n  VALUES(101, dog, now());`}
  ),
  genScenario(
    {speaker: 'dog', comment: 'INSERT文はこんな風に使うんだ。\nINSERT INTO  @建物名 （カラム名1, カラム名2, ...）\n@VALUES@（値1, 値2,  ...）@;'},
  ),
  genScenario(
    {speaker: 'human', comment: '@建物名は「house01」ですね。\n@...カラム名ってなんでしたっけ？'  },
  ),
  genScenario(
    {speaker: 'dog', comment: '@カラム名は今矢印で示している部分@のことだよ。「house01」に入居している人の情報の種類を示しているんだね。今回は@「部屋番号, 名前, 引越し日」@のことだよ。'},
  ),
  genScenario(
    {speaker: 'human', comment: 'なるほどぉ。先輩のお手本の中に「@now()@」ってあるんですけどあれはなんですか？'},
  ),
  genScenario(
    {speaker: 'dog', comment: 'あれは今日の日付を意味してるんだよ。\n便利だから覚えておくといいよ。'},
  ),
  genScenario(
    {speaker: 'dog', comment: 'じゃあ、これで実行してみよう！\n@Runボタンを押してくれる？@'},
    state => { state.step += 1; state.isEmphasize = { runBtn: true }; }
  ),
  genScenario(
    {speaker: 'human', comment: 'あ！部屋が増えました！'},
    state => { state.step += 1; state.isEmphasize = {}; state.initialText = '' },
    'runResultModal'
  ),
  genScenario(
    {speaker: 'dog', comment: '簡単でしょ！[username]の部屋も追加してみよう！\n@部屋番号: 102@\n@名前: test-user@\n@引越日: [今日の日付]@\nという内容で部屋を追加してみてね！'},
    state => { state.step += 1; state.goal = 'INSERT INTO 建物名\n（カラム名1, カラム名2, ...）\nVALUES（値1, 値2,  ...）;'},
  ),
  genScenario(
    {speaker: 'human', comment: 'おぉ、すごいです！さすが期待の新人ですね！'},
    state => { state.step += 1 },
    'runResultModal'
  ),
  genScenario(
    {speaker: 'human', comment: '最後に僕の部屋も追加して欲しいです！\n@部屋番号: 103@\n@名前: zako@\n@引越日: [今日の日付]@\nという内容で部屋を追加して下さい！'},
  ),
  genScenario(
    {speaker: 'dog', comment: '完璧だねー！もう部屋は好きなように作れるね！お疲れ様！'},
    state => { state.step += 1; state.showCompleteModal = true },
    'runResultModal'
  ),
  genScenario(
    {speaker: 'human', comment: ''},
    state => void(0),
    ''
  ),
]

export default InsertScenario;
