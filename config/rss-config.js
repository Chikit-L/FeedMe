// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "Journal of Hydrology",
      url: "https://rss.sciencedirect.com/publication/science/00221694",
      category: "科研论文",
    },
    {
      name: "Science",
      url: "https://feeds.science.org/rss/science.xml",
      category: "科研论文",
    },
    [
  {
    "name": "谷歌学术：karst",
    "url": "https://rsshub.rssforever.com/google/scholar/hl=en&as_sdt=0,5&q=karst&scisbd=1",
    "category": "科研论文"
  },
  {
    "name": "Water Research",
    "url": "https://rss.sciencedirect.com/publication/science/00431354",
    "category": "科研论文"
  },
  {
    "name": "Science of The Total Environment",
    "url": "https://rss.sciencedirect.com/publication/science/00489697",
    "category": "科研论文"
  },
  {
    "name": "Nature Ecology & Evolution",
    "url": "https://www.nature.com/natecolevol.rss?error=cookies_not_supported&code=87b092b4-a9c2-4fa2-b31d-9ea1fe569ddf",
    "category": "科研论文"
  },
  {
    "name": "Journal of Geophysical Research: Biogeosciences",
    "url": "https://agupubs.onlinelibrary.wiley.com/action/showFeed?jc=21698961&type=etoc&feed=rss",
    "category": "科研论文"
  },
  {
    "name": "Nature Geoscience",
    "url": "https://www.nature.com/ngeo.rss",
    "category": "科研论文"
  },
  {
    "name": "Applied Geochemistry",
    "url": "https://rss.sciencedirect.com/publication/science/08832927",
    "category": "科研论文"
  },
  {
    "name": "Groundwater",
    "url": "https://ngwa.onlinelibrary.wiley.com/action/showFeed?jc=17456584&type=etoc&feed=rss",
    "category": "科研论文"
  },
  {
    "name": "Hydrogeology Journal",
    "url": "https://link.springer.com/search.rss?query=&search-within=Journal&facet-journal-id=10040&error=cookies_not_supported&code=3d19d4a0-b396-46e8-85dc-a8c87b22fd01",
    "category": "科研论文"
  },
  {
    "name": "Advances in Water Resources",
    "url": "https://rss.sciencedirect.com/publication/science/03091708",
    "category": "科研论文"
  },
  {
    "name": "Groundwater Monitoring & Remediation",
    "url": "https://onlinelibrary.wiley.com/action/showFeed?jc=17456592&type=etoc&feed=rss",
    "category": "科研论文"
  },
  {
    "name": "Wiley: Global Biogeochemical Cycles",
    "url": "https://agupubs.onlinelibrary.wiley.com/feed/19449224/most-recent",
    "category": "科研论文"
  },
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
