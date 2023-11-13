import { defineConfig } from 'vitepress'
import SideBarObj from './common/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zane`s Blog",
  description: "A Learning Note Taking Site",
  lang: "zh-CN",
  themeConfig: {
    logo: { src: "/logo.png" },

    //【顶部导航栏配置】 https://vitepress.dev/reference/default-theme-config
    // 顶部导航菜单若有下拉选项，到sidebar配置对于的侧边栏列表
    nav: [
      {
        text: '前端基础', items: [
          {
            text: 'Javascript', link: '/src/fe-base/javascript/'
          },
          {
            text: 'React', link: '/src/fe-base/react/'
          },
          {
            text: 'HTML&CSS', link: '/src/fe-base/html-css/'
          },
          {
            text: '浏览器原理&API', link: '/src/fe-base/broswer/'
          },
          {
            text: 'Typescript', link: '/src/fe-base/typescript/'
          },
          {
            text: 'Vue', link: '/src/fe-base/vue/'
          }
        ]
      },
      {
        text: '前端工程化', items: [
          {
            text: '工程化简介', link: '/src/engineer/'
          }
        ]
      },
      {
        text: '性能优化', items: [
          {
            text: '性能优化简介', link: '/src/optimization/'
          }
        ]
      },
      {
        text: '其他', items: [
          {
            text: '其他模块简介', link: '/src/others/'
          }
        ]
      },
    ],
    // 侧边栏配置
    sidebar: SideBarObj,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chuangzhen' }
    ],
    // 开启全局模糊搜索
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Zane'
    },
  },

  // 源排除 - 排除匹配的md文件
  srcExclude: ['**/README.md', '**/TODO.md'],
  // 输出目录
  outDir: './dist',
  // 配置网站图标
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Zane`s Blog' }],
  ],
  lastUpdated: true,


})
