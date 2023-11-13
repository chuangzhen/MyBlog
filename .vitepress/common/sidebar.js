export default {
    '/src/': [
        {
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/src/markdown-examples' },
                { text: 'Runtime API Examples', link: '/src/api-examples' },
                { text: 'Markdown Examples2', link: '/src/markdown-examples2' }
            ]
        }],
    // javascript
    '/src/fe-base/javascript/': {
        base: '/src/fe-base/javascript/',
        items: [{
            text: 'JS相关',
            link: '/'
        },
        {
            text: '运行时',
            collapsed: false,
            items: [
                { text: 'JS', link: 'runtime' },
            ]
        },
        {
            text: '文法',
            collapsed: false,
            items: [
                { text: '文法1', link: 'grammar' },
            ]
        },
        {
            text: '语义',
            collapsed: false,
            items: [
                { text: '语义1', link: 'semantics' },
            ]
        }],
    },


    // html&css
    '/src/fe-base/html-css/': {
        base: '/src/fe-base/html-css/',
        items: [{
            text: 'HTML相关',
            collapsed: false,
            items: [
                { text: 'html1', link: 'html1' },
                { text: 'html2', link: 'html2' },
            ]
        },
        {
            text: 'CSS相关',
            collapsed: false,
            items: [
                { text: 'css1', link: 'css1' },
                { text: 'css2', link: 'css2' },
            ]
        }],
    },
    // react
    '/src/fe-base/react/': {
        base: '/src/fe-base/react/',
        items: [
            {
                text: 'react相关',
                link: '/'
            }
        ],
    },
    // broswer
    '/src/fe-base/broswer/': {
        base: '/src/fe-base/broswer/',
        items: [
            {
                text: '浏览器原理API相关',
                link: '/'
            }
        ],
    },

    // typescript
    '/src/fe-base/typescript/': {
        base: '/src/fe-base/typescript/',
        items: [
            {
                text: 'TS相关',
                link: '/'
            }
        ],
    },

    // vue
    '/src/fe-base/vue/': {
        base: '/src/fe-base/vue/',
        items: [
            {
                text: 'Vue相关',
                link: '/'
            }
        ],
    },
    // 工程化相关
    '/src/engineer/': {
        base: '/src/engineer/',
        items: [
            {
                text: '工程化简介', link: '/'
            }
        ],
    },
    // 性能优化相关
    '/src/optimization/': {
        base: '/src/optimization/',
        items: [
            {
                text: '性能优化简介', link: '/'
            }
        ],
    },
    // 其他模块相关
    '/src/others/': {
        base: '/src/others/',
        items: [
            {
                text: '其他模块简介', link: '/'
            }
        ],
    },

    // ... 其他模块写的时候补充侧边栏配置
}