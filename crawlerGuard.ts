import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { argv, exit } from 'node:process'
import { fileURLToPath } from 'node:url'

const crawlerToken = '(?:^|[^a-z])bot|[^u]bot|hubot|crawler|spider|scraper|slurp|wget|curl(?:/|[^a-z]|$)|python-requests|python-urllib|aiohttp|scrapy|go-http-client|headless|phantomjs|selenium|puppeteer|playwright|httrack|nutch|heritrix|archiver|semrush|ahrefs|mj12|dataforseo|serpstat|majestic|facebookexternalhit|meta-external|yandex|yeti/|qwantify|teoma|embedly|iframely|feedfetcher|lighthouse|pagespeed|pingdom|sqlmap|nikto|zgrab|masscan|libwww|okhttp|httpx(?:/|[^a-z]|$)|httpunit|httpclient|java/|chatgpt|claude|anthropic|perplexity|cohere|omgili|turnitin|commoncrawl|webzio|img2dataset|node-fetch|undici|axios|colly|guzzle|mechanize|fasthttp|winhttp|slack-imgproxy|skypeuripreview|google-extended|googleother|mediapartners-google|apis-google|duplexweb|google-inspectiontool|google-safety|google-read-aloud|google-cloudvertex|quora link preview|quora-link-preview'

export const crawlerUserAgentSource = `^[\\s\\S]*(?:${crawlerToken})[\\s\\S]*$|^whatsapp/[\\s\\S]*$|^\\s*$`

const crawlerUserAgent = new RegExp(crawlerUserAgentSource, 'i')

export function isCrawlerUserAgent(userAgent: string | null | undefined): boolean {
  return crawlerUserAgent.test(userAgent ?? '')
}

const entry = argv[1]?.replaceAll('\\', '/')
if (entry?.endsWith('/crawlerGuard.ts')) {
  const vercelPath = resolve(dirname(fileURLToPath(import.meta.url)), 'vercel.json')
  const vercel = JSON.parse(readFileSync(vercelPath, 'utf8')) as { routes?: { has?: { value?: { re?: string } }[] }[] }
  const deployed = vercel.routes?.find((route) => route.has?.some((condition) => condition.value?.re === crawlerUserAgentSource))
  const allow = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
    'Mozilla/5.0 (Linux; Android 11; CUBOT NOTE 20 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 DuckDuckGo/7',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36 SE 2.X MetaSr 1.0',
  ]
  const deny = [
    '',
    '   ',
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.69 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    'DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)',
    'Sogou web spider/4.0',
    'Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)',
    'anthropic-ai',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
    'CCBot/2.0 (https://commoncrawl.org/faq/)',
    'Mozilla/5.0 (compatible; Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)',
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'Twitterbot/1.0',
    'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)',
    'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)',
    'TelegramBot (like TwitterBot)',
    'WhatsApp/2.23.20.0 A',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 (Applebot/0.1)',
    'Mozilla/5.0 (compatible; PetalBot;+https://webmaster.petalsearch.com/site/petalbot)',
    'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
    'Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)',
    'wget/1.21.4',
    'curl/8.7.1',
    'python-requests/2.32.3',
    'Scrapy/2.11.2 (+https://scrapy.org)',
    'Go-http-client/1.1',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.69 Safari/537.36',
    'Java/1.8.0_292',
    'axios/1.6.8',
    'ia_archiver (+http://www.alexa.com/site/help/webmasters; crawler@alexa.com)',
    'Yeti/1.1',
    'Hubot',
    'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
  ]
  const failures = [
    ...allow.filter((ua) => isCrawlerUserAgent(ua)).map((ua) => `blocked a browser: ${ua}`),
    ...deny.filter((ua) => !isCrawlerUserAgent(ua)).map((ua) => `allowed a crawler: ${ua || '(empty)'}`),
    ...(deployed ? [] : ['vercel.json crawler pattern is out of sync']),
  ]
  if (failures.length > 0) {
    console.error(failures.join('\n'))
    exit(1)
  }
  console.log(`Crawler guard matched ${deny.length} crawlers and allowed ${allow.length} browsers.`)
}
