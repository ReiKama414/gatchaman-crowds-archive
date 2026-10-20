import type { Character, CharacterImage, Fact, Season, Source, VerificationStatus } from './types';

const checked = '2026-10-20';
const ntv = 'https://www.ntv.co.jp/GC_insight/';
const wikiJa = 'https://ja.wikipedia.org/wiki/ガッチャマン_クラウズ';
const wikiZh = 'https://zh.wikipedia.org/wiki/科學小飛俠Crowds';
const wikiEn = 'https://en.wikipedia.org/wiki/Gatchaman_Crowds';
const episodesEn = 'https://en.wikipedia.org/wiki/List_of_Gatchaman_Crowds_episodes';
const fandomUtsutsu = 'https://gatchaman.fandom.com/wiki/Utsutsu_Miya';
const press = 'https://www.animatetimes.com/news/details.php?id=1431089475';
const mainIds = ['hajime', 'tsubasa', 'sugane', 'joe', 'utsutsu', 'paiman', 'od', 'rui', 'x', 'rizum', 'katze', 'gelsadra', 'jj'];
const page = (id: string) => `${ntv}character/${id === 'hajime' ? 'index' : id}.html`;
const profile = (id: string) => `${ntv}images/character/img_${id}.png`;

export const sources: Source[] = [
  ...mainIds.map((id): Source => ({ id: `ntv-${id}`, name: `NTV insight 官方角色檔案 · ${id}`, url: page(id), type: 'official', language: 'ja', status: 'read', note: '角色資訊以 PNG 圖片公開；已讀取官方原圖並核對文字及造型。', accessed: checked })),
  { id: 'ntv-s1', name: 'NTV 第一季官方角色頁', url: 'https://www.ntv.co.jp/GATCHAMAN_Crowds/character/utsutsu.html', type: 'official', language: 'ja', status: 'unavailable', note: '舊角色頁本次回傳 404／無法擷取；未當成已讀證據，第一季年齡等以明示二手來源補充。', accessed: checked },
  { id: 'animate-press', name: 'Animate Times · 2015/05/09 新角色與官方設定公開', url: press, type: 'official-press', language: 'ja', status: 'read', note: '刊載製作方公開的角色資訊與設定線稿。翼與理詰夢的早期設定和現行 NTV 圖版有差異，已分欄保留。', accessed: checked },
  { id: 'wiki-ja', name: 'Wikipedia（日文）· ガッチャマン クラウズ', url: wikiJa, type: 'encyclopedia', language: 'ja', status: 'read', note: '用於配角、日文原名、季別脈絡交叉檢查；二手資料不升格為官方。', accessed: checked },
  { id: 'wiki-zh', name: 'Wikipedia（中文）· 科學小飛俠Crowds', url: wikiZh, type: 'encyclopedia', language: 'zh', status: 'read', note: '核對繁中譯名與配角名單。未將條目中的年齡推算視為官方定值。', accessed: checked },
  { id: 'wiki-en', name: 'Wikipedia（英文）· Gatchaman Crowds', url: wikiEn, type: 'encyclopedia', language: 'en', status: 'read', note: '核對英文名稱、生命力能力限制；百科引文和作品本身分開處理。', accessed: checked },
  { id: 'wiki-episodes', name: 'Wikipedia（英文）· 兩季逐集概要', url: episodesEn, type: 'encyclopedia', language: 'en', status: 'read', note: '只作重要情節與集數索引；尚未逐集核對所有片尾名單，沒有宣稱完整出場表。', accessed: checked },
  { id: 'moegirl-utsutsu-tw', name: '萌娘百科 · 宮現（繁體）', url: 'https://moegirl.icu/zh-tw/宫现', type: 'community', language: 'zh-Hant', status: 'read', note: '服裝、口癖和能力交叉參考。其「小說死亡」說法未取得原著頁碼，不能套用到動畫正史。', accessed: checked },
  { id: 'moegirl-utsutsu-cn', name: '萌娘百科 · 宫现（簡體）', url: 'https://moegirl.icu/现', type: 'community', language: 'zh-Hans', status: 'partial', note: '簡體搜尋索引可讀；zh-cn 轉換路徑本次擷取失敗，與繁體版並非兩個獨立佐證。', accessed: checked },
  { id: 'moegirl-hajime', name: '萌娘百科 · 一之瀨初', url: 'https://moegirl.icu/一之濑初', type: 'community', language: 'zh', status: 'read', note: '閱讀角色專頁，用於外觀與別名索引；敘述重新撰寫，未照抄戲謔評論。', accessed: checked },
  { id: 'moegirl-rui', name: '萌娘百科 · 爾乃美家累', url: 'https://moegirl.icu/尔乃美家累', type: 'community', language: 'zh', status: 'read', note: '閱讀角色專頁及所連官方來源，核對女裝、髮型及兩季關聯。', accessed: checked },
  { id: 'moegirl-tsubasa', name: '萌娘百科 · 三棲立翼', url: 'https://moegirl.icu/三栖立翼', type: 'community', language: 'zh', status: 'read', note: '用於家族、別名與角色變化；其年級與現行 NTV 圖版一致，與早期官方 press 有差異。', accessed: checked },
  { id: 'moegirl-roster-gaps', name: '萌娘百科 · 相關角色紅連結', url: 'https://moegirl.icu/一之濑初', type: 'community', language: 'zh', status: 'partial', note: '橘清音、枇枇木丈、O·D、派曼、J·J、總裁X等本次所點連結為未建立條目的紅連結；沒有假裝讀取專頁。', accessed: checked },
  { id: 'fandom-utsutsu', name: 'Gatchaman Wiki · Utsutsu Miya', url: fandomUtsutsu, type: 'community', language: 'en', status: 'partial', note: '直接開頁遇 robots／402；可讀搜尋索引含人物表、服裝與能力段落。生日 2000/12/07 無官方佐證，與官方「不明」並列。', accessed: checked },
  { id: 'fandom-roster', name: 'Gatchaman Wiki · Character list', url: 'https://gatchaman.fandom.com/wiki/List_of_Gatchaman_Crowds_characters', type: 'community', language: 'en', status: 'blocked', note: '直接擷取失敗，名單改與 NTV、三語 Wikipedia、Bangumi 交叉核對。', accessed: checked },
  { id: 'baidu-utsutsu', name: '百度百科 · 宫现', url: 'https://bkso.baidu.com/item/宫现/17779742', type: 'encyclopedia', language: 'zh-Hans', status: 'partial', note: '可讀搜尋索引與條目內容；其第二季條目仍寫推定15歲，與第二季NTV推定16歲不同，保留為來源差異。', accessed: checked },
  { id: 'bangumi-utsutsu', name: 'Bangumi · 宮うつつ', url: 'https://bgm.tv/character/20583', type: 'database', language: 'zh/ja', status: 'read', note: '角色專頁列143cm、生日不明、兩季推定年齡並引NTV舊頁；有譯名討論，未當官方生日資料。', accessed: checked },
  { id: 'bangumi-s1', name: 'Bangumi · 第一季與完整角色關聯', url: 'https://bgm.tv/subject/69494/characters', type: 'database', language: 'zh/ja', status: 'read', note: '核對主角關聯、配音。另閱讀清音、丈、O·D、派曼角色專頁。', accessed: checked },
  { id: 'bangumi-s2', name: 'Bangumi · insight 角色關聯', url: 'https://bgm.tv/subject/86721/characters', type: 'database', language: 'zh/ja', status: 'read', note: '核對第二季新增角色及少年／青年格爾薩德拉配音。', accessed: checked },
  { id: 'mal', name: 'MyAnimeList · Gatchaman Crowds', url: 'https://myanimelist.net/anime/18229/Gatchaman_Crowds/characters', type: 'database', language: 'en', status: 'blocked', note: '本次工具無法開啟，搜尋未取得可靠角色專頁；不從未讀資料補生日或集數。', accessed: checked },
  { id: 'anilist', name: 'AniList · Gatchaman Crowds insight', url: 'https://anilist.co/anime/20487', type: 'database', language: 'en', status: 'partial', note: '搜尋索引可讀作品、角色與聲優資料；第一季頁直接擷取403。', accessed: checked },
  { id: 'ann', name: 'Anime News Network · Characters and staff revealed', url: 'https://www.animenewsnetwork.com/news/2013-04-16/gatchaman-crowds-anime-characters-staff-revealed', type: 'database', language: 'en', status: 'blocked', note: '透過英語Wikipedia原始引用找到；直接擷取受限，沒有把未讀百科入口當資料依據。', accessed: checked },
  { id: 'unext', name: 'U-NEXT · 第一季各話介紹與配音', url: 'https://www.video.unext.jp/title/SID0002523', type: 'database', language: 'ja', status: 'partial', note: '搜尋索引可讀官方授權播映的集數簡介，協助核對第五、六、十話事件範圍。', accessed: checked },
  { id: 'hobbyjapan', name: 'Hobby Japan · 宮現模型官方新聞稿', url: 'https://www.dreamnews.jp/press/0000094505/items/7314ed', type: 'official-press', language: 'ja', status: 'partial', note: '搜尋索引原始新聞稿把服裝稱為水着；模型圖不是動畫設定圖，不混稱。', accessed: checked },
  { id: 'ntv-utsutsu-goods', name: 'NTV · 宮現官方模型介紹', url: `${ntv}special/sp20.html`, type: 'official', language: 'ja', status: 'read', note: '官方商品介紹核對宮現與初送的摺紙青蛙、黑貓Altair之關聯；模型照片不是動畫設定線稿。', accessed: checked },
  { id: 'ntv-artbook', name: 'NTV · Kinako insight Design Works', url: `${ntv}special/sp11.html`, type: 'official', language: 'ja', status: 'read', note: '確認官方設計書包含原案、未公開草稿與訪談；未取得內頁，沒有聲稱已讀整本設定集。', accessed: checked },
];

function fact(label: string, value: string, sourceUrl: string, sourceName: string, season: Season = 'both', verificationStatus: VerificationStatus = 'secondary', sourceType: Fact['sourceType'] = 'encyclopedia', extra: Partial<Fact> = {}): Fact {
  return { label, value, sourceUrl, sourceName, season, verificationStatus, sourceType, ...extra };
}
const official = (id: string, label: string, value: string, season: Season = 'insight', extra: Partial<Fact> = {}) => fact(label, value, page(id), 'NTV 官方角色圖版', season, 'confirmed', 'official', extra);
const secondary = (label: string, value: string, url = wikiJa, season: Season = 'both', extra: Partial<Fact> = {}) => fact(label, value, url, url.includes('bgm.tv') ? 'Bangumi 角色專頁' : url.includes('moegirl') ? '萌娘百科' : url.includes('fandom') ? 'Gatchaman Wiki（搜尋索引）' : url === episodesEn ? 'Wikipedia 英文逐集概要' : 'Wikipedia', season, 'secondary', url.includes('moegirl') || url.includes('fandom') ? 'community' : url.includes('bgm.tv') ? 'database' : 'encyclopedia', extra);
const unknown = (label: string, season: Season = 'both', note = '本次可查來源未公開或尚無可核實記錄。') => fact(label, '未公開', '', '資料缺項', season, 'unknown', 'encyclopedia', { note });
const imagePair = (id: string, suit = true): CharacterImage[] => [
  { src: `/assets/official/s2/${id}.png`, label: '第二季官方日常造型與設定', kind: 'portrait', season: 'insight', sourceUrl: profile(id), credit: '© タツノコプロ / ガッチャマンクラウズインサイト製作委員会', available: true },
  ...(suit ? [{ src: `/assets/official/s2/${id}-g.png`, label: '第二季官方 G-SUIT 設定', kind: 'g-suit' as const, season: 'insight' as const, sourceUrl: `${ntv}images/character/img_${id}_g.png`, credit: '© タツノコプロ / ガッチャマンクラウズインサイト製作委員会', available: true }] : []),
];
function character(input: Pick<Character, 'id' | 'name' | 'japanese' | 'english' | 'summary'> & Partial<Character>): Character {
  return { aliases: [], group: 'GATCHAMAN', seasons: ['crowds', 'insight'], color: '#9ee04a', number: '—', facts: [], appearance: [], abilities: [], relationships: [], evolution: [], episodes: [unknown('完整逐集登場清單', 'both', '未逐集核對片尾與畫面；以下僅列已查到的重要表現。')], images: [], sourceIds: [], missing: ['完整逐集登場與官方原畫設定集頁碼尚待補證。'], ...input };
}

const utsutsu = character({
  id: 'utsutsu', name: '宮現', japanese: '宮 うつつ', english: 'Utsu-tsu Miya', aliases: ['宮うつつ', '宫现', '現', 'うつつ', 'Utsutsu Miya', 'Miya Utsutsu', '小現', 'G-99'], number: 'G-99', priority: true, color: '#b8ed33',
  summary: '以自己的生命照亮別人的少女。從害怕觸碰他人的 G-99，到主動投入救援、志工與打工；她的左右手同時承載誕生與死亡。',
  facts: [official('utsutsu', '身高', '143 cm'), secondary('第一季年齡', '15歲（推定）', 'https://bgm.tv/character/20583', 'crowds'), official('utsutsu', '第二季年齡', '16歲（推定）', 'insight', { note: '官方保留「推定」；不是確定的出生年。', alternatives: [{ value: '15歲（推定）', sourceUrl: 'https://bkso.baidu.com/item/宫现/17779742', sourceName: '百度百科', note: '該insight條目可能沿用第一季資料，網站以第二季NTV圖版為準。' }] }), official('utsutsu', '生日', '未公開', 'both', { verificationStatus: 'unknown', note: 'NTV明記「不明」；沒有可確認的出生年。', alternatives: [{ value: '2000年12月7日', sourceUrl: fandomUtsutsu, sourceName: 'Gatchaman Wiki（搜尋索引）', note: '二手條目未提供可核實的官方生日引用，不能當官方設定。' }] }), official('utsutsu', '血型', '未公開', 'both', { verificationStatus: 'unknown' }), official('utsutsu', '日語聲優', '小岩井ことり（小岩井小鳥）', 'both'), secondary('英語配音', 'Carli Mosier（Sentai 配音）', fandomUtsutsu), official('utsutsu', '所屬／學校', '立川 CAGE／私立立川鳳雛學園高中二年級'), official('utsutsu', 'G 成員年資', '3年'), official('utsutsu', '口癖', 'うつうつします', 'both')],
  appearance: [official('utsutsu', '髮型與配色', '長綠髮、頂部向兩側突出的髮束；第二季造型有大型黃綠色蝴蝶結。', 'insight', { note: '依官方角色圖觀察；髮束會隨心情活動的說法見二手專頁。' }), secondary('第一季制服', '制服搭藍色領巾、黃綠色花紋襪與黑鞋。', fandomUtsutsu, 'crowds'), official('utsutsu', '第二季日常服裝', '黑色兩件式泳裝、左腿飾帶、黑色高跟鞋；以黃綠色蝴蝶結收束長髮。', 'insight', { note: '官方profile正背視圖可核對；服裝用「泳裝」稱呼亦見Hobby Japan原始新聞稿。' }), secondary('居家服裝', '角色專頁記載藍色洋裝、黑絲襪與綠色髮結。', fandomUtsutsu, 'crowds', { note: '未定位到可逐格核實的官方劇照，暫保留二手記錄。' }), official('utsutsu', 'G-SUIT 造型', '左右不對稱；頭部延伸出黑紅色與白金色的巨大機械手臂，腿部亦以不同配色區分。', 'both'), secondary('髮飾變化', '隧道救援事件後，佩戴初送的藍色緞帶。', wikiJa, 'crowds')],
  abilities: [official('utsutsu', 'NOTE', '誕生と死のNOTE（誕生與死亡）', 'both'), secondary('NOTE 顏色', '黃色', 'https://moegirl.icu/zh-tw/宫现'), official('utsutsu', '生命之左手', '把自己的生命分給他人，治癒對方的傷勢。', 'both'), official('utsutsu', '死亡之右手', '奪取所觸對象的生命力。', 'both'), official('utsutsu', '分身', '分割自己的生命，製造自己的分身。', 'both'), secondary('生命力限制', '治療消耗自身生命力；過度使用可能危及自身，並非無代價復活。', wikiEn), unknown('分身數量上限／距離／持續時間'), unknown('治療的精確上限／是否能復活死者'), secondary('分身細節差異', '日文百科記載左手生出分身；Fandom則描述右手向外射出金色光點。', wikiJa, 'both', { alternatives: [{ value: '右手向外產生金色光點構成分身', sourceUrl: fandomUtsutsu, sourceName: 'Gatchaman Wiki', note: '左右手施術描述不一致；官方只確認分割生命製造分身，未在profile指定分身用哪隻手。' }], note: '分身能力本身已由官方確認，手勢細節保留差異。' })],
  relationships: [official('utsutsu', 'O·D', '同室而居，關係親近。', 'both'), secondary('一之瀨初', '最初對初有所戒備，之後逐漸敞開心扉。', wikiJa, 'crowds'), fact('初送的摺紙青蛙', '官方模型介紹確認初曾送她摺紙青蛙；與黑貓阿爾泰爾也很親近。', `${ntv}special/sp20.html`, 'NTV 官方商品介紹', 'both', 'confirmed', 'official'), secondary('枇枇木丈', '隧道救援時，丈把自己的生命力借給她，使救援得以持續。', episodesEn, 'crowds'), official('utsutsu', '社會連結', '照顧花草的志工活動之外，第二季開始打工。')],
  evolution: [secondary('第一季', '從低自我肯定、避免親近他人，到選擇用能力主動救人。', wikiJa, 'crowds'), official('utsutsu', '第二季', '升上高中二年級；除志工之外開始打工，仍與O·D同住。'), secondary('第二季任務', '繼續負責隊員傷勢與救援支援。', episodesEn, 'insight', { spoiler: true }), secondary('小說與動畫分開', '萌娘條目有「小說中因分出生命而死」的記述；未取得小說原文與頁碼，不能推定她在動畫死亡。', 'https://moegirl.icu/zh-tw/宫现', 'both', { note: '衍生作品說法尚待一手證據；第二季官方角色頁仍明確收錄她。', spoiler: true })],
  episodes: [secondary('S1 #01 · Avant-garde', '初來到基地時與她見面。', episodesEn, 'crowds'), secondary('S1 #04 · Kitsch', '向初說明自己的能力，以及不能安心觸碰他人的困擾。', episodesEn, 'crowds'), secondary('S1 #05–06 · Collaboration / Originality', '隧道事故救援，分出生命治療傷者；丈提供生命力協助。', episodesEn, 'crowds', { spoiler: true }), secondary('S1 #07 · Abjection', '協助處理與卡切交戰後的傷勢。', episodesEn, 'crowds', { spoiler: true }), secondary('S1 #09 · Forgery', '在住處替累治傷。', episodesEn, 'crowds', { spoiler: true }), secondary('S1 #10 · Crowds', 'G-SUIT首次於動畫公開的集數。', fandomUtsutsu, 'crowds'), secondary('S2 #01 · contact point', '與初、派曼前往宇宙船墜落地。', episodesEn, 'insight'), secondary('S2 #04 · 2:6:2', '累的NOTE受損後，由宮現照護。', episodesEn, 'insight', { spoiler: true }), secondary('S2 #09 · opt-out', '照護受重傷的清音。', episodesEn, 'insight', { spoiler: true }), unknown('兩季完整逐集登場清單', 'both', '以上是已查到的重要事件，不等於完整出場集數；第二季結局治療細節尚待原片與官方劇照定位。')],
  images: imagePair('utsutsu'), sourceIds: ['ntv-utsutsu', 'bangumi-utsutsu', 'moegirl-utsutsu-tw', 'moegirl-utsutsu-cn', 'fandom-utsutsu', 'baidu-utsutsu', 'wiki-ja', 'wiki-en', 'wiki-episodes', 'hobbyjapan', 'ntv-utsutsu-goods', 'ntv-artbook'], missing: ['生日、出生年、血型官方未公開。', '第一季完整制服、居家洋裝與所有髮飾的原始設定圖尚待取得。', '分身數量與施術距離等精確規則未公開。', '完整逐集出場紀錄尚未逐格核對。', '小說死亡說法缺原文頁碼，不列為動畫正史。'],
});

const hajime = character({ id: 'hajime', name: '一之瀨初', japanese: '一ノ瀬 はじめ', english: 'Hajime Ichinose', aliases: ['一之濑初', 'Ichinose Hajime', 'はじめ', '小初'], number: 'G-101', color: '#ff6b9f', summary: '熱愛文具與筆記本，以自由的觀察和提問改寫英雄規則的少女。', facts: [official('hajime', '身高', '155 cm'), secondary('第一季年齡', '16歲', 'https://moegirl.icu/一之濑初', 'crowds'), official('hajime', '第二季年齡', '17歲'), official('hajime', '生日', '11月24日', 'both'), official('hajime', '血型', 'A型', 'both'), official('hajime', '日語聲優', '內田真禮', 'both'), official('hajime', '學校', '私立立川鳳雛學園高中三年級'), official('hajime', 'G 成員年資', '1年')], appearance: [official('hajime', '日常造型', '棕色短髮、白襯衫與深色吊帶裙，第二季紅色領巾、黑絲襪與繫帶靴。'), official('hajime', 'G-SUIT', '粉紅、白與金色裝甲，帶雙尾輪廓及裙裝意象。')], abilities: [official('hajime', 'NOTE', 'デザイナーのNOTE（設計師）', 'both'), official('hajime', '能力', '把創新觀點具現化，具有設計萬物的可能性；裝備剪刀及多種文具造型武器。', 'both'), unknown('設計能力的精確條件／上限')], relationships: [official('hajime', '貝爾庫·卡切', '立川事件後將其納入體內一同生活。'), official('tsubasa', '三棲立翼', '第二季與翼搭檔。')], evolution: [official('hajime', '第二季生活', '升上高中三年級，保留明亮活力與看穿本質的視角。')], images: imagePair('hajime'), sourceIds: ['ntv-hajime', 'ntv-tsubasa', 'moegirl-hajime'] });
const sugane = character({ id: 'sugane', name: '橘清音', japanese: '橘 清音', english: 'Sugane Tachibana', aliases: ['Tachibana Sugane', 'たちばな すがね', '先輩'], number: 'G-96', color: '#ffbd52', summary: '擅長居合術、重視責任的青年。第二季進入大學，仍敬仰幼年救過自己的丈。', facts: [official('sugane', '身高', '175 cm'), secondary('第一季年齡', '19歲', 'https://bgm.tv/character/20580', 'crowds'), official('sugane', '第二季年齡', '20歲'), official('sugane', '生日', '8月2日', 'both'), official('sugane', '血型', 'O型', 'both'), official('sugane', '日語聲優', '逢坂良太', 'both'), official('sugane', '學校', '東京都內私立大學一年級'), official('sugane', 'G 成員年資', '6年')], appearance: [official('sugane', '第二季造型', '金色短髮、眼鏡，開襟外套配深色上衣與灰長褲。'), official('sugane', 'G-SUIT', '白、金、綠色裝甲，具有武者與幻獸輪廓。')], abilities: [official('sugane', 'NOTE', '無限間合のNOTE（無限間合）', 'both'), official('sugane', '劍術', '干涉時空的能力結合居合術；近距離使用音叉刀「疾風」與暗器，遠距離可用無限刀「嵐」。', 'both'), unknown('間合能力的距離／次數上限')], relationships: [official('sugane', '枇枇木丈', '幼時被MESS捕捉時獲丈救出，因此尊敬丈。')], evolution: [official('sugane', '第二季', '由高中生升上大學，逐漸習慣英雄身分公開後的生活。')], images: imagePair('sugane'), sourceIds: ['ntv-sugane', 'bangumi-s1'] });
const joe = character({ id: 'joe', name: '枇枇木丈', japanese: '枇々木 丈', english: 'Joe Hibiki', aliases: ['Hibiki Jō', 'ひびき じょう', '枇々木丈'], number: 'G-89', color: '#7ca5b7', summary: '沉穩的公務員與火焰能力者，第二季擔任立川市長的秘書。', facts: [official('joe', '身高', '187 cm'), secondary('第一季年齡', '29歲', 'https://bgm.tv/character/20581', 'crowds'), official('joe', '第二季年齡', '30歲'), official('joe', '生日', '3月29日', 'both'), official('joe', '血型', 'B型', 'both'), official('joe', '日語聲優', '浪川大輔', 'both'), official('joe', 'G 成員年資', '11年')], appearance: [official('joe', '第二季日常造型', '深綠短髮、白色外套與長褲、紅色腰帶及黑靴。'), official('joe', 'G-SUIT', '深色厚重裝甲、紅金線條與頭部火焰。')], abilities: [official('joe', 'NOTE', '爆炎のNOTE（爆炎）', 'both'), official('joe', '火焰操控', '發射火焰羽手裏劍與雙腕火球；亦可由手腳噴焰飛行。', 'both'), unknown('火焰溫度／續航時間')], relationships: [official('joe', '清音', '曾把清音從MESS手中救出。'), official('joe', '清水伸男', '第二季擔任立川市長清水的秘書。')], evolution: [official('joe', '第二季工作', '能幹且受肯定的秘書，擅長飛鏢，盼望世界和平。')], images: imagePair('joe'), sourceIds: ['ntv-joe', 'bangumi-s1'] });
const od = character({ id: 'od', name: 'O·D', japanese: 'O・D', english: 'O.D.', aliases: ['OD', 'オー・ディー'], number: 'G-12', color: '#c085bd', summary: '立川隊伍中如同監護人的存在，也是宮現最信任的同伴。', facts: [official('od', '身高', '190 cm'), official('od', '年齡', '未公開', 'both', { verificationStatus: 'unknown' }), official('od', '生日', '6月8日', 'both'), official('od', '血型', '未公開', 'both', { verificationStatus: 'unknown' }), official('od', '日語聲優', '細見大輔', 'both'), official('od', 'G 成員年資', '未公開', 'both', { verificationStatus: 'unknown' })], appearance: [official('od', '日常造型', '紫色短髮、紫上衣、黑長褲與高跟鞋。'), official('od', 'G-SUIT', '黑金色長袍與翼狀構件。')], abilities: [official('od', 'NOTE', '崩壊のNOTE（崩壞）', 'both'), official('od', '物質崩壞', '從全身放出能使物質分解成砂狀的粒子。', 'both'), official('od', '能力限制', '無法精確控制強度，會對目標外的事物造成巨大損害，因此不參加平常任務。', 'both')], relationships: [official('utsutsu', '宮現', '同室且關係親近。', 'both'), official('od', '阿爾泰爾', '飼養名為アルタイル的貓。', 'both')], evolution: [official('od', '第二季', '成為資訊節目「ミリオネ屋」固定評論來賓。')], images: imagePair('od'), sourceIds: ['ntv-od', 'ntv-utsutsu', 'bangumi-s1'] });
const paiman = character({ id: 'paiman', name: '派曼', japanese: 'パイマン', english: 'Paiman', aliases: ['派派', 'パイパイ', 'G-3'], number: 'G-3', color: '#ffbf55', summary: '外表像小巧熊貓的資深外星隊長；第二季在住處開辦托兒所。', facts: [official('paiman', '身高', '33 cm'), official('paiman', '年齡', '未公開', 'both', { verificationStatus: 'unknown', note: '「數百年」是G成員年資，不應直接當精確年齡。' }), official('paiman', '生日', '未公開', 'both', { verificationStatus: 'unknown' }), official('paiman', '血型', '未公開', 'both', { verificationStatus: 'unknown' }), official('paiman', '日語聲優', '平野綾', 'both'), official('paiman', 'G 成員年資', '數百年')], appearance: [official('paiman', '日常形態', '黑白相間、小巧圓胖，外型近似熊貓。'), official('paiman', 'G-SUIT', '黃色巨型裝甲、黑翼與雙腕車輪。')], abilities: [official('paiman', 'NOTE', '変換自在のNOTE（變換自在）', 'both'), official('paiman', '戰鬥與運輸', '轉換自身質量與物質，以重擊近戰、防禦同伴；可變成搭載其他成員的行走形態。', 'both'), unknown('質量轉換上限')], relationships: [official('paiman', 'J·J·羅賓遜', '由J·J派往地球，擔任立川CAGE隊長。', 'both'), official('paiman', '孩子們', '相信孩子是地球的希望；第二季辦托兒所，孩子稱其「派派」。')], evolution: [official('paiman', '第二季', '把與地方居民的接觸延伸到日常保育。')], images: imagePair('paiman'), sourceIds: ['ntv-paiman', 'bangumi-s1'] });
const rui = character({ id: 'rui', name: '爾乃美家累', japanese: '爾乃美家 累', english: 'Rui Ninomiya', aliases: ['尔乃美家累', 'Ninomiya Rui', 'LOAD', 'LOAD GALAX'], group: 'GALAX', number: 'G-100', color: '#5caeca', summary: 'GALAX與總裁X的創造者，相信人人互助能更新世界，第二季成為正式G成員。', facts: [official('rui', '身高', '168 cm'), secondary('第一季年齡', '18歲', 'https://moegirl.icu/尔乃美家累', 'crowds'), official('rui', '第二季年齡', '19歲'), official('rui', '生日', '4月25日', 'both'), official('rui', '血型', 'O型', 'both'), official('rui', '日語聲優', '村瀨步', 'both'), official('rui', 'G 成員年資', '1年')], appearance: [secondary('髮型與服裝', '黑色本髮，公開活動常以金色長假髮與女裝現身。', 'https://moegirl.icu/尔乃美家累'), official('rui', '第二季日常造型', '長金髮、眼鏡、水藍色洋裝與繫帶高跟鞋。'), official('rui', 'G-SUIT', '藍紫色裝甲，背部有可自行操控的圓盤終端。')], abilities: [official('rui', 'NOTE', 'コーデックのNOTE（Codec）；並保有Crowds NOTE的能力。'), official('rui', '數據化', '把物體分解成粒子與數位資料，存入裝甲記錄裝置；可直連總裁X支援。'), official('rui', 'Crowds', '由卡切抽出NOTE後獲得操縱Crowds的能力。', 'both'), unknown('儲存容量／傳送範圍的精確限制')], relationships: [official('rui', '總裁X', '設計並開發GALAX及其統合AI。', 'both'), official('rui', '貝爾庫·卡切', '卡切曾賦予他Crowds力量。', 'crowds')], evolution: [official('rui', '第二季', '立川事件後成為Gatchaman，仍相信人的意志。')], images: imagePair('rui'), sourceIds: ['ntv-rui', 'moegirl-rui'] });
const tsubasa = character({ id: 'tsubasa', name: '三棲立翼', japanese: '三栖立 つばさ', english: 'Tsubasa Misudachi', aliases: ['三栖立翼', 'Misudachi Tsubasa', 'つばさ'], seasons: ['insight'], number: 'G-60', color: '#4dd4b2', summary: '新潟長岡的直率少女，夢想成為煙火師。成為新成員後，必須學會在情緒與思考間找回自己的選擇。', facts: [official('tsubasa', '身高', '164 cm'), official('tsubasa', '年齡', '15歲', 'insight', { alternatives: [{ value: '16歲', sourceUrl: press, sourceName: 'Animate Times · 2015/05/09 官方公開資訊', note: '早期公開稿為16歲、高中二年級；現行NTV圖版改為15歲、高中一年級。網站保留差異並優先現行官方圖版。' }] }), official('tsubasa', '生日', '8月6日'), official('tsubasa', '血型', 'B型'), official('tsubasa', '日語聲優', '石原夏織'), official('tsubasa', '學校', '長岡市立朱鷺羽高中一年級', 'insight', { note: '現行NTV角色圖版；早期press為二年級。' })], appearance: [official('tsubasa', '日常造型', '白灰短髮、橙色領帶、綠裙、黑色長襪與棕色鞋。'), official('tsubasa', 'G-SUIT', '紅色纖細裝甲，頭盔有耳狀突出。')], abilities: [official('tsubasa', 'NOTE', '閃光のNOTE（閃光）'), official('tsubasa', '力量與速度', '以格鬥和疾馳為主，能把自身發出的光固體化並操縱，輔助攻擊、防禦與移動。'), secondary('初期變身限制', '起初不能隨心變身，容易受情緒狀態影響。', 'https://moegirl.icu/三栖立翼', 'insight'), unknown('光固體化持續時間', 'insight')], relationships: [official('tsubasa', '一之瀨初', '成為初的搭檔。'), official('gelsadra', '格爾薩德拉', '宇宙船落在翼家附近，因而親近她。'), secondary('家人', '父親耕造、母親望，以及曾祖父悠。', 'https://moegirl.icu/三栖立翼', 'insight')], evolution: [secondary('第二季後半', '在家人提醒與事件影響下，重新思考「大家一致」的意義。', 'https://moegirl.icu/三栖立翼', 'insight', { spoiler: true })], images: imagePair('tsubasa'), sourceIds: ['ntv-tsubasa', 'ntv-gelsadra', 'animate-press', 'moegirl-tsubasa'] });
const rizum = character({ id: 'rizum', name: '鈴木理詰夢', japanese: '鈴木 理詰夢', english: 'Rizumu Suzuki', aliases: ['铃木理诘梦', 'Suzuki Rizumu', 'VAPE'], group: 'GALAX', seasons: ['insight'], color: '#ff9b69', summary: '視Crowds與累為危險的醫學生，以VAPE挑戰大眾對力量的信任。', facts: [official('rizum', '身高', '178 cm'), official('rizum', '年齡', '21歲', 'insight', { alternatives: [{ value: '19歲', sourceUrl: press, sourceName: 'Animate Times · 2015/05/09 官方公開資訊', note: '早期公開稿與現行NTV圖版不同；優先現行官方21歲，保留19歲記錄。' }] }), official('rizum', '生日', '4月25日'), official('rizum', '血型', 'A型'), official('rizum', '日語聲優', '梅原裕一郎'), official('rizum', '學業', '知名大學醫學部學生')], appearance: [official('rizum', '日常造型', '橙色短髮、眼鏡，白長外套搭黑領帶與灰黑服裝。')], abilities: [secondary('NOTE／紅色Crowds', '曾被卡切抽出NOTE，能召喚紅色Crowds。', wikiJa, 'insight'), unknown('G-SUIT', 'insight', '本次可讀官方角色頁未公開理詰夢的G-SUIT設定。'), unknown('紅色Crowds具體上限', 'insight')], relationships: [official('rizum', '爾乃美家累', '認為累與Crowds會帶來危險，因此組織行動。')], images: imagePair('rizum', false), sourceIds: ['ntv-rizum', 'animate-press', 'wiki-ja'] });
const x = character({ id: 'x', name: '總裁X', japanese: '総裁X', english: 'President X', aliases: ['总裁X', 'X', 'そうさいエックス'], group: 'GALAX', color: '#b78dd4', summary: '累在全球駭客協助下開發的AI，透過GALAX持續學習並協助使用者。', facts: [official('x', '日語聲優', '丹下櫻', 'both'), unknown('身高'), unknown('年齡'), unknown('生日')], appearance: [official('x', '介面', '官方以球形資料、網路節點與投影介面呈現。')], abilities: [official('x', 'AI支援', '回應GALAX使用者提出的問題並持續成長；第二季亦導入政府相關計畫。'), unknown('NOTE／G-SUIT', 'both', 'AI角色沒有可確認的NOTE或G-SUIT官方設定。')], relationships: [official('x', '爾乃美家累', '由累與世界各地駭客合作開發。', 'both')], evolution: [official('x', '第二季', '從社群服務延伸到政府專案。')], images: imagePair('x', false), sourceIds: ['ntv-x'] });
const katze = character({ id: 'katze', name: '貝爾庫·卡切', japanese: 'ベルク・カッツェ', english: 'Berg-Katze', aliases: ['山貓', '山猫', '貝爾庫·卡徹', 'Berg Katze', '卡切'], group: 'ALIEN', color: '#ed4f9d', summary: '善於挑釁與煽動的外星存在，立川事件的幕後操盤者。', facts: [official('katze', '身高', '215 cm'), official('katze', '年齡', '未公開', 'both', { verificationStatus: 'unknown' }), official('katze', '生日', '未公開', 'both', { verificationStatus: 'unknown' }), official('katze', '血型', '未公開', 'both', { verificationStatus: 'unknown' }), official('katze', '日語聲優', '宮野真守', 'both')], appearance: [official('katze', '第二季日常造型', '粉紅短髮、深藍服裝與尖頭高跟鞋。'), official('katze', 'G-SUIT', '左右不同材質的紫金與透明裝甲，搭長披風。')], abilities: [official('katze', '挑釁與煽動', '能力擅長挑動生命體，使其混亂並互相爭鬥。', 'both'), secondary('擬態／NOTE', '能以親吻複製人類外貌，也能抽出他人的NOTE。', wikiJa), unknown('擬態及NOTE抽取的完整限制')], relationships: [official('katze', '一之瀨初', '立川事件後被初納入體內。')], evolution: [official('katze', '第二季', '仍保留喜好煽動、使用網路俚語的說話方式。')], images: imagePair('katze'), sourceIds: ['ntv-katze', 'wiki-ja'] });
const gelsadra = character({ id: 'gelsadra', name: '格爾薩德拉', japanese: 'ゲルサドラ', english: 'Gelsadra', aliases: ['Gel Sadra', '杜蘭莎', '杜兰莎', 'ゲルちゃん'], group: 'ALIEN', seasons: ['insight'], color: '#52cbee', summary: '降落在長岡、抱持和平願望的外星來客；把人心變得一致的願望逐漸改變了整個社會。', facts: [official('gelsadra', '少年形態身高', '129 cm'), official('gelsadra', '年齡', '未公開', 'insight', { verificationStatus: 'unknown' }), official('gelsadra', '生日', '未公開', 'insight', { verificationStatus: 'unknown' }), official('gelsadra', '血型', '未公開', 'insight', { verificationStatus: 'unknown' }), official('gelsadra', '日語聲優（少年）', '花澤香菜'), official('gelsadra', '日語聲優（青年）', '杉田智和')], appearance: [official('gelsadra', '外觀', '紅色皮膚、水藍色頭髮，黑白服裝與藍色披風。'), official('gelsadra', '青年形態', '為參選首相公選，把自己的身體變成成人；內心仍像孩子。')], abilities: [secondary('心情泡泡', '能把人心化為可見泡泡，吸收後感知多數人的情緒。', wikiJa, 'insight'), unknown('NOTE／G-SUIT', 'insight', '少年與青年是身體變化，並非官方G-SUIT圖版。'), unknown('讀取心情的範圍與精確限制', 'insight')], relationships: [official('gelsadra', '三棲立翼', '因墜落地在翼家附近而依賴翼；受Gatchaman監督保護。')], images: [...imagePair('gelsadra', false), { src: '/assets/official/s2/gelsadra-adult.png', label: '第二季官方青年形態', kind: 'setting', season: 'insight', sourceUrl: `${ntv}images/character/img_gelsadra_s.png`, credit: '© タツノコプロ / ガッチャマンクラウズインサイト製作委員会', available: true }], sourceIds: ['ntv-gelsadra', 'wiki-ja', 'bangumi-s2'] });
const jj = character({ id: 'jj', name: 'J·J·羅賓遜', japanese: 'J・J・ロビンソン', english: 'J.J. Robinson', aliases: ['J・J', 'JJ', 'J·J·罗宾逊'], group: 'ALIEN', color: '#59bfd4', summary: '評議會成員與地球監視者，抽出具潛力者的NOTE並給予預言。', facts: [official('jj', '日語聲優', '森功至', 'both'), unknown('身高'), unknown('年齡'), unknown('生日')], appearance: [official('jj', '外觀', '白色短髮、額部裝飾與藍綠色長袍，搭紅黑圍巾。')], abilities: [official('jj', 'NOTE與預言', '從有資質的人體內抽出NOTE，任命Gatchaman；透過NOTE給予對抗超越地球科技存在的預言。', 'both'), unknown('預言的條件與限制'), unknown('G-SUIT')], relationships: [official('paiman', '派曼', '派遣其來到地球。', 'both')], images: imagePair('jj', false), sourceIds: ['ntv-jj', 'ntv-paiman'] });

type SupportingRow = [string, string, string, string, string, Season, string, Character['group']?];
const supportingRows: SupportingRow[] = [
  ['umeda', '梅田光一', '梅田 光一', 'Kōichi Umeda', '遊佐浩二', 'both', 'HUNDRED成員，網名FUTURE GALAX。', 'GALAX'],
  ['ai', '梅田愛', '梅田 愛', 'Ai Umeda', '福沙奈惠', 'both', '梅田光一的女兒。'],
  ['sanada', '真田', '真田', 'Sanada', '上村祐翔', 'crowds', 'HUNDRED No.58，救援隊成員。', 'GALAX'],
  ['hinata', '山村日向', '山村 日向', 'Hinata Yamamura', '朝日奈央', 'crowds', '初的同班同學。'],
  ['kaede', '有賀楓', '有賀 楓', 'Kaede Ariga', '有賀苹果', 'crowds', '初的同班同學。'],
  ['kuwabara', '桑原隆男', '桑原 隆男', 'Takao Kuwabara', '齋藤志郎', 'both', '立川消防署署長。'],
  ['shimizu', '清水伸男', '清水 伸男', 'Nobuo Shimizu', '飛田展男', 'both', '立川市長。'],
  ['imaoka', '今岡雅子', '今岡 雅子', 'Masako Imaoka', '淺野麻由美', 'crowds', '自衛隊相關成員。'],
  ['reika', '鈴木麗華', '鈴木 麗華', 'Reika Suzuki', '桑島法子', 'crowds', '警察相關成員。'],
  ['aoi', '澤村葵', '澤村 葵', 'Aoi Sawamura', '久保由利香', 'crowds', '丈的同事。'],
  ['mao', '宮本真緒', '宮本 真緒', 'Mao Miyamoto', '三宅麻理惠', 'crowds', '丈的同事。'],
  ['alan', '國分阿蘭', '国分 阿蘭', 'Aran Kokubu', '乃村健次', 'both', '飛鏢咖啡酒吧店主，丈的朋友。'],
  ['sugayama', '菅山誠太郎', '菅山 誠太郎', 'Seitarō Sugayama', '家中宏', 'both', '作品中的日本首相。'],
  ['milione', '鳥山米利歐', '鳥山 ミリオ', 'Mirio Toriyama', '諏訪部順一', 'insight', '資訊節目「ミリオネ屋」主持人。'],
  ['kozo', '三棲立耕造', '三栖立 耕造', 'Kōzō Misudachi', '山田五郎', 'insight', '翼的父親。'],
  ['nozomi', '三棲立望', '三栖立 のぞみ', 'Nozomi Misudachi', '川崎惠理子', 'insight', '翼的母親。'],
  ['yuu', '三棲立悠', '三栖立 悠', 'Yū Misudachi', '齋藤志郎', 'insight', '翼的曾祖父，煙火師，暱稱悠爺。'],
  ['kodama', '丸山木靈', '丸山 こだま', 'Kodama Maruyama', '廣橋涼', 'insight', '翼的女性友人。'],
  ['dd', 'D·D', 'D・D', 'D.D.', '遠藤廣之', 'insight', '接替O·D的節目評論來賓。'],
];
const supporting = supportingRows.map(([id, name, japanese, english, cv, season, role, group]): Character => character({
  id, name, japanese, english, summary: role, group: group ?? 'CIVILIAN', aliases: [japanese.replaceAll(' ', ''), english], seasons: season === 'both' ? ['crowds', 'insight'] : [season], color: '#8795a1',
  facts: [secondary('角色／日文原名', `${japanese} · ${role}`, wikiJa, season), secondary('日語聲優', cv, wikiZh, season), fact('羅馬字索引', english, wikiJa, '日文姓名讀音轉寫', season, 'inferred', 'encyclopedia', { note: '為多語搜尋提供羅馬字轉寫；未聲稱皆為官方英文譯名。' }), unknown('身高', season), unknown('年齡', season), unknown('生日', season)],
  appearance: [unknown('詳細服裝／官方設定圖', season)], abilities: [unknown('NOTE／G-SUIT／能力', season, '未找到該角色擁有NOTE或G-SUIT的官方資料；不因其出場就推定有能力。')],
  relationships: [secondary('角色關聯', role, wikiJa, season)], sourceIds: ['wiki-ja', 'wiki-zh'], missing: ['數值設定未公開；配角缺少可核實的獨立官方角色圖版。', '季別標籤表示已收錄的作品關聯，不是排除其他集數客串的完整名單。'],
}));

const entities = [
  character({ id: 'big-smalls', name: '大史莫斯', japanese: 'ビッグスモールズ', english: 'Big Smalls', aliases: ['ビッグスモールズ', 'Big Smalls'], group: 'CIVILIAN', summary: '支援Gatchaman作業的勞動用複製體群。', facts: [secondary('角色定位', '協助救出被MESS捕捉的人類，並處理失去活動能力的Crowds。', wikiZh, 'crowds'), unknown('身高'), unknown('年齡'), unknown('生日'), unknown('配音')], appearance: [secondary('外觀', '頭部如黃色寶石的支援用複製體。', wikiJa, 'crowds')], abilities: [unknown('完整能力與個體設定')], sourceIds: ['wiki-ja', 'wiki-zh'] }),
  character({ id: 'altair', name: '阿爾泰爾', japanese: 'アルタイル', english: 'Altair', aliases: ['アル', '阿爾'], group: 'CIVILIAN', summary: 'O·D飼養的黑貓，名字取自牽牛星。', facts: [official('od', '飼主', 'O·D', 'both'), unknown('身高'), unknown('年齡'), unknown('生日'), unknown('配音')], appearance: [official('od', '外觀', '官方角色圖可見黑色貓咪停在O·D肩邊。')], sourceIds: ['ntv-od'] }),
  character({ id: 'mess', name: 'MESS', japanese: 'MESS（メス）', english: 'MESS', aliases: ['Messy', 'メッシー'], group: 'ALIEN', summary: '初加入時的任務對象，其存在成為她重新思考敵我關係的起點。', facts: [secondary('分類', '神祕生命體／群體，並非單一人類角色。', wikiEn, 'crowds'), unknown('身高'), unknown('年齡'), unknown('生日')], abilities: [unknown('完整生態與能力限制')], sourceIds: ['wiki-en'] }),
  character({ id: 'kuu', name: '咕大人', japanese: 'くうさま', english: 'Kuu-sama', aliases: ['庫大人', '库大人', 'くうさま'], group: 'ALIEN', seasons: ['insight'], summary: '第二季出現、與群眾氣氛密切相關的神祕存在。', facts: [secondary('登場', 'insight篇出現的群體存在。', wikiJa, 'insight'), unknown('身高', 'insight'), unknown('年齡', 'insight'), unknown('生日', 'insight')], abilities: [unknown('精確分類／能力上限', 'insight')], sourceIds: ['wiki-ja'] }),
];

gelsadra.images.push({ src: '/assets/official/s2/gelsadra-g.png', label: '第二季官方本來形態（並非G-SUIT）', kind: 'setting', season: 'insight', sourceUrl: `${ntv}images/character/img_gelsadra_g.png`, credit: '© タツノコプロ / ガッチャマンクラウズインサイト製作委員会', available: true });
gelsadra.appearance.push(official('gelsadra', '本來形態', '煙霧般軀體搭黑紅色外殼；官方標示為「本來的姿態」，不可誤作G-SUIT。'));
const yuu = supporting.find((entry) => entry.id === 'yuu');
if (yuu) yuu.facts = yuu.facts.map((entry) => entry.label === '年齡' ? secondary('年齡', '99歲', wikiJa, 'insight') : entry);
const milione = supporting.find((entry) => entry.id === 'milione');
if (milione) milione.aliases.push('Millio Toriyama', 'Toriyama Mirio');
const kuu = entities.find((entry) => entry.id === 'kuu');
if (kuu) kuu.facts.push(secondary('日語聲優', '久保由利香、三宅麻理惠', wikiEn, 'insight'));
const utsutsuAge = utsutsu.facts.find((entry) => entry.label === '第一季年齡');
if (utsutsuAge) {
  utsutsuAge.alternatives = [{ value: '自稱已活了300年以上', sourceUrl: 'https://moegirl.icu/zh-tw/宫现', sourceName: '萌娘百科 · 宮現', note: '該條目指向第11話台詞；角色自述與人物設定的推定年齡應分開，未將此當可確認年齡。' }];
}
const noteColors: [Character, string][] = [[hajime, '白色；insight多了紅色線條'], [sugane, '灰色'], [joe, '紅色'], [od, '綠色'], [paiman, '粉紅色'], [rui, '淡紫色'], [tsubasa, '藍色'], [katze, '金色']];
for (const [entry, color] of noteColors) {
  entry.abilities.push(secondary('NOTE 顏色', color, entry.id === 'katze' ? wikiEn : wikiJa, entry.id === 'tsubasa' ? 'insight' : 'both'));
  const sourceId = entry.id === 'katze' ? 'wiki-en' : 'wiki-ja';
  if (!entry.sourceIds.includes(sourceId)) entry.sourceIds.push(sourceId);
}

export const characters: Character[] = [utsutsu, hajime, tsubasa, sugane, joe, od, paiman, rui, x, rizum, katze, gelsadra, jj, ...supporting, ...entities];

// Shared catalogue fields remain visible even when a source publishes no value.
const readings: Record<string, string> = {
  utsutsu: 'みや うつつ', hajime: 'いちのせ はじめ', tsubasa: 'みすだち つばさ',
  sugane: 'たちばな すがね', joe: 'ひびき じょう', rui: 'にのみや るい',
  rizum: 'すずき りずむ', od: 'オー・ディー', paiman: 'パイマン', x: 'そうさいエックス',
  katze: 'ベルク・カッツェ', gelsadra: 'ゲルサドラ', jj: 'ジェイ・ジェイ・ロビンソン',
};
const genderRecords: Record<string, string> = { utsutsu: '女性', hajime: '女性', tsubasa: '女性', sugane: '男性', joe: '男性', rui: '男性', rizum: '男性' };
utsutsu.appearance.push(secondary('瞳色', '淺綠色', fandomUtsutsu, 'both'));
utsutsu.facts.push(secondary('初次登場', '第一季第1話《Avant-garde》', fandomUtsutsu, 'crowds'));
for (const entry of characters) {
  const officialMain = mainIds.includes(entry.id);
  entry.facts.unshift(
    secondary('中文索引名稱', entry.name, wikiZh),
    officialMain ? official(entry.id, '日文原名', entry.japanese) : secondary('日文原名', entry.japanese, wikiJa),
    officialMain ? official(entry.id, '英文公開拼法', entry.english, 'insight', { note: '依現行官方角色圖版的英文名稱；別名另列羅馬字變體。' }) : fact('英文／羅馬字索引', entry.english, wikiJa, '日文姓名轉寫', 'both', 'inferred', 'encyclopedia', { note: '供多語搜尋的姓名轉寫；未主張為正式英譯。' }),
    readings[entry.id] ? secondary('日文讀音', readings[entry.id], wikiJa) : unknown('日文讀音'),
  );
  if (readings[entry.id] && !entry.aliases.includes(readings[entry.id])) entry.aliases.push(readings[entry.id]);
  for (const label of ['體重', '血型', '性別', '英語配音', '初次登場']) {
    if (!entry.facts.some((field) => field.label.includes(label))) entry.facts.push(label === '性別' && genderRecords[entry.id] ? secondary('性別', genderRecords[entry.id], wikiEn) : unknown(label));
  }
  if (!entry.sourceIds.includes('wiki-zh')) entry.sourceIds.push('wiki-zh');
  if (!entry.sourceIds.includes('wiki-ja')) entry.sourceIds.push('wiki-ja');
}

// Explicit relation targets reference the same cited description shown in the UI.
const relationTargets: Record<string, Record<string, string[]>> = {
  utsutsu: { 'O·D': ['od'], '一之瀨初': ['hajime'], '初送的摺紙青蛙': ['hajime', 'altair'], '枇枇木丈': ['joe'] },
  hajime: { '貝爾庫·卡切': ['katze'], '三棲立翼': ['tsubasa'] },
  sugane: { '枇枇木丈': ['joe'] }, joe: { '清音': ['sugane'], '清水伸男': ['shimizu'] },
  od: { '宮現': ['utsutsu'], '阿爾泰爾': ['altair'] }, paiman: { 'J·J·羅賓遜': ['jj'] },
  x: { '爾乃美家累': ['rui'] }, rizum: { '爾乃美家累': ['rui'] }, katze: { '一之瀨初': ['hajime'] },
  gelsadra: { '三棲立翼': ['tsubasa'] }, jj: { '派曼': ['paiman'] },
  ai: { '角色關聯': ['umeda'] }, hinata: { '角色關聯': ['hajime'] }, kaede: { '角色關聯': ['hajime'] },
  alan: { '角色關聯': ['joe'] }, kozo: { '角色關聯': ['tsubasa'] }, nozomi: { '角色關聯': ['tsubasa'] },
  yuu: { '角色關聯': ['tsubasa'] }, kodama: { '角色關聯': ['tsubasa'] }, dd: { '角色關聯': ['od'] },
};
for (const entry of characters) for (const relation of entry.relationships) {
  const targets = relationTargets[entry.id]?.[relation.label];
  if (targets) relation.relatedCharacterIds = targets;
}
characters.find((entry) => entry.id === 'altair')!.relationships.push(official('od', 'O·D', '由O·D飼養的黑貓。', 'both', { relatedCharacterIds: ['od'] }));

