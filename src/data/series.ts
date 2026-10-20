/** Researched 2026-10-20. Summaries are concise archive annotations, not copied synopses. */
export type SeriesSource = {
  sourceUrl: string;
  sourceName: string;
  sourceType: 'official' | 'official-press' | 'database' | 'encyclopedia' | 'community';
  verificationStatus: 'confirmed' | 'secondary' | 'inferred' | 'unknown';
  season: 1 | 2 | 'both';
  note?: string;
};
export interface SeasonRecord {
  id: 'crowds' | 'insight'; season: 1 | 2; title: string; titleJa: string; year: number;
  titleZh: string; broadcast: string; importantCharacters: string[];
  episodeCount: number; special: string; summary: string; themes: string[];
  staff: { role: string; name: string }[]; sources: SeriesSource[];
}
export interface EpisodeRecord {
  id: string; season: 1 | 2; number: number; title: string; kind: 'tv' | 'special';
  synopsis: string; sources: SeriesSource[]; image?: string; releaseDate?: string;
}
export interface MusicRecord {
  id: string; season: 1 | 2; type: 'OP' | 'ED' | 'OST'; title: string; artist: string;
  releaseDate: string; description: string;   officialUrl: string;
  sources: SeriesSource[];
}
export interface ConceptRecord {
  id: string; name: string; nameJa: string; season: number[];
  description: string; limitations: string; sources: SeriesSource[];
}

const official = (sourceUrl: string, sourceName: string, season: SeriesSource['season'], note?: string): SeriesSource => ({
  sourceUrl, sourceName, sourceType: 'official', verificationStatus: 'confirmed', season, note,
});
const secondary = (sourceUrl: string, sourceName: string, season: SeriesSource['season'], note?: string): SeriesSource => ({
  sourceUrl, sourceName, sourceType: 'encyclopedia', verificationStatus: 'secondary', season, note,
});
const vapBox = official('https://www.vap.co.jp/GATCHAMAN_Crowds/dvd/disc01.html', 'VAP｜第一季 Blu-ray / DVD BOX', 1, '核實正式 12 話集名與 #12DC Embrace；DC 為另一版本，不另計為第 13 集 TV。');
const englishEpisodes = secondary('https://en.wikipedia.org/wiki/List_of_Gatchaman_Crowds_episodes', '英文 Wikipedia｜各話列表', 'both', '第一季短摘要與第二季英文集名；播出日各資料庫使用深夜前一日或實際日，故不混用為單一精確日期。');
const japaneseSettings = secondary('https://ja.wikipedia.org/wiki/ガッチャマン_クラウズ', '日文 Wikipedia｜設定', 'both', '設定條目；仍須與原作、官方設定集對照，二手記錄不標成官方確認。');
const press = (season: 1 | 2): SeriesSource => ({
  sourceUrl: 'https://animestyle.jp/news/2013/04/16/4533/', sourceName: 'WEBアニメスタイル｜2013 年官方發布資料轉載',
  sourceType: 'official-press', verificationStatus: 'confirmed', season,
  note: '文章明示以下為發布資料摘錄；作品設定、主創名單。',
});
const insightStory = (number: number) => official(`https://www.ntv.co.jp/GC_insight/story/story${String(number).padStart(2, '0')}.html`, `日本電視台｜insight #${number} 官方故事`, 2, '依該集官方預告簡述整理；並非逐場景完整劇情。');

export const seasons: SeasonRecord[] = [
  {
    id: 'crowds', season: 1, title: 'GATCHAMAN CROWDS', titleJa: 'ガッチャマン クラウズ', year: 2013,
    titleZh: '科學小飛俠 CROWDS', broadcast: '2013年7月至9月 · 日本電視台', importantCharacters: ['一之瀨初', '宮現', '橘清音', '枇枇木丈', 'O·D', '派曼', '爾乃美家累', '貝爾庫·卡切'],
    episodeCount: 12, special: '#12DC Embrace｜第 12 話導演剪輯版',
    summary: '2015 年初夏，立川的秘密英雄迎來新人一之瀨初。當 SNS 把人們的力量連在一起，英雄的意義也開始改變。',
    themes: ['網路與互助', '個人能動性', '英雄與群眾', '溝通與誤解'],
    staff: [
      { role: '原作／動畫製作', name: 'タツノコプロ／龍之子製作' },
      { role: '監督', name: '中村健治' }, { role: '系列構成・腳本', name: '大野敏哉' },
      { role: '角色原案', name: 'キナコ' }, { role: '動畫角色設計', name: '高橋裕一' },
      { role: '主要 G-SUIT 設計', name: '中北晃二' }, { role: '音樂', name: '岩崎琢' },
    ],
    sources: [
      official('https://tatsunoko.co.jp/en/works/gatchaman-crowds/', '龍之子製作｜Gatchaman Crowds', 1),
      press(1), vapBox,
      official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc01.html', 'VAP｜第一季原聲帶', 1),
    ],
  },
  {
    id: 'insight', season: 2, title: 'GATCHAMAN CROWDS insight', titleJa: 'ガッチャマン クラウズ インサイト', year: 2015,
    titleZh: '科學小飛俠 CROWDS insight', broadcast: '2015年7月至9月 · 日本電視台', importantCharacters: ['一之瀨初', '三棲立翼', '宮現', '格爾薩德拉', '鈴木理詰夢', '爾乃美家累'],
    episodeCount: 12, special: '#0 inbound｜正式放送前的網路特別篇',
    summary: '立川事件一年後，CROWDS 已普及。新人三栖立翼與宇宙訪客格爾桑德拉的到來，讓「大家的心成為一體」這個願望接受考驗。',
    themes: ['群體氣氛', '直接民主', '交出判斷的代價', '共識與差異'],
    staff: [
      { role: '原作／動畫製作', name: 'タツノコプロ／龍之子製作' },
      { role: '監督', name: '中村健治' }, { role: '系列構成', name: '大野敏哉' },
      { role: '角色原案', name: 'キナコ' }, { role: '角色設計・總作畫監督', name: '高橋裕一' },
      { role: '設定構築', name: '和田理' }, { role: '音樂', name: '岩崎琢' },
    ],
    sources: [
      official('https://tatsunoko.co.jp/en/works/gatchaman-crowds-insight/', '龍之子製作｜Gatchaman Crowds Insight', 2),
      insightStory(0),
      official('https://www.vap.co.jp/GATCHAMAN_Crowds/dvd/index.html', 'VAP｜insight Blu-ray / DVD', 2, '主創職稱見官方特典及評論音軌名單。'),
      official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/index.html', 'VAP｜insight 原聲帶', 2),
      official('https://www.ntv.co.jp/GC_insight/special/sp04.html', '日本電視台｜#0 inbound 發布', 2),
    ],
  },
];

const firstSeason: [string, string][] = [
  ['Avant-garde', '初獲得 NOTE，加入 G 成員。'],
  ['Asymmetry', '初嘗試與 MESS 溝通。'],
  ['Futurism', 'GALAX 協助處理校園危機。'],
  ['Kitsch', '宮現談起自身的生命能力。'],
  ['Collaboration', '隧道坍塌，群眾與英雄救援。'],
  ['Originality', '宮現救治傷者；初與累會面。'],
  ['Abjection', '卡傑壓倒眾人，宮現救治傷者。'],
  ['Genuine', '累失去 GALAX 的控制權。'],
  ['Forgery', '初收留累，並以直播回應危機。'],
  ['Crowds', '失控 CROWDS 攻擊立川。'],
  ['Gamification', '累重新連上 X，群眾參與救援。'],
  ['Collage', 'O.D. 奪回 NOTE，累發起遊戲。'],
];
const secondSeason: [string, string][] = [
  ['Contact Point', '長岡少女三栖立翼家附近墜落不明太空船。初等 G 成員前往調查，遇見自稱帶來和平的格爾桑德拉。'],
  ['Penetration', '翼決心成為英雄，與教育負責人初出席家鄉的歡送活動；調查 VAPE 的累遭遇紅色 CROWDS。'],
  ['Launch', '翼與格爾桑德拉上資訊節目並拜訪立川 CAGE。另一邊，VAPE 領袖鈴木理詰夢在澀谷展開行動。'],
  ['2:6:2', '為救出倒下的同伴，翼與格爾桑德拉奔赴戰場。轉播讓全國看見新英雄的身影。'],
  ['Halo Effect', 'GALAX 手機首相公選展開。格爾桑德拉讀取民眾心聲後，提出讓 G 成員意見分歧的政見。'],
  ['Engagement', '格爾桑德拉當選首相，迅速吸收政治知識。他以異星人的方式推動超出既有常識的施政。'],
  ['Outbound', '改革使社會與支持率迅速改變。翼相信無爭的世界將至，也有人對過快的變革感到不安。'],
  ['Cluster', '紅色心聲泡泡中誕生神祕生物，隨強風遍及全國。G 成員出動，卻發現牠們的行動出乎意料。'],
  ['Opt-out', '融入日常的「空大人」開始推進意志統一。G 成員提出警告，卻迎來民眾的非難。'],
  ['Seeds', '理想世界的陰影擴大，格爾桑德拉仍相信自己在實現眾人願望。翼返回長岡，與曾祖父和自己對話。'],
  ['Trade-off', '空大人集結，遭擊倒後反覆復活。久戰疲憊的 G 成員，為突破困境而面臨重大決斷。'],
  ['Insight', 'G 成員傾盡全力的戰鬥留下深刻衝擊。眾人將面對共同提出的問題，並思索自己的答案。'],
];

export const episodes: EpisodeRecord[] = [
  ...firstSeason.map(([title, synopsis], index): EpisodeRecord => ({
    id: `crowds-${index + 1}`, season: 1, number: index + 1, title, kind: 'tv', synopsis,
    sources: [vapBox, { ...englishEpisodes, season: 1 }],
  })),
  {
    id: 'crowds-embrace', season: 1, number: 12, title: 'Embrace', kind: 'special', releaseDate: '2014-01-22',
    synopsis: '第 12 話導演剪輯版，補充初與卡傑的對峙。官方將其列作 #12DC 影像特典。',
    sources: [vapBox, { ...englishEpisodes, season: 1 }],
  },
  {
    id: 'insight-0', season: 2, number: 0, title: 'Inbound', kind: 'special', releaseDate: '2015-06-20',
    synopsis: '立川事件一年後，CROWDS 廣泛普及，也引起不安與反對。首相專機遭到神祕集團襲擊，新的戰鬥揭幕。',
    sources: [insightStory(0), official('https://www.ntv.co.jp/GC_insight/special/sp04.html', '日本電視台｜#0 inbound 配信公告', 2)],
  },
  ...secondSeason.map(([title, synopsis], index): EpisodeRecord => ({
    id: `insight-${index + 1}`, season: 2, number: index + 1, title, kind: 'tv', synopsis,
    sources: [insightStory(index + 1), { ...englishEpisodes, season: 2, note: '僅核對英文集名；摘要取自同項官方分集故事。' }],
  })),
];

export const music: MusicRecord[] = [
  {
    id: 'crowds-op', season: 1, type: 'OP', title: 'Crowds', artist: 'WHITE ASH', releaseDate: '2013-08-21',
    description: '第一季片頭曲。單曲分期間限定「ガッチャ盤」與通常盤。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc03.html',
    sources: [official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc03.html', 'VAP｜Crowds 單曲', 1), official('https://www.youtube.com/watch?v=lfk8sqQ-qEI', 'CRUX label｜Crowds 官方短版', 1), official('https://www.youtube.com/watch?v=Fendx-mAWps', 'VAP OFFICIAL MUSIC CHANNEL｜Crowds MV', 1)],
  },
  {
    id: 'crowds-ed', season: 1, type: 'ED', title: 'INNOCENT NOTE', artist: '一ノ瀬はじめ（CV：内田真礼）', releaseDate: '2013-08-28',
    description: '第一季片尾曲。收錄於首張原聲帶，包含完整與 TV size 版本；此日期為該原聲帶發售日。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc01.html',
    sources: [official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc01.html', 'VAP｜原聲帶曲目 22・24', 1)],
  },
  {
    id: 'crowds-ost', season: 1, type: 'OST', title: 'GATCHAMAN CROWDS Original Soundtrack', artist: '岩崎琢', releaseDate: '2013-08-28',
    description: 'VPCG-84945。包含 24 首曲目，收錄 Tutu、Galax、Crowds 等配樂及 OP／ED。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc01.html',
    sources: [official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc01.html', 'VAP｜第一季原聲帶第 1 彈', 1)],
  },
  {
    id: 'crowds-ost-galax', season: 1, type: 'OST', title: 'GATCHAMAN CROWDS Original Soundtrack — GALAX', artist: '岩崎琢', releaseDate: '2014-01-22',
    description: 'VPCG-84962。收錄首張未收錄配樂，以及うたたP、toku、Treow 的三首混音。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc02.html',
    sources: [official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc02.html', 'VAP｜第一季原聲帶第 2 彈 GALAX', 1)],
  },
  {
    id: 'insight-op', season: 2, type: 'OP', title: 'Insight', artist: 'WHITE ASH', releaseDate: '2015-08-05',
    description: '第二季片頭曲，收錄於雙 A 面單曲《Insight / Ledger》。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc04.html',
    sources: [official('https://www.youtube.com/watch?v=Uo5rUDYDXuk', 'VAP OFFICIAL MUSIC CHANNEL｜Insight 官方短版', 2), official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/disc04.html', 'VAP｜Insight / Ledger', 2), official('https://www.ntv.co.jp/GC_insight/music/index.html', '日本電視台｜insight 音樂', 2)],
  },
  {
    id: 'insight-ed', season: 2, type: 'ED', title: '60億の翼', artist: 'ANGRY FROG REBIRTH', releaseDate: '2015-08-05',
    description: '第二季片尾曲。官方藝人頻道 AFRchannel 於 2015 年 7 月 22 日發布 MV。',
    officialUrl: 'https://www.ntv.co.jp/GC_insight/music/index.html',
    sources: [official('https://www.ntv.co.jp/GC_insight/music/index.html', '日本電視台｜insight 片尾曲', 2), official('https://www.youtube.com/watch?v=qkrMTXBczbk', 'AFRchannel｜60億の翼 MV', 2)],
  },
  {
    id: 'insight-ost', season: 2, type: 'OST', title: 'GATCHAMAN CROWDS insight Original Soundtrack', artist: '岩崎琢', releaseDate: '2015-08-26',
    description: 'VPCG-83502。配樂延續由岩崎琢負責。官網標題圖片另顯示 8/24，本文正式發售欄為 8/26；本檔採正式欄位並保留衝突。',
    officialUrl: 'https://www.vap.co.jp/GATCHAMAN_Crowds/cd/index.html',
    sources: [official('https://www.vap.co.jp/GATCHAMAN_Crowds/cd/index.html', 'VAP｜insight 原聲帶', 2, '同頁圖像 alt 為 2015.8.24(wed)，正式発売日為 2015年8月26日；兩者有衝突。')],
  },
];

export const concepts: ConceptRecord[] = [
  {
    id: 'note', name: 'NOTE', nameJa: 'ノート', season: [1, 2],
    description: '精神性特殊能力實體化的手帳，也是 G 成員能力的根源。',
    limitations: 'NOTE 與持有者生命相連，受損可能危及本人；精確數值未公開。',
    sources: [press(1), japaneseSettings],
  },
  {
    id: 'g-suit', name: 'G-SUIT', nameJa: 'Gスーツ', season: [1, 2],
    description: '以 NOTE 為力量來源的特殊強化服。成員以「Bird, Go!」裝著，外型與能力各異。',
    limitations: '並非所有成員都適合無限制展開能力；請對照個別角色紀錄。',
    sources: [press(1), japaneseSettings],
  },
  {
    id: 'galax', name: 'GALAX', nameJa: 'ギャラックス', season: [1, 2],
    description: '累開發的 SNS，由總裁 X 協助媒合技能與互助任務。第二季也用於手機投票。',
    limitations: '資訊、權限與群眾判斷會影響結果。技術完整規格未公開。',
    sources: [japaneseSettings, insightStory(5)],
  },
  {
    id: 'crowds', name: 'CROWDS', nameJa: 'クラウズ', season: [1, 2],
    description: '人類精神的實體化。卡傑抽出累的 NOTE 後賦予的力量，在立川事件後普及。',
    limitations: '個體遭破壞可能使操作者昏迷；使用並非沒有代價。',
    sources: [insightStory(0), japaneseSettings],
  },
  {
    id: 'mess', name: 'MESS', nameJa: 'メス', season: [1, 2],
    description: '初期調查對象的神祕集合生命。初透過重新理解與溝通，改變彼此的關係。',
    limitations: '能擬態、吸收物體；完整生態與上限未公開。',
    sources: [press(1), japaneseSettings],
  },
  {
    id: 'vape', name: 'VAPE', nameJa: 'ヴェイプ', season: [2],
    description: '理詰夢領導的反 CROWDS 集團，以紅色 CROWDS 展開行動。',
    limitations: '組織人數、完整結構未公開。目的與手段存在衝突。',
    sources: [insightStory(2), insightStory(3), japaneseSettings],
  },
  {
    id: 'kuu-sama', name: '空大人', nameJa: 'くうさま / Kuu-sama', season: [2],
    description: '由紅色心聲泡泡出現的生物，被社會接受後，開始促成眾人意志統一。',
    limitations: '遭打倒也反覆復活，普通戰鬥難以處理。數值與機制上限未公開。',
    sources: [insightStory(8), insightStory(9), insightStory(11)],
  },
  {
    id: 'amnesia-effect', name: 'Amnesia Effect', nameJa: 'アムネジア・エフェクト', season: [1, 2],
    description: '隔離一般人知覺的戰鬥空間，讓 NOTE 持有者能在其中行動。',
    limitations: '仍會干涉現實物體，不能因此忽略市民安全。',
    sources: [japaneseSettings],
  },
];
