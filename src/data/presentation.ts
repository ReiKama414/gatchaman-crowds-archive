import type { Fact } from './types'

export const hasPublicValue = (fact: Fact) => fact.verificationStatus !== 'unknown' && !/^(未公開|不明|未知|尚無|未找到|未取得|—)$/.test(fact.value.trim())
export const publicFacts = (facts: Fact[]) => facts.filter(hasPublicValue)
export const publishedText = (text: string) => text.split(/(?<=[。；])/).filter((part) => !/未公開|尚待補證|尚待確認/.test(part)).join('').trim()
