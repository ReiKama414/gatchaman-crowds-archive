
import { noteMerch, noteOverview } from './noteMerch'
import { recreatedAssets } from './recreated'

export interface ArchiveAsset {
  id: string;
  path: string;
  sourceUrl: string;
  sourcePage: string;
  sourceName: string;
  season: 1 | 2;
  characterId?: string;
  episode?: number;
  kind: 'character' | 'g-suit' | 'adult-form' | 'key-visual' | 'scene' | 'design' | 'merch';
  layout: 'standalone' | 'profile-sheet' | 'key-visual' | 'scene';
  dimensions: { width: number; height: number };
  rights: string;
  downloadStatus: 'downloaded';
  caption: string;
  cropBounds?: { x: number; y: number; width: number; height: number };
  provenance?: 'ai-redraw' | 'ai-restored';
  transparent?: boolean;
  generation?: { tool: 'imagegen'; prompt: string; references: string[]; created: string };
}

/** Original source files; profile sheets intentionally retain their full captions and artwork. */
export const archiveAssets: ArchiveAsset[] = [
  ...recreatedAssets,
  ...noteMerch,
  noteOverview,
  {
    "id": "s2-hajime",
    "path": "/assets/official/s2/hajime.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_hajime.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/index.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "hajime",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-hajime-g",
    "path": "/assets/official/s2/hajime-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_hajime_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/index.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "hajime",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-tsubasa",
    "path": "/assets/official/s2/tsubasa.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_tsubasa.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/tsubasa.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "tsubasa",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-tsubasa-g",
    "path": "/assets/official/s2/tsubasa-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_tsubasa_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/tsubasa.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "tsubasa",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-sugane",
    "path": "/assets/official/s2/sugane.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_sugane.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/sugane.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "sugane",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-sugane-g",
    "path": "/assets/official/s2/sugane-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_sugane_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/sugane.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "sugane",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-joe",
    "path": "/assets/official/s2/joe.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_joe.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/joe.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "joe",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-joe-g",
    "path": "/assets/official/s2/joe-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_joe_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/joe.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "joe",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-utsutsu",
    "path": "/assets/official/s2/utsutsu.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_utsutsu.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/utsutsu.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "utsutsu",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-utsutsu-g",
    "path": "/assets/official/s2/utsutsu-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_utsutsu_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/utsutsu.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "utsutsu",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-paiman",
    "path": "/assets/official/s2/paiman.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_paiman.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/paiman.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "paiman",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-paiman-g",
    "path": "/assets/official/s2/paiman-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_paiman_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/paiman.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "paiman",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-od",
    "path": "/assets/official/s2/od.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_od.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/od.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "od",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-od-g",
    "path": "/assets/official/s2/od-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_od_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/od.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "od",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-rui",
    "path": "/assets/official/s2/rui.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_rui.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/rui.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "rui",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-rui-g",
    "path": "/assets/official/s2/rui-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_rui_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/rui.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "rui",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-x",
    "path": "/assets/official/s2/x.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_x.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/x.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "x",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-rizum",
    "path": "/assets/official/s2/rizum.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_rizum.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/rizum.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "rizumu",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-katze",
    "path": "/assets/official/s2/katze.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_katze.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/katze.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "katze",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-katze-g",
    "path": "/assets/official/s2/katze-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_katze_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/katze.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "katze",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 設定資料"
  },
  {
    "id": "s2-gelsadra",
    "path": "/assets/official/s2/gelsadra.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_gelsadra.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/gelsadra.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "gelsadra",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-gelsadra-g",
    "path": "/assets/official/s2/gelsadra-g.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_gelsadra_g.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/gelsadra.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "gelsadra",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方本來形態設定資料（並非 G-SUIT）"
  },
  {
    "id": "s2-gelsadra-adult",
    "path": "/assets/official/s2/gelsadra-adult.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_gelsadra_s.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/gelsadra.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "gelsadra",
    "kind": "adult-form",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方成年姿態資料"
  },
  {
    "id": "s2-jj",
    "path": "/assets/official/s2/jj.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/character/img_jj.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/character/jj.html",
    "sourceName": "日本電視台《insight》官方角色頁",
    "season": 2,
    "characterId": "jj",
    "kind": "character",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 835
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方日常姿態與角色資料"
  },
  {
    "id": "s2-hajime-visual",
    "path": "/assets/official/s2/hajime-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_hajime.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "hajime",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 400,
      "height": 552
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-tsubasa-visual",
    "path": "/assets/official/s2/tsubasa-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_tsubasa.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "tsubasa",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 293,
      "height": 573
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-sugane-visual",
    "path": "/assets/official/s2/sugane-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_sugane.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "sugane",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 307,
      "height": 353
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-joe-visual",
    "path": "/assets/official/s2/joe-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_joe.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "joe",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 196,
      "height": 596
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-utsutsu-visual",
    "path": "/assets/official/s2/utsutsu-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_utsutsu.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "utsutsu",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 154,
      "height": 204
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-rui-visual",
    "path": "/assets/official/s2/rui-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_rui.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "rui",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 226,
      "height": 184
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-paiman-visual",
    "path": "/assets/official/s2/paiman-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_paiman.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "paiman",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 83,
      "height": 270
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s2-jj-visual",
    "path": "/assets/official/s2/jj-visual.png",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/top/chara_jj.png",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/",
    "sourceName": "日本電視台《insight》官方首頁",
    "season": 2,
    "characterId": "jj",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 97,
      "height": 266
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "官方首頁透明角色圖（原尺寸）"
  },
  {
    "id": "s1-key-visual",
    "path": "/assets/official/s1/key-visual.jpg",
    "sourceUrl": "https://tatsunoko.co.jp/wp-content/uploads/2024/03/80_gatchaman_crowds_sm.jpg",
    "sourcePage": "https://tatsunoko.co.jp/en/works/gatchaman-crowds/",
    "sourceName": "龍之子製作官方作品頁",
    "season": 1,
    "kind": "key-visual",
    "layout": "key-visual",
    "dimensions": {
      "width": 600,
      "height": 338
    },
    "rights": "© Tatsunoko Production © 2013 NTV・VAP・Tatsunoko Pro.",
    "downloadStatus": "downloaded",
    "caption": "官方主視覺"
  },
  {
    "id": "s2-key-visual",
    "path": "/assets/official/s2/key-visual.jpg",
    "sourceUrl": "https://tatsunoko.co.jp/wp-content/uploads/2024/03/88_gatchaman-crowds-insight.jpg",
    "sourcePage": "https://tatsunoko.co.jp/en/works/gatchaman-crowds-insight/",
    "sourceName": "龍之子製作官方作品頁",
    "season": 2,
    "kind": "key-visual",
    "layout": "key-visual",
    "dimensions": {
      "width": 400,
      "height": 529
    },
    "rights": "© Tatsunoko Production © 2015 NTV・VAP・Tatsunoko Pro.",
    "downloadStatus": "downloaded",
    "caption": "官方主視覺"
  },
  {
    "id": "s1-ntv-key-visual",
    "path": "/assets/official/s1/ntv-key-visual.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GATCHAMAN_Crowds/images/70jk4lv9c0w48vaetojkdmihul3kei.jpg",
    "sourcePage": "https://www.ntv.co.jp/GATCHAMAN_Crowds/",
    "sourceName": "日本電視台第一季官方首頁",
    "season": 1,
    "kind": "key-visual",
    "layout": "key-visual",
    "dimensions": {
      "width": 700,
      "height": 394
    },
    "rights": "© Tatsunoko Production © 2013 NTV・VAP・Tatsunoko Pro.",
    "downloadStatus": "downloaded",
    "caption": "官方主視覺"
  },
  {
    "id": "s1-hajime-press-character",
    "path": "/assets/official/s1/hajime-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_1_4_d6ac9646f0c7908cb37fbc430ff382b651bec8ba.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "hajime",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-hajime-press-g-suit",
    "path": "/assets/official/s1/hajime-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1373266501_2_2_a5ddecf6c9272c81919f2b0f3059878a51da6047.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "hajime",
    "kind": "g-suit",
    "layout": "standalone",
    "dimensions": {
      "width": 278,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-sugane-press-character",
    "path": "/assets/official/s1/sugane-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_1_7_ad74729705389382e395f2cb1929eced51bec8b9.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "sugane",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-sugane-press-g-suit",
    "path": "/assets/official/s1/sugane-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1373266501_2_3_b93d836433d2156c7a21660088cb881b51da6046.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "sugane",
    "kind": "g-suit",
    "layout": "standalone",
    "dimensions": {
      "width": 265,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-joe-press-character",
    "path": "/assets/official/s1/joe-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_1_10_6e8616a2df780038b69e817bd589ad6551bec8b4.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "joe",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-joe-press-g-suit",
    "path": "/assets/official/s1/joe-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1373266501_2_4_548d2f0bbc989397e1d2cabda1f2bb6351da6041.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "joe",
    "kind": "g-suit",
    "layout": "standalone",
    "dimensions": {
      "width": 238,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-paiman-press-character",
    "path": "/assets/official/s1/paiman-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_1_13_6945da74e3eb240608b6cce500ffa39f51bec8b3.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "paiman",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-utsutsu-press-character",
    "path": "/assets/official/s1/utsutsu-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_1_16_fb5a42d91acf9cb86d529c97e6f4fbdf51bec8ae.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "utsutsu",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-od-press-character",
    "path": "/assets/official/s1/od-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_2_1_da8ae4d859bb69e491cedb122f498d1751becbbf.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "od",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-jj-press-character",
    "path": "/assets/official/s1/jj-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_2_4_d95cd8f3900d09f388557ec53fe68df851becbba.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "jj",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-rui-press-character",
    "path": "/assets/official/s1/rui-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_2_7_80f2ae32d51b4d5642aad8a535d18b4f51becbb9.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "rui",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s2-rui-press-g-suit",
    "path": "/assets/official/s2/rui-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1433928754_1_16_0b8e22f462e1b56d192726692ae38095.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "rui",
    "kind": "g-suit",
    "layout": "standalone",
    "dimensions": {
      "width": 310,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s1-rui-press-design",
    "path": "/assets/official/s1/rui-press-design.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_2_10_c1324d2ee5276387968918220080643851becbb4.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "rui",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方宣傳設定圖（媒體轉載，保留來源浮水印）"
  },
  {
    "id": "s1-katze-press-character",
    "path": "/assets/official/s1/katze-press-character.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2013/1371457982_2_13_b978d2ce4760275eebe7b82a5bc2460751becbb3.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 1,
    "characterId": "katze",
    "kind": "character",
    "layout": "standalone",
    "dimensions": {
      "width": 413,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方角色立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s2-katze-press-design",
    "path": "/assets/official/s2/katze-press-design.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1433928754_1_10_1acb77e6697409441e87bdcf0ed339ef.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "katze",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 413
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方宣傳設定圖（媒體轉載，保留來源浮水印）"
  },
  {
    "id": "s2-tsubasa-press-design",
    "path": "/assets/official/s2/tsubasa-press-design.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1433928754_1_4_292d0abe33a299dd5f02bc97fa30ba30.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "tsubasa",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 413
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方宣傳設定圖（媒體轉載，保留來源浮水印）"
  },
  {
    "id": "s2-tsubasa-press-g-suit",
    "path": "/assets/official/s2/tsubasa-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1436520737_1_4_16242c99099eb651d95765f113ab1488.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "tsubasa",
    "kind": "g-suit",
    "layout": "standalone",
    "dimensions": {
      "width": 227,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方 G-SUIT 立繪（媒體轉載，白色背景）"
  },
  {
    "id": "s2-rizumu-press-design",
    "path": "/assets/official/s2/rizumu-press-design.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1433928754_1_7_d80a97886ccc6f7b9f2992a5bb94fc88.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "rizumu",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 413
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方宣傳設定圖（媒體轉載，保留來源浮水印）"
  },
  {
    "id": "s2-gelsadra-press-design",
    "path": "/assets/official/s2/gelsadra-press-design.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1433928754_1_13_be901b408d7ed56bbbb593e5e84022e7.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "gelsadra",
    "kind": "design",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 620,
      "height": 413
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方宣傳設定圖（媒體轉載，保留來源浮水印）"
  },
  {
    "id": "s2-gelsadra-press-g-suit",
    "path": "/assets/official/s2/gelsadra-press-g-suit.jpg",
    "sourceUrl": "https://img.animatetimes.com/news/visual/2015/1436520737_1_7_ae88a912e2722ab306d436d12e75a631.jpg",
    "sourcePage": "https://www.animatetimes.com/tag/details.php?id=3487",
    "sourceName": "Animate Times（官方宣傳圖轉載）",
    "season": 2,
    "characterId": "gelsadra",
    "kind": "design",
    "layout": "standalone",
    "dimensions": {
      "width": 291,
      "height": 620
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ インサイト製作委員会；轉載站浮水印保留",
    "downloadStatus": "downloaded",
    "caption": "官方本來形態立繪（並非 G-SUIT；媒體轉載，白色背景）"
  },
  {
    "id": "s1-utsutsu-g-suit-design",
    "path": "/assets/official/s1/utsutsu-g-suit-design.jpg",
    "sourceUrl": "https://storage.mantan-web.jp/w=360,h=210,f=webp:auto/images/2013/09/04/20130904dog00m200068000c/003_size4.jpg",
    "sourcePage": "https://mantan-web.jp/article/20130904dog00m200068000c/photopage/003.html",
    "sourceName": "MANTANWEB（官方公開設定圖報導）",
    "season": 1,
    "characterId": "utsutsu",
    "kind": "g-suit",
    "layout": "profile-sheet",
    "dimensions": {
      "width": 360,
      "height": 210
    },
    "rights": "© タツノコプロ／ガッチャマンクラウズ製作委員会",
    "downloadStatus": "downloaded",
    "caption": "第一季宮現 G-SUIT 正反面與日常立繪（官方公開，媒體轉載）"
  },
  {
    "id": "s2-episode-00",
    "path": "/assets/official/s2/episode-00.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/00/img04.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story00.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 0,
    "characterId": "hajime",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #0 官方劇照"
  },
  {
    "id": "s2-episode-01",
    "path": "/assets/official/s2/episode-01.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/01/img01.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story01.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 1,
    "characterId": "hajime",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #1 官方劇照"
  },
  {
    "id": "s2-episode-02",
    "path": "/assets/official/s2/episode-02.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/02/img04.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story02.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 2,
    "characterId": "gelsadra",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #2 官方劇照"
  },
  {
    "id": "s2-episode-03",
    "path": "/assets/official/s2/episode-03.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/03/img03.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story03.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 3,
    "characterId": "rui",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #3 官方劇照"
  },
  {
    "id": "s2-episode-04",
    "path": "/assets/official/s2/episode-04.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/04/img01.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story04.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 4,
    "characterId": "od",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #4 官方劇照"
  },
  {
    "id": "s2-episode-05",
    "path": "/assets/official/s2/episode-05.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/05/img04.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story05.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 5,
    "characterId": "joe",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #5 官方劇照"
  },
  {
    "id": "s2-episode-06",
    "path": "/assets/official/s2/episode-06.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/06/img02.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story06.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 6,
    "characterId": "joe",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #6 官方劇照"
  },
  {
    "id": "s2-episode-07",
    "path": "/assets/official/s2/episode-07.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/07/img01.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story07.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 7,
    "characterId": "utsutsu",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #7 官方劇照｜宮現近景與長髮"
  },
  {
    "id": "s2-episode-08",
    "path": "/assets/official/s2/episode-08.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/08/img02.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story08.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 8,
    "characterId": "tsubasa",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #8 官方劇照"
  },
  {
    "id": "s2-episode-09",
    "path": "/assets/official/s2/episode-09.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/09/img02.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story09.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 9,
    "characterId": "utsutsu",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #9 官方劇照｜宮現與 O.D. 同場"
  },
  {
    "id": "s2-episode-10",
    "path": "/assets/official/s2/episode-10.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/10/img04.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story10.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 10,
    "characterId": "hajime",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #10 官方劇照"
  },
  {
    "id": "s2-episode-11",
    "path": "/assets/official/s2/episode-11.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/11/img02.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story11.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 11,
    "characterId": "rizumu",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #11 官方劇照"
  },
  {
    "id": "s2-episode-12",
    "path": "/assets/official/s2/episode-12.jpg",
    "sourceUrl": "https://www.ntv.co.jp/GC_insight/images/story/12/img01.jpg",
    "sourcePage": "https://www.ntv.co.jp/GC_insight/story/story12.html",
    "sourceName": "日本電視台《insight》官方各話介紹",
    "season": 2,
    "episode": 12,
    "characterId": "rui",
    "kind": "scene",
    "layout": "scene",
    "dimensions": {
      "width": 500,
      "height": 281
    },
    "rights": "© タツノコプロ／ガッチャマン クラウズ インサイト製作委員会",
    "downloadStatus": "downloaded",
    "caption": "insight #12 官方劇照"
  },
];

export const getCharacterAssets = (id: string): ArchiveAsset[] => archiveAssets.filter(asset => asset.characterId === (id === 'rizum' ? 'rizumu' : id));
