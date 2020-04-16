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
    'vuepress-plugin-auto-sidebar':{
        nav:true
    }
}