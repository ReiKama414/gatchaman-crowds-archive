import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { characters, sources } = await server.ssrLoadModule('/src/data/characters.ts')
  const { archiveAssets, getCharacterAssets } = await server.ssrLoadModule('/src/data/assets.ts')
  const { seasons, episodes, music, concepts } = await server.ssrLoadModule('/src/data/series.ts')
  const { publicFacts } = await server.ssrLoadModule('/src/data/presentation.ts')
  const { noteMerch } = await server.ssrLoadModule('/src/data/noteMerch.ts')
  const unique = (records, label) => assert.equal(new Set(records.map((r) => r.id)).size, records.length, `${label}: duplicated IDs`)
  for (const [records, label] of [[characters, 'characters'], [sources, 'sources'], [archiveAssets, 'assets'], [episodes, 'episodes'], [music, 'music'], [concepts, 'concepts']]) unique(records, label)
  let fields = 0
  for (const c of characters) {
    assert.ok(c.name && c.japanese && c.english, `${c.id}: missing name`)
    for (const id of c.sourceIds) assert.ok(sources.some((s) => s.id === id), `${c.id}: missing source ${id}`)
    for (const key of ['facts', 'appearance', 'abilities', 'relationships', 'evolution', 'episodes']) for (const f of c[key]) {
      fields++
      assert.ok(f.label && f.value && f.sourceName && f.sourceType && f.season, `${c.id}: incomplete fact`)
      assert.ok(['confirmed', 'secondary', 'inferred', 'unknown'].includes(f.verificationStatus), `${c.id}: invalid verification status`)
      if (f.verificationStatus !== 'unknown') assert.ok(new URL(f.sourceUrl).protocol === 'https:', `${c.id}: fact without source`)
      for (const alt of f.alternatives ?? []) assert.ok(new URL(alt.sourceUrl), `${c.id}: alternative without URL`)
      for (const target of f.relatedCharacterIds ?? []) assert.ok(characters.some((other) => other.id === target), `${c.id}: broken relation ${target}`)
    }
    for (const key of ['facts', 'appearance', 'abilities', 'relationships', 'evolution', 'episodes']) for (const f of publicFacts(c[key])) assert.ok(f.verificationStatus !== 'unknown' && !f.value.includes('未公開'), `${c.id}: unpublished value leaked into the UI`)
    for (const image of c.images.filter((i) => i.available)) assert.ok(existsSync(resolve('public', `.${image.src}`)), `${c.id}: missing image ${image.src}`)
  }
  for (const a of archiveAssets) {
    const path = resolve('public', `.${a.path}`)
    assert.ok(existsSync(path), `Missing file ${a.path}`)
    assert.ok(readFileSync(path).length > 100, `Empty image ${a.path}`)
    assert.ok(a.dimensions.width > 0 && a.dimensions.height > 0 && a.rights && a.sourcePage && a.sourceUrl && a.downloadStatus === 'downloaded', `Incomplete image metadata: ${a.id}`)
    if (a.kind === 'g-suit') assert.notEqual(a.characterId, 'gelsadra', 'Gelsadra forms must not be mislabelled as G-SUIT')
    if (a.provenance) {
      assert.ok(a.generation?.references.length && a.generation.prompt && a.sourceName.includes('AI'), `Missing derivative provenance: ${a.id}`)
      for (const reference of a.generation.references) assert.ok(existsSync(resolve('public', `.${reference}`)), `Missing image reference: ${reference}`)
      const png = readFileSync(path)
      assert.equal(png.readUInt32BE(16), a.dimensions.width)
      assert.equal(png.readUInt32BE(20), a.dimensions.height)
      if (a.transparent) assert.ok([4, 6].includes(png[25]), `Transparent derivative is missing an alpha channel: ${a.id}`)
    }
  }
  for (const season of seasons) {
    assert.ok(season.titleZh && season.broadcast && season.importantCharacters.length, `S${season.season}: incomplete series metadata`)
    assert.equal(episodes.filter((e) => e.season === season.season && e.kind === 'tv').length, 12, `S${season.season} TV count`)
  }
  assert.equal(episodes.filter((e) => e.kind === 'special').length, 2)
  assert.ok(getCharacterAssets('utsutsu').some((a) => a.season === 1 && a.kind === 'g-suit'))
  assert.ok(getCharacterAssets('utsutsu').some((a) => a.season === 2 && a.kind === 'g-suit'))
  assert.ok(getCharacterAssets('rizum').length > 0, 'Rizumu asset ID mismatch')
  assert.equal(archiveAssets.filter((a) => a.provenance && a.kind === 'character').length, 3, 'Exactly three selected v2 redraws should be displayed')
  assert.ok(archiveAssets.every((a) => !['utsutsu-front-hd', 'hajime-hd', 'tsubasa-hd'].includes(a.id)), 'Rejected first versions must stay out of the archive')
  for (const [owner, color] of Object.entries({ utsutsu: 'YELLOW', paiman: 'PINK', od: 'GREEN', hajime: 'WHITE', sugane: 'GRAY' })) {
    const photo = noteMerch.find((a) => a.characterId === owner)
    assert.ok(photo?.caption.includes(color) && photo.kind === 'merch' && photo.sourcePage.includes('goodsrepublic.com'), `NOTE product reference mismatch: ${owner}`)
  }
  for (const r of [...seasons, ...episodes, ...music, ...concepts]) assert.ok(r.sources?.length && r.sources.every((s) => s.sourceUrl && s.sourceName && s.verificationStatus), `${r.id}: missing citations`)
  console.log(`Verified ${characters.length} characters, ${fields} facts, ${archiveAssets.length} local assets, ${episodes.length} episodes, ${music.length} music records and ${concepts.length} concepts.`)
} finally { await server.close() }
