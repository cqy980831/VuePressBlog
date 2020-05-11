
const headConfi = require('./config/headConfi');
const pluginsConfi = require('./config/pluginsConfi');
// const nav = require('./nav');
const navConfi = require('./config/navConfi');
// const sidebarConfi = require('./config/sidebarConfi');


module.exports = {
    // base:'/VuePressBlog/',
    theme: 'reco',
    title: `水星记`,
    // description: `个人博客`,
    head: headConfi,
    plugins: pluginsConfi,
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        },
        '/en/': {
            lang: 'en-US'
        }
    },
    themeConfig: {
        lastUpdated: '更新时间',
        // nav:nav
        nav: navConfi,
        // type: 'blog',
        authorAvatar: 'https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/0072bjDtly8gdr2rmhov6j30u00u0418.jpg?KID=imgbed,tva&Expires=1586949398&ssig=rjthBBRT6R',
        huawei: true,
        author: '陈庆宇',
        friendLink: [
            {
                title: 'kea',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'cqy980831@sina.com',
                //   link: 'https://www.recoluan.com'
            },
        ]
    },
    plugins: [
        [
            "ribbon",
            {
                size: 90,     // width of the ribbon, default: 90
                opacity: 0.8, // opacity of the ribbon, default: 0.3
                zIndex: -1    // z-index property of the background, default: -1
            },
            "cursor-effects",
            {
                size: 2,                    // size of the particle, default: 2
                shape: ['star' | 'circle'],  // shape of the particle, default: 'star'
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        ]
    ]
}