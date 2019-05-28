(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{203:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0121-买卖股票的最佳时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0121-买卖股票的最佳时机","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0121. 买卖股票的最佳时机"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("给定一个数组，它的第 "),a("em",[t._v("i")]),t._v(" 个元素是一支给定股票第 "),a("em",[t._v("i")]),t._v(" 天的价格。")]),t._v(" "),a("p",[t._v("如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。")]),t._v(" "),a("p",[t._v("注意你不能在买入股票前卖出股票。")]),t._v(" "),a("p",[a("strong",[t._v("示例 1:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: [7,1,5,3,6,4]\n输出: 5\n解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。\n")])])]),a("p",[a("strong",[t._v("示例 2:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: [7,6,4,3,1]\n输出: 0\n解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。\n")])])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")]),t._v(" >")]),t._v(" "),a("p",[t._v("动态规划，较 "),a("router-link",{attrs:{to:"/0053.html"}},[t._v("0053.最大子序和")]),t._v(" 好理解一点。")],1),t._v(" "),a("p",[t._v("在"),a("strong",[t._v("当前")]),t._v("最小的数 "),a("code",[t._v("min")]),t._v(" 后找到最大的数 "),a("code",[t._v("max")]),t._v(" ，若此组合的差值 "),a("code",[t._v("max-min")]),t._v(" 大于之前最大的差值 "),a("code",[t._v("result")]),t._v(" ，则更新 "),a("code",[t._v("result")]),t._v(" ；若此后有更小的数，则重置 "),a("code",[t._v("min")]),t._v(" 和 "),a("code",[t._v("max")]),t._v(" 继续寻找。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxProfit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tmax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" min\n\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" prices "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" price "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price\n\t\t\tmax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" price "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tmax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" price\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" min\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);