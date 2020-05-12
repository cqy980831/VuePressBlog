(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{367:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[t._v("#")]),t._v(" 一、说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),s("p",[t._v("SPA仅在Web页面初始化加载响应的HTML、JS和CSS。一旦页面加载完成，SPA不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现HTML内容的变换，避免页面的重新加载。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("用户体验好、快，内容改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染。")]),t._v(" "),s("li",[t._v("对服务器压力小。")]),t._v(" "),s("li",[t._v("前后端职责分离，架构清晰。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[t._v("初次加载耗时多：需要在加载页面时将JS、CSS统一加载，部分页面按需加载。")]),t._v(" "),s("li",[t._v("前进后退路由管理")]),t._v(" "),s("li",[t._v("SEO难度大")])]),t._v(" "),s("h2",{attrs:{id:"二、v-show与v-if有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、v-show与v-if有什么区别？"}},[t._v("#")]),t._v(" 二、v-show与v-if有什么区别？")]),t._v(" "),s("p",[t._v("v-show 不管条件是什么，内容总是会被渲染，只是简单基于CSS的”display“属性的进行切换。\nv-if  是真正的条件渲染，在组件的创建建和销毁之间切换。\n如果不需要频繁切换条件用v-if，需要频繁切换条件的场景使用v-show。")]),t._v(" "),s("h2",{attrs:{id:"三、class和style如何动态绑定？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、class和style如何动态绑定？"}},[t._v("#")]),t._v(" 三、Class和Style如何动态绑定？")]),t._v(" "),s("p",[t._v("Class可以通过对象语法和数组语法进行动态绑定：")]),t._v(" "),s("ul",[s("li",[t._v("对象语法："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ active: isActive, 'text-danger': hasError }\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isActive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hasError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("数组语法："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[isActive ? activeClass : '', errorClass]\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" activeClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("danger’ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("Style 也可以通过对象语法和数组语法进行动态绑定：")]),t._v(" "),s("ul",[s("li",[t._v("对象语法："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ color: activeColor, fontSize: fontSize + 'px' }\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" activeColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("数组语法："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[styleColor, styleSize]"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" styleColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" styleSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'23px'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"四、怎样理解vue的单项数据流？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、怎样理解vue的单项数据流？"}},[t._v("#")]),t._v(" 四、怎样理解Vue的单项数据流？")]),t._v(" "),s("p",[t._v("所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。\n额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。")]),t._v(" "),s("h2",{attrs:{id:"五、computed和watch的区别和运用场景？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、computed和watch的区别和运用场景？"}},[t._v("#")]),t._v(" 五、computed和watch的区别和运用场景？")]),t._v(" "),s("p",[t._v("computed：是计算属性，依赖它的属性值，并且computed的值有缓存，只有它依赖的属性值发生改变，下一次获取computed的值时才会重新计算computed的值；\nwatch：更多的是观察作用，类似于某些数据监听回调，每当监听的数据变化时都会执行回调进行后操作（watch只能监听值类型，如果需要监听引用数据类型，需要设置deep属性为true，而且不能获取oldValue值）")]),t._v(" "),s("h2",{attrs:{id:"六、直接给一个数组赋值，vue能检测到变化吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、直接给一个数组赋值，vue能检测到变化吗？"}},[t._v("#")]),t._v(" 六、直接给一个数组赋值，Vue能检测到变化吗？")]),t._v(" "),s("p",[t._v("vue实例创建之后添加新的属性到实例上，它不会触发视图更新\n当生成vue实例后，当再次给数据赋值时，有时候并不会自动更新到视图上去；\n子组件的props数据不能与父组件传递的值实时保持一致。")]),t._v(" "),s("blockquote",[s("p",[t._v("可以使用$set方法")])]),t._v(" "),s("h2",{attrs:{id:"七、谈谈你对vue生命周期的理解？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、谈谈你对vue生命周期的理解？"}},[t._v("#")]),t._v(" 七、谈谈你对Vue生命周期的理解？")]),t._v(" "),s("p",[t._v("Vue实例有一个完整的生命周期，是从开始创建、初始化数据、编译模板、挂载Dom 渲染 更新 渲染 卸载等一系列过程，我们称是Vue的生命周期。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("生命周期")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("beforeCreate")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),s("tr",[s("td",[t._v("created")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用")])]),t._v(" "),s("tr",[s("td",[t._v("beforeMount")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),s("tr",[s("td",[t._v("mounted")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),s("tr",[s("td",[t._v("beforeUpdate")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),s("tr",[s("td",[t._v("update")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件数据更新之后")])]),t._v(" "),s("tr",[s("td",[t._v("beforeDestory")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件销毁前调用")])]),t._v(" "),s("tr",[s("td",[t._v("destoryed")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("组件销毁后调用")])]),t._v(" "),s("tr",[s("td",[t._v("activited")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("keep-alive 专属，组件被激活时调用")])]),t._v(" "),s("tr",[s("td",[t._v("deactivated")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("keep-alive 专属，组件被销毁时调用")])])])]),t._v(" "),s("h2",{attrs:{id:"八、vue的父组件和子组件生命周期钩子函数执行顺序？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、vue的父组件和子组件生命周期钩子函数执行顺序？"}},[t._v("#")]),t._v(" 八、Vue的父组件和子组件生命周期钩子函数执行顺序？")]),t._v(" "),s("p",[t._v("Vue的父组件和子组件生命周期钩子函数执行顺序可以归类以下4部分：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("加载渲染过程\n父beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子mounted -> 父 mounted")])]),t._v(" "),s("li",[s("p",[t._v("子组件更新过程\n父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated")])]),t._v(" "),s("li",[s("p",[t._v("父组件更新过程\n父 beforeUpdate -> 父 updated")])]),t._v(" "),s("li",[s("p",[t._v("销毁过程\n父 beforeDestory -> 子 beforeDestory -> 子 destroyed -> 父 destoryed")])])]),t._v(" "),s("h2",{attrs:{id:"九、在哪个生命周期内调用异步请求？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、在哪个生命周期内调用异步请求？"}},[t._v("#")]),t._v(" 九、在哪个生命周期内调用异步请求？")]),t._v(" "),s("p",[t._v("可以在钩子函数created、beforeMount、mounted中调用，因为在这三个钩子函数中，data已经创建，可以将服务端返回来的数据进行赋值。但更推荐在created中调用异步请求。 有以下优点：\n能更快获取到服务端数据，减少页面加载时间\nssr不支持beforeMount、mounted钩子函数，所以放在created中有助于一致性；")]),t._v(" "),s("h2",{attrs:{id:"十、在什么阶段才能访问操作dom？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十、在什么阶段才能访问操作dom？"}},[t._v("#")]),t._v(" 十、在什么阶段才能访问操作DOM？")]),t._v(" "),s("p",[t._v("在钩子函数mounted被调用前，Vue已经将模板挂载到页面上了，所以在mounted中可以访问操作DOM。")]),t._v(" "),s("h2",{attrs:{id:"十一、父组件可以监听到子组件的生命周期吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十一、父组件可以监听到子组件的生命周期吗？"}},[t._v("#")]),t._v(" 十一、父组件可以监听到子组件的生命周期吗？")]),t._v(" "),s("p",[t._v("比如有父组件Parent和子组件Child，如果父组件监听到子组件挂载mounted就做些逻辑处理，可以通过以下写法实现:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @mounted"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“doSomething” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“mounted”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("以上需要手动通过$emit触发父组件的事件，更简单的方式可以在父组件引用子组件时通过@hook来监听，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @hook"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("mounted"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“doSomething”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Child"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘父组件监听到mounted函数’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nChild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘子组件触发mounted函数’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("@hook也可以监听其他生命周期事件。")]),t._v(" "),s("h2",{attrs:{id:"十二、谈谈你对keep-alive-的了解？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十二、谈谈你对keep-alive-的了解？"}},[t._v("#")]),t._v(" 十二、谈谈你对keep-alive 的了解？")]),t._v(" "),s("p",[t._v("keep-alive是vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染。")]),t._v(" "),s("ul",[s("li",[t._v("一般结合路由和动态组件一起使用，用于缓存组件；")]),t._v(" "),s("li",[t._v("提供include和exclude属性，两者都支持字符串或正则表达式，include表示只有名称匹配的组件会被缓存，exclude表示任何名称匹配的组件都不会被缓存，其中exclude的优先级比includ高；")]),t._v(" "),s("li",[t._v("对应两个钩子函数activated和deactivated，当组件被激活时，触发钩子函数activated，当组件被移除时，触发钩子函数deactivated。")])]),t._v(" "),s("h2",{attrs:{id:"十三、组件中data为什么是一个函数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十三、组件中data为什么是一个函数？"}},[t._v("#")]),t._v(" 十三、组件中data为什么是一个函数？")]),t._v(" "),s("p",[t._v("为什么组件中的data必须是个函数，然后return一个对象，而new Vue实例，data可以是个对象？\n因为组件是用来复用的，JS里的对象引用关系，如果组件中的data是一个对象，那么这样作用域没有隔离，子组件中的data属性值会互相影响，如果组件中的data是个函数，那么每个实例是独立的，组件实例之间互不影响。而new Vue实例是不会被复用的，因此不存在引用对象的问题。")]),t._v(" "),s("h2",{attrs:{id:"十四、v-model-的原理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十四、v-model-的原理？"}},[t._v("#")]),t._v(" 十四、v-model 的原理？")]),t._v(" "),s("p",[t._v("原理：Object.defineProperty 中的get 和 set 方法")]),t._v(" "),s("p",[t._v("getter和setter访问器\n作用：指定读取或设置对象属性值的时候，执行的操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ‘msg’ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“text”  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“text” "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("“sp”"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("’txt’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'sp’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给对象添加msg属性，并设置setter访问器")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ’msg’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置obj.msg, 当obj.msg发生改变时set方法将会被调用")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当obj.msg 被赋值时 同时设置给input / span")]),t._v("\n        txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n        sp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听文本框的改变，当文本输入内容时 改变obj.msg")]),t._v("\ntxt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘keyup’"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"十五、vue组件间的通信有哪几种方式？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十五、vue组件间的通信有哪几种方式？"}},[t._v("#")]),t._v(" 十五、Vue组件间的通信有哪几种方式？")]),t._v(" "),s("p",[t._v("Vue组件间通信主要指3类通信：父子、隔代、兄弟。")]),t._v(" "),s("ol",[s("li",[t._v("props / $emit 适用父子")]),t._v(" "),s("li",[t._v("ref / $parent / $children 适用父子")]),t._v(" "),s("li",[t._v("EventBus （$emit / $on）适用于父子、隔代、兄弟")]),t._v(" "),s("li",[t._v("$attrs / $listeners 适用于隔代")]),t._v(" "),s("li",[t._v("provide / inject 适用于隔代")]),t._v(" "),s("li",[t._v("Vuex 适用于父子、隔代、兄弟")])]),t._v(" "),s("h2",{attrs:{id:"十六、vuex是什么？怎么使用？哪种功能场景使用它？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十六、vuex是什么？怎么使用？哪种功能场景使用它？"}},[t._v("#")]),t._v(" 十六、vuex是什么？怎么使用？哪种功能场景使用它？")]),t._v(" "),s("p",[t._v("vuex是一个专门为vue构建的状态集管理\n主要是为了解决组件间状态共享问题，强调的是集中式管理\n说白了就是便于维护，便于解耦，不是所有项目都适合使用vuex")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("vuex的核心：state、mutations、getters、actions、modules五大模块")])]),t._v(" "),s("h2",{attrs:{id:"十七、导航钩子有哪些？它们有哪些参数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十七、导航钩子有哪些？它们有哪些参数？"}},[t._v("#")]),t._v(" 十七、导航钩子有哪些？它们有哪些参数？")]),t._v(" "),s("p",[t._v("导航钩子翻译过来就是路由的生命周期（"),s("code",[t._v("vue-router")]),t._v("）\n主要分为两种 全局和局部\n全局的钩子函数\n"),s("code",[t._v("beforeEach")]),t._v("：在路由开始切换时调用\n用法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to，"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("，next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nto "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 即将进入的目标对象\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 当前导航要离开的导航对象\nnext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 是一个函数 调用resolve，执行下一步\nafterEach：在路由切换离开时调用\n局部到单个路由\nbeforeEnter\n组件的钩子函数\nbeforeRouterEnter\nbeforeRouterUpdate\nbeforeRouterLeave\n")])])]),s("h2",{attrs:{id:"十八、异步dom更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十八、异步dom更新"}},[t._v("#")]),t._v(" 十八、异步DOM更新")]),t._v(" "),s("p",[t._v("说明：vue异步执行DOM更新，监视所有数据改变，一次性更新DOM\n优势：可以去除重复数据，对于避免不必要的计算和避免重复DOM操作上，非常重要\n如果需要拿到更新后dom中的数据则需要通过 "),s("code",[t._v("Vue.$nextTick(callback)")]),t._v(" : 在DOM更新后，执行某个操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ‘change’\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"十九、vue-loader解释一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十九、vue-loader解释一下"}},[t._v("#")]),t._v(" 十九、vue-loader解释一下")]),t._v(" "),s("p",[t._v("vue-loader 就是一个加载器，能把.vue组件转化为js模块\n为什么要转译这个vue组件？\n可以动态渲染一些数据\n对三个标签做了优化 script中可以直接使用es6  style  也默认可以使用sass，并且还提供了作用域的选择\n还提供热加载")]),t._v(" "),s("h2",{attrs:{id:"二十、用过插槽吗？用的是具名插槽还是匿名插槽？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十、用过插槽吗？用的是具名插槽还是匿名插槽？"}},[t._v("#")]),t._v(" 二十、用过插槽吗？用的是具名插槽还是匿名插槽？")]),t._v(" "),s("p",[t._v("slot插槽说白了就是个占位的东西\nvue中插槽分为三种：默认插槽（匿名插槽）、 具名插槽和作用于插槽")]),t._v(" "),s("h2",{attrs:{id:"二十一、说说你对虚拟dom-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十一、说说你对虚拟dom-的理解"}},[t._v("#")]),t._v(" 二十一、说说你对虚拟DOM 的理解")]),t._v(" "),s("p",[t._v("什么是虚拟DOM？（真实的dom是dom树   虚拟dom是js对象）\n说白了就是以js对象形式去添加dom元素 本质上优化了diff算法，采用了新旧dom对比，获取差异然后一次性更新到真实dom上")]),t._v(" "),s("h2",{attrs:{id:"二十二、pre-和cloak-指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十二、pre-和cloak-指令"}},[t._v("#")]),t._v(" 二十二、pre 和cloak 指令")]),t._v(" "),s("p",[t._v("提升性能：v-pre")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("说明：vue会跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译")])]),t._v(" "),s("p",[t._v("v-cloak 防止页面加载时出现 vue.js 的变量名")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("一般情况下面，要把这个放在页面下面加载防止页面加载慢，但是上面的{{message可能显示出来不好看，所有在上面的p标签加入v-cloak表示页面加载完成再显示 "),s("code",[t._v("[v-cloak] { display: none; }")])])]),t._v(" "),s("h2",{attrs:{id:"二十三、什么是-mixin？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十三、什么是-mixin？"}},[t._v("#")]),t._v(" 二十三、什么是 mixin？")]),t._v(" "),s("p",[t._v("Mixins 使我们能够为 Vue 组件编写可插拔和可重用的功能。如果你希望在多个组件之间重用一组组件选项，例如生命周期 hook、方法等，则可以将其编写为 mixin，并在组件中简单地引用它。然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，那么它在执行时将优先于组件自己的 hook")]),t._v(" "),s("h2",{attrs:{id:"二十四、key的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十四、key的作用"}},[t._v("#")]),t._v(" 二十四、key的作用")]),t._v(" "),s("p",[t._v("当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。 key的作用主要是为了高效的更新虚拟DOM。")]),t._v(" "),s("h2",{attrs:{id:"二十五、怎么定义-vue-router-的动态路由-怎么获取传过来的值？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十五、怎么定义-vue-router-的动态路由-怎么获取传过来的值？"}},[t._v("#")]),t._v(" 二十五、怎么定义 vue-router 的动态路由? 怎么获取传过来的值？")]),t._v(" "),s("p",[t._v("在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。")]),t._v(" "),s("h2",{attrs:{id:"二十六、路由懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十六、路由懒加载"}},[t._v("#")]),t._v(" 二十六、路由懒加载")]),t._v(" "),s("p",[t._v("使用了路由懒加载，打包会后的js文件是一个一个的。")]),t._v(" "),s("h2",{attrs:{id:"二十七、为何vue中采用异步更新？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十七、为何vue中采用异步更新？"}},[t._v("#")]),t._v(" 二十七、为何Vue中采用异步更新？")]),t._v(" "),s("p",[t._v("首先我们要知道vue是组件级更新，如果不采用异步更新的话，每一次数据更新都会对当前组件重新渲染，所以为了性能考虑，Vue会在本轮数据更新后，再去更新异步视图。")]),t._v(" "),s("h2",{attrs:{id:"二十八、vue中是如何检测数组变化？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十八、vue中是如何检测数组变化？"}},[t._v("#")]),t._v(" 二十八、Vue中是如何检测数组变化？")]),t._v(" "),s("ol",[s("li",[t._v("改变数组的原型指向")]),t._v(" "),s("li",[t._v("监测数组中每一项")])]),t._v(" "),s("h2",{attrs:{id:"二十九、nexttick实现原理？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二十九、nexttick实现原理？"}},[t._v("#")]),t._v(" 二十九、nextTick实现原理？")]),t._v(" "),s("p",[t._v("nextTick方法主要用的是宏任务和微任务，定义一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空队列，所以这个nextTick 就是异步方法")]),t._v(" "),s("h2",{attrs:{id:"三十、vue中computed特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三十、vue中computed特点"}},[t._v("#")]),t._v(" 三十、Vue中computed特点")]),t._v(" "),s("p",[t._v("默认computed也是一个watcher具备缓存的，只要当依赖的属性发生变化时才会更新视图")]),t._v(" "),s("h2",{attrs:{id:"三十一、解释一下编译过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三十一、解释一下编译过程"}},[t._v("#")]),t._v(" 三十一、解释一下编译过程")]),t._v(" "),s("p",[t._v("Vue会通过编译器将模板通过几个阶段最终编译为render函数，然后将render函数生成虚拟DOM最终映射成真是DOM\n分为三个阶段")]),t._v(" "),s("ol",[s("li",[t._v("将模板解析为AST")]),t._v(" "),s("li",[t._v("优化AST")]),t._v(" "),s("li",[t._v("将AST转换为render函数")])])])}),[],!1,null,null,null);a.default=n.exports}}]);