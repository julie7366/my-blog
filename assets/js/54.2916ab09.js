(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{550:function(t,s,e){"use strict";e.r(s);var a=e(16),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("主系统传递的公用方法都在 "),e("strong",[t._v("主系统的"),e("code",[t._v("utils/publicMethods.js")]),t._v("中")]),t._v(" ，后续如果还要添加直接在export中加就行。\n"),e("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220210223162008.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("在子系统中，公用方法在 "),e("code",[t._v("main.js")]),t._v("中接收：\n"),e("img",{attrs:{src:"https://cdn.JsDelivr.net/gh/Ostask/img-bed//20210220210223162514.png",alt:""}}),t._v("\n所以子系统中使用主系统传递方法的方式为：")])])]),t._v(" "),e("ol",[e("li",[t._v("引入"),e("code",[t._v("util")])])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("util"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/utils/common.js"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("2.使用公共方法")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("util"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"公用方法表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公用方法表"}},[t._v("#")]),t._v(" 公用方法表")]),t._v(" "),e("h3",{attrs:{id:"gettoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gettoken"}},[t._v("#")]),t._v(" getToken()")]),t._v(" "),e("p",[t._v("获取token")]),t._v(" "),e("h3",{attrs:{id:"settoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settoken"}},[t._v("#")]),t._v(" setToken()")]),t._v(" "),e("p",[t._v("设置token")]),t._v(" "),e("h3",{attrs:{id:"removetoken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removetoken"}},[t._v("#")]),t._v(" removeToken()")]),t._v(" "),e("p",[t._v("清空token")]),t._v(" "),e("h3",{attrs:{id:"getuser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getuser"}},[t._v("#")]),t._v(" getUser()")]),t._v(" "),e("p",[t._v("获取用户数据")]),t._v(" "),e("h3",{attrs:{id:"gettheme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gettheme"}},[t._v("#")]),t._v(" getTheme()")]),t._v(" "),e("p",[t._v("获取主题")]),t._v(" "),e("h3",{attrs:{id:"settheme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settheme"}},[t._v("#")]),t._v(" setTheme()")]),t._v(" "),e("p",[t._v("设置主题")]),t._v(" "),e("h3",{attrs:{id:"senduserinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#senduserinfo"}},[t._v("#")]),t._v(" sendUserInfo()")]),t._v(" "),e("p",[t._v("向各个系统发送用户信息")]),t._v(" "),e("h3",{attrs:{id:"watchuserinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watchuserinfo"}},[t._v("#")]),t._v(" watchUserInfo()")]),t._v(" "),e("p",[t._v("监听各个系统发送来的用户信息")]),t._v(" "),e("h3",{attrs:{id:"sendprojectinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sendprojectinfo"}},[t._v("#")]),t._v(" sendProjectInfo()")]),t._v(" "),e("p",[t._v("向各个系统发送项目信息")]),t._v(" "),e("h3",{attrs:{id:"watchprojectinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watchprojectinfo"}},[t._v("#")]),t._v(" watchProjectInfo()")]),t._v(" "),e("p",[t._v("监听各个系统发送来的项目信息")])])}),[],!1,null,null,null);s.default=r.exports}}]);