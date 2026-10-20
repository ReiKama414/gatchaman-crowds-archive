# GATCHAMAN CROWDS — 數位檔案

[English](./README.md) · **繁體中文**

> 以繁體中文呈現的**單頁互動粉絲檔案**，收錄《GATCHAMAN CROWDS》兩季：角色、宮現專區、NOTE、關係網路、官方圖片、音樂與各話資料

<p align="center">
  <img src="./public/assets/official/s1/key-visual.jpg" alt="第一季官方主視覺" width="720" />
</p>

<p align="center">
  <a href="https://reikama414.vercel.app/">個人網站</a>
  ·
  <a href="#快速開始">快速開始</a>
  ·
  <a href="#license--權限">授權</a>
</p>

---

## 亮點

- **兩季一捲到底** — 角色、宮現專區、NOTE、關係、圖庫、音樂與各話資料
- **證據優先的資料** — `confirmed` / `secondary` / `inferred` / `unknown`；空欄位於介面隱藏
- **左右側輪播** — 滑鼠拖曳、觸控滑動與方向鍵；不用橫向滾軸
- **角色搜尋** — 按 `/` 跳到角色圖鑑並聚焦搜尋框
- **尊重動態偏好** — 遵循系統 Reduced Motion；頁首 Play / Pause 切換

---

## 技術棧

| 層級 | 選用 |
| --- | --- |
| UI | React 19 · TypeScript · Vite |
| 3D | Three.js · React Three Fiber · Drei |
| 動態 | GSAP · Lenis |
| 狀態 | Zustand |
| 樣式 | Tailwind CSS 4 |

---

## 快速開始

```bash
npm install
npm run dev
```

開啟終端顯示的網址（預設 `http://localhost:5173/`）

| 指令 | 用途 |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run check:data` | 驗證資料完整性 |
| `npm run build` | 正式建置 |
| `npm run preview` | 預覽建置結果 |

部署後站點仍可透過連結開啟，但**不供搜尋引擎索引**：`index.html` 的 `noindex` meta、`public/robots.txt` 全站 `Disallow`，以及 `vercel.json` 的 `X-Robots-Tag`（Vercel）。遵守規則的爬蟲不應收錄；無法保證惡意或無視 robots 的抓取

---

## 操作

| 操作 | 行為 |
| --- | --- |
| 搜尋角色 | 按 `/` |
| 輪播 | 拖曳、滑動或 ← → |
| 圖片燈箱 | Esc、← →、焦點循環 |
| 關係圖 | 拖曳、鍵盤選取、縮放 |
| 音樂 | 曲目資訊與官方唱片／試聽頁連結（站內不播放） |
| 減少動態 | 系統偏好或頁首 Play / Pause |

官方影片連結僅出現在來源引用。WebGL 不可用時仍保留資料與靜態視覺

---

## 專案結構

```
gatchaman-crowds-archive/
├── public/assets/       # 官方圖、商品照、重繪稿
├── scripts/             # 資料驗證
├── src/
│   ├── components/      # 檔案 UI、輪播、場景
│   ├── data/            # 角色、系列、素材、登錄
│   ├── App.tsx
│   ├── store.ts
│   └── styles.css
├── LICENSE
├── README.md
└── README.zh-TW.md
```

| 路徑 | 用途 |
| --- | --- |
| `src/data/characters.ts` | 人物、多語別名、能力、關係與逐欄證據 |
| `src/data/series.ts` | 兩季、24 個正式 TV 集數、兩個特別篇、音樂與世界觀 |
| `src/data/assets.ts` | 資源路徑、原始網址、來源頁、尺寸、季別與權利紀錄 |
| `src/data/recreated.ts` | 三張選定的 v2 重繪稿 — 提示詞、參考檔、尺寸與透明狀態 |
| `src/data/noteMerch.ts` | 八色 NOTE 商品圖（1254×1254）與相關紀錄 |
| `public/assets/official/` | 成功取得的官方圖片（媒體轉載已個別標明） |

第 07 區固定展示八色 NOTE 商品圖高清重製版。已核對的 A6 NOTE 商品照片仍保留於圖庫與來源紀錄。角色 NOTE 能力可由右側選單切換

---

## 正確性聲明

這是**非官方粉絲作品**。世界觀文案、關係整理與視覺隱喻可能含粉絲詮釋。需要準確資訊時，請優先採信標記為 `confirmed` 的欄位

本站為非官方粉絲檔案；不作第三方媒體的公開再散布

---

## 第三方素材與出處

| 素材 | 權利說明 |
| --- | --- |
| 角色、標題、官方圖、音樂 | 權利歸 NTV、VAP、タツノコプロ及相應製作委員會 |
| `public/assets/official/` 官方圖 | 供研究展示下載；公開可取不等於開放再利用授權 |
| 三張重繪稿（v2） | 專案資產，紀錄於 `src/data/recreated.ts`；非官方原圖；不可任意再利用 |
| NOTE 商品攝影 | 使用者提供／重製；出處保留於資料與素材登錄 |
下載供研究展示**不代表**可任意散布。本專案未取得官方素材的開放再利用授權

---

## 連結

| | |
| --- | --- |
| 倉庫 | [gatchaman-crowds-archive](https://github.com/ReiKama414/gatchaman-crowds-archive) |
| 作者 | [ReiKama414](https://github.com/ReiKama414) |
| 作品集 | [個人網站](https://reikama414.vercel.app/) |
| 授權全文 | [LICENSE](./LICENSE) |

---

## License / 權限

Copyright (c) ReiKama414. All rights reserved.

本專案僅供個人瀏覽與學習。未經著作權人書面同意，
不得使用、複製、修改、散布或併入其他專案（含非商業用途）

作者的程式與版面程式碼依 [LICENSE](./LICENSE)。
第三方作品素材仍屬各權利人，**不**因本倉庫而取得任何開放授權

- [GitHub](https://github.com/ReiKama414/gatchaman-crowds-archive)
- [個人網站](https://reikama414.vercel.app/)
- [授權全文](./LICENSE)

---

<sub>GATCHAMAN CROWDS — 數位檔案 · ReiKama414 · All rights reserved</sub>
