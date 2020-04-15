const moment = require('moment');
moment.locale('zh-cn');


module.exports = {
    base:'/docs/',
    title: `陈庆宇_Blog`,
    description: `个人博客`,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: '陈庆宇的博客', content: '笔记与技术点总结' }],
        ['meta', { name: 'author', content: '陈庆宇' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('LLLL')
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        nav: [
            { text: '首页', link: '/' },
            { text: 'JavaScript', link: '/about1/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'React', link: '/about/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: '码云', link: 'https://gitee.com/chen_qing_yu' },
        ],
        sidebar: {
            '/vue/': [
                '',     /* /foo/ */
                'vue',  /* /foo/one.html */
                'vue'   /* /foo/two.html */
            ],
            '/js/': [
                '',     /* /foo/ */
                'js',  /* /foo/one.html */
                'js'   /* /foo/two.html */
            ],

        }
    }
}