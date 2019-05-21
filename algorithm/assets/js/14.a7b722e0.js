(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_0038-报数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0038-报数","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/count-and-say/",target:"_blank",rel:"noopener noreferrer"}},[t._v("0038. 报数"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：")]),t._v(" "),t._m(0),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("注意：整数顺序将表示为一个字符串。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("一开始以为只有 1 和 2，结果发现想少了233")]),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("1.     1\n2.     11\n3.     21\n4.     1211\n5.     111221\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("1")]),t._v(" 被读作  "),a("code",[t._v('"one 1"')]),t._v("  ("),a("code",[t._v('"一个一"')]),t._v(") , 即 "),a("code",[t._v("11")]),t._v("。\n"),a("code",[t._v("11")]),t._v(" 被读作 "),a("code",[t._v('"two 1s"')]),t._v(" ("),a("code",[t._v('"两个一"')]),t._v("）, 即 "),a("code",[t._v("21")]),t._v("。\n"),a("code",[t._v("21")]),t._v(" 被读作 "),a("code",[t._v('"one 2"')]),t._v(',  "'),a("code",[t._v('one 1"')]),t._v(" （"),a("code",[t._v('"一个二"')]),t._v(" ,  "),a("code",[t._v('"一个一"')]),t._v(") , 即 "),a("code",[t._v("1211")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("给定一个正整数 "),s("em",[this._v("n")]),this._v("（1 ≤ "),s("em",[this._v("n")]),this._v(" ≤ 30），输出报数序列的第 "),s("em",[this._v("n")]),this._v(" 项。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 1:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('输入: 1\n输出: "1"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例 2:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('输入: 4\n输出: "1211"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[this._v("#")]),this._v(" >")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",{attrs:{start:"6"}},[s("li",[this._v("​\t312211")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countAndSay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 迭代生成str")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新str")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历str")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重复字符计数器")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\ttmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" strconv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重复k次，字符为str[j]")]),t._v("\n\t\t\tj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 略过k个字符，迭代会再+1")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tmp覆盖成为新str")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);