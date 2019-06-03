(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{221:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0028-实现strstr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0028-实现strstr","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/implement-strstr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0028. 实现strStr()"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("实现 "),s("a",{attrs:{href:"https://baike.baidu.com/item/strstr/811469",target:"_blank",rel:"noopener noreferrer"}},[t._v("strStr()"),s("OutboundLink")],1),t._v(" 函数。")]),t._v(" "),s("p",[t._v("给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  "),s("strong",[t._v("-1")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入: haystack = "hello", needle = "ll"\n输出: 2\n')])])]),s("p",[s("strong",[t._v("示例 2:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入: haystack = "aaaaa", needle = "bba"\n输出: -1\n')])])]),s("p",[s("strong",[t._v("说明:")])]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("needle")]),t._v(" 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。")]),t._v(" "),s("p",[t._v("对于本题而言，当 "),s("code",[t._v("needle")]),t._v(" 是空字符串时我们应当返回 0 。这与C语言的 "),s("a",{attrs:{href:"https://baike.baidu.com/item/strstr/811469",target:"_blank",rel:"noopener noreferrer"}},[t._v("strstr()"),s("OutboundLink")],1),t._v(" 以及 Java的 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)",target:"_blank",rel:"noopener noreferrer"}},[t._v("indexOf()"),s("OutboundLink")],1),t._v(" 定义相符。")]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")]),t._v(" >")]),t._v(" "),s("p",[t._v("用切片循环比较字符串")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("haystack "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" needle "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("needle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("haystack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" haystack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" needle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);