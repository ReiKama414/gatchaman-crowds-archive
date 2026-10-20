import type { ArchiveAsset } from './assets'

export const noteOverview: ArchiveAsset = {
  id: 'note-eight-colors-hd', path: '/assets/merch/note-eight-colors-hd.png',
  sourceUrl: '/assets/merch/note-eight-colors-hd.png', sourcePage: '/assets/references/note-eight-colors-original.png',
  sourceName: '使用者提供原圖 · AI 高清重製', season: 2, kind: 'merch', layout: 'standalone',
  dimensions: { width: 1254, height: 1254 }, downloadStatus: 'downloaded',
  caption: '八色 NOTE 商品圖 · AI 高清重製', provenance: 'ai-restored', transparent: false,
  rights: '原圖標示 © タツノコプロ／ガッチャマン クラウズ インサイト製作委員会；本圖為 AI 高清重製，並非新增官方設定圖。',
  generation: { tool: 'imagegen', created: '2026-10-20', references: ['/assets/references/note-eight-colors-original.png'], prompt: "Use case: identity-preserve / precise-object-edit. Restore the supplied low-resolution GATCHAMAN CROWDS insight eight-color NOTE product poster into a clean high-resolution square image, target 2048 by 2048 pixels or larger. This is a faithful restoration of THIS EXACT poster, not a redesign. Preserve the exact full composition, black outer frame, white field, colored honeycomb pattern at upper left, dotted logo panel, turquoise handwritten insight, decorative black CROWDS with smaller GATCHAMAN beneath, and black NOTE heading at upper right. Preserve the pale blue label with the exact text '8color'. There must be EIGHT color variants, each shown as the same front-and-back pair of silver metal-framed NOTE books: the larger white book pair with red bands on the left; gray pair in upper middle; red pair upper right; pink pair middle center; yellow pair middle right; lavender pair lower left; blue pair lower center; turquoise-green pair lower right. Exactly eight pairs / sixteen individual books, retain their positions, relative sizes, perspective, silver edges, black spine straps, small circle marks, bird insignia and fine cover markings. Recover crisp legible contours and clean flat product colors without inventing new decorative elements or changing any hue, typography or product design. Keep the original small copyright line in its bottom position, preserving what is visible rather than adding new legal wording. Remove JPEG blur and pixelation. No new captions, characters, shadows, alternate layout or extra notebooks. Output the complete uncropped poster on an opaque white background, generous enough to retain the complete black border. Preserve all original branding and composition." },
}

// Retailer photographs of licensed A6 stationery; not animation setting sheets.
export const noteMerch: ArchiveAsset[] = [
  {
    "id": "note-od",
    "path": "/assets/merch/note-od.jpg",
    "sourceUrl": "https://goodsrepublic.com/media/binary/005/622/024/5622024.jpg",
    "sourcePage": "https://goodsrepublic.com/product/product_page_3664482.html?type=tagpage_product",
    "sourceName": "Goods Republic｜官方商品實物圖",
    "season": 1,
    "characterId": "od",
    "kind": "merch",
    "layout": "standalone",
    "dimensions": {
      "width": 384,
      "height": 384
    },
    "rights": "商品圖與角色設計權利屬原權利人；實物照片由 Goods Republic 刊載。",
    "downloadStatus": "downloaded",
    "caption": "O.D. A6 NOTE / O.D. GREEN"
  },
  {
    "id": "note-utsutsu",
    "path": "/assets/merch/note-utsutsu.jpg",
    "sourceUrl": "https://goodsrepublic.com/media/binary/006/170/011/6170011.jpg",
    "sourcePage": "https://goodsrepublic.com/product/product_page_4012367.html?type=tagpage_product",
    "sourceName": "Goods Republic｜官方商品實物圖",
    "season": 1,
    "characterId": "utsutsu",
    "kind": "merch",
    "layout": "standalone",
    "dimensions": {
      "width": 384,
      "height": 384
    },
    "rights": "商品圖與角色設計權利屬原權利人；實物照片由 Goods Republic 刊載。",
    "downloadStatus": "downloaded",
    "caption": "宮現 A6 NOTE / UTSUTSU YELLOW"
  },
  {
    "id": "note-paiman",
    "path": "/assets/merch/note-paiman.jpg",
    "sourceUrl": "https://goodsrepublic.com/media/binary/006/167/822/6167822.jpg",
    "sourcePage": "https://goodsrepublic.com/product/product_page_4008711.html?type=tagpage_product",
    "sourceName": "Goods Republic｜官方商品實物圖",
    "season": 1,
    "characterId": "paiman",
    "kind": "merch",
    "layout": "standalone",
    "dimensions": {
      "width": 384,
      "height": 384
    },
    "rights": "商品圖與角色設計權利屬原權利人；實物照片由 Goods Republic 刊載。",
    "downloadStatus": "downloaded",
    "caption": "派曼 A6 NOTE / PAIMAN PINK"
  },
  {
    "id": "note-hajime",
    "path": "/assets/merch/note-hajime.jpg",
    "sourceUrl": "https://goodsrepublic.com/media/binary/004/605/088/4605088.jpg",
    "sourcePage": "https://goodsrepublic.com/product/product_page_2933374.html?type=tagpage_product",
    "sourceName": "Goods Republic｜官方商品實物圖",
    "season": 1,
    "characterId": "hajime",
    "kind": "merch",
    "layout": "standalone",
    "dimensions": {
      "width": 260,
      "height": 384
    },
    "rights": "商品圖與角色設計權利屬原權利人；實物照片由 Goods Republic 刊載。",
    "downloadStatus": "downloaded",
    "caption": "一之瀨初 A6 NOTE / HAJIME WHITE"
  },
  {
    "id": "note-sugane",
    "path": "/assets/merch/note-sugane.jpg",
    "sourceUrl": "https://goodsrepublic.com/media/binary/004/760/676/4760676.jpg",
    "sourcePage": "https://goodsrepublic.com/product/product_page_3042219.html?type=tagpage_product",
    "sourceName": "Goods Republic｜官方商品實物圖",
    "season": 1,
    "characterId": "sugane",
    "kind": "merch",
    "layout": "standalone",
    "dimensions": {
      "width": 250,
      "height": 384
    },
    "rights": "商品圖與角色設計權利屬原權利人；實物照片由 Goods Republic 刊載。",
    "downloadStatus": "downloaded",
    "caption": "橘清音 A6 NOTE / SUGANE GRAY"
  }
]

