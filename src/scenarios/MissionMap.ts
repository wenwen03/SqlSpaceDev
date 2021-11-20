import MissionMap from "@/types/Mission";

const missionMap: MissionMap = {
  Insert: {
    title: 'Inset文の基本を学ぼう',
    nextPath: '/mission/select' ,
    description: 'この会社には研修がなく、教育制度が整っていないみたい。\nテキトーに応募したのがよくなかったね！\n\nこのミッションでは、SQLができることなどを実際にSQLを使用しながら\n学んでいきます。SQLマスターの第一歩を踏み出そう！',
    purposes: ['SQLとは何かを理解する', 'SQLでできることを理解する']
  },
  Select: {
    title: 'Select文の基本を学ぼう',
    nextPath: '/mission/select' ,
    description: '都市開発をしようにも材料がないから建設できないみたい。Select文を駆使して必要な資源を探してこよう。',
    purposes: ['基本的なSelect文を扱えるようになる', 'Where句で条件指定ができる']
  }
}

export default missionMap