import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: "zh-CN",
  themeConfig: {
  

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '前端基础', items: [
          {
            text: 'Javascript', link: '/fe-base/javascript/'
          },
          {
            text: 'HTML&CSS', link: '/fe-base/html-css/'
          },
          {
            text: '浏览器原理&API', link: '/fe-base/broswer/'
          },
          {
            text: 'React', link: '/fe-base/react/'
          },
          {
            text: 'Vue', link: '/fe-base/vue/'
          }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: 'Markdown Examples2', link: '/markdown-examples2' }
          ]
        }],
      // javascript
      '/fe-base/javascript/': [{
        text: '简介',
        link: '/fe-base/javascript/'
      },
      {
        text: '运行时',
        items: [
          { text: 'JS', link: '/fe-base/javascript/runtime' },
        ]
      },
      {
        text: '文法',
        items: [
          { text: '文法1', link: '/fe-base/javascript/grammer' },
        ]
      },
      {
        text: '语义',
        items: [
          { text: '语义1', link: '/fe-base/javascript/semantics' },
        ]
      }],
      // html&css
      '/fe-base/html-css/': [{
        text: 'HTML',
        items: [
          { text: 'html1', link: '/fe-base/html-css/html1' },
          { text: 'html2', link: '/fe-base/html-css/html2' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: 'css1', link: '/fe-base/html-css/css1' },
          { text: 'css2', link: '/fe-base/html-css/css2' },
        ]
      }],
      // ... 其他模块写的时候补充侧边栏配置
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chuangzhen' }
    ],
    // 开启全局模糊搜索
    search: {
      provider: 'local'
    }
  },
  // 存储md文件的目录
  srcDir: './src',
  // 源排除 - 排除匹配的md文件
  srcExclude: ['**/README.md', '**/TODO.md'],
  // 输出目录
  outDir: './dist',
  // 配置网站图标
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true
})
