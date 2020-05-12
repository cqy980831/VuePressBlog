const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            return moment(timestamp).format('LLLL')
        }
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用哦",
            buttonText: "刷新一下~"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': 'UA-163658482-1'
    },
    '@vuepress/medium-zoom': {
        selector: 'img',
    },
    'vuepress-plugin-auto-sidebar': {
        nav: true
    },
    '@vssue/vuepress-plugin-vssue': {
        platform: 'github-v4',
        owner: 'cqy980831',
        repo: 'VuePressBlog',
        clientId: 'b0e2a5c72199e9894d17',
        clientSecret: '8aa478797bec678ec8b6f23e572e986fad0b4834',
        autoCreateIssue: true
    },
    'go-top': true,
    'ribbon': {
        size: 90,
        opacity: 0.7,
        zIndex: -1
    },
    'cursor-effects': {
        size: 2,
        shape: ['star' | 'circle'],
        zIndex: 999999999
    }
}