
const headConfi = require('./config/headConfi');
const pluginsConfi = require('./config/pluginsConfi');
// const nav = require('./nav');
const navConfi = require('./config/navConfi');
// const sidebarConfi = require('./config/sidebarConfi');


module.exports = {
    // base:'/VuePressBlog/',
    theme:'reco',
    title: `水星记`,
    // description: `个人博客`,
    head: headConfi,
    plugins: pluginsConfi,
    themeConfig: {
        lastUpdated: '更新时间',
        // nav:nav
        nav: navConfi,
        type: 'blog',
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
    }
}