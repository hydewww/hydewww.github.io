(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{198:function(t,s,n){"use strict";n.r(s);var a=n(0),p=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_0066-加一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0066-加一","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/plus-one/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0066. 加一"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("给定一个由"),n("strong",[t._v("整数")]),t._v("组成的"),n("strong",[t._v("非空")]),t._v("数组所表示的非负整数，在该数的基础上加一。")]),t._v(" "),n("p",[t._v("最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。")]),t._v(" "),n("p",[t._v("你可以假设除了整数 0 之外，这个整数不会以零开头。")]),t._v(" "),n("p",[n("strong",[t._v("示例 1:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [1,2,3]\n输出: [1,2,4]\n解释: 输入数组表示数字 123。\n")])])]),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [4,3,2,1]\n输出: [4,3,2,2]\n解释: 输入数组表示数字 4321。\n")])])]),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")]),t._v(" >")]),t._v(" "),n("p",[t._v("因为不知道怎么传回 "),n("code",[t._v("slice")]),t._v(" 后改变 "),n("code",[t._v("len")]),t._v(" ，于是另起了个函数曲线救国哈哈哈哈。")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Golang Tip")]),t._v(" "),n("p",[n("code",[t._v("append()")]),t._v(" 第二个参数为 "),n("code",[t._v("slice")]),t._v(" 时，需要用 slice...")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdigits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdigits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not head")]),t._v("\n\t\t\tdigits "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tdigits "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" digits\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plusOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdigits "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" digits\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),n("p",[t._v("暂时先过了，之后再来看，如果有人知道怎么解决的话麻烦联系我。")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plusOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdigits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdigits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("plusOne")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wrong !")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// digits = plusOne(digits[:n-1])")]),t._v("\n\t\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tdigits "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" digits\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Example :")])]),t._v(" "),n("p",[t._v("当位数不需要增多时，可以通过。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Input: \n\t[]int{1, 9}\nOutput:\n  0: [1 9]\n  2: [1 0]\n  0: [1]\n  1: [2]\n  3: [2 0]\n")])])]),n("p",[n("strong",[t._v("Wrong :")])]),t._v(" "),n("p",[t._v("当位数需要增多时，"),n("code",[t._v("digits")]),t._v(" 回传时没有改变内存地址，若使用注释掉的语句则在改变地址的同时改变了 "),n("code",[t._v("len(digits)")]),t._v(" ，无法得到正确的长度。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Input: \n\t[]int{9, 9}\nOutput:\n  0: [9 9]\n  2: [9 0]\n  0: [9]\n  2: [0]\n  4: [1 0]\n  3: [0 0]\nExpected:\n  [1 0 0]\n")])])])])},[],!1,null,null,null);s.default=p.exports}}]);