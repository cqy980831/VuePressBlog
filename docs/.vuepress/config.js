
const headConfi = require('./config/headConfi');
const pluginsConfi = require('./config/pluginsConfi');
// const nav = require('./nav');
const navConfi = require('./config/navConfi');
// const sidebarConfi = require('./config/sidebarConfi');


module.exports = {
    // base:'/VuePressBlog/',
    title: `水星记`,
    description: `个人博客`,
    head: headConfi,
    plugins: pluginsConfi,
    themeConfig: {
        lastUpdated: '更新时间',
        // nav:nav
        nav: navConfi
    }
}