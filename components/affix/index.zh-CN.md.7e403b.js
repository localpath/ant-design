(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/affix/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/affix/index.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/affix/index.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"将页面元素钉在可视范围。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。\"\n    ],\n    [\n      \"p\",\n      \"页面可视范围过小时，慎用此功能以免遮挡页面内容。\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"固钉\",\n    \"type\": \"导航\",\n    \"title\": \"Affix\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg\",\n    \"filename\": \"components/affix/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"成员\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"offsetBottom\"\n          ],\n          [\n            \"td\",\n            \"距离窗口底部达到指定偏移量后触发\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"offsetTop\"\n          ],\n          [\n            \"td\",\n            \"距离窗口顶部达到指定偏移量后触发\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"target\"\n          ],\n          [\n            \"td\",\n            \"设置 \",\n            [\n              \"code\",\n              \"Affix\"\n            ],\n            \" 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数\"\n          ],\n          [\n            \"td\",\n            \"() => HTMLElement\"\n          ],\n          [\n            \"td\",\n            \"() => window\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"固定状态改变时触发的回调函数\"\n          ],\n          [\n            \"td\",\n            \"(affixed?: boolean) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      [\n        \"strong\",\n        \"注意：\"\n      ],\n      [\n        \"code\",\n        \"Affix\"\n      ],\n      \" 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 \",\n      [\n        \"code\",\n        \"Affix\"\n      ],\n      \" 为绝对定位：\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Affix</span> <span class=\\\"token attr-name\\\">style</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">{</span> position<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'absolute'</span><span class=\\\"token punctuation\\\">,</span> top<span class=\\\"token punctuation\\\">:</span> y<span class=\\\"token punctuation\\\">,</span> left<span class=\\\"token punctuation\\\">:</span> x <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">></span></span><span class=\\\"token operator\\\">...</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Affix</span><span class=\\\"token punctuation\\\">></span></span>\"\n      },\n      [\n        \"code\",\n        \"<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>\"\n      ]\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      \"Affix 使用 \",\n      [\n        \"code\",\n        \"target\"\n      ],\n      \" 绑定容器时，元素会跑到容器外。\"\n    ],\n    [\n      \"p\",\n      \"从性能角度考虑，我们只监听容器滚动事件。如果希望任意滚动，你可以在窗体添加滚动监听：\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://codesandbox.io/s/2xyj5zr85p\"\n        },\n        \"https://codesandbox.io/s/2xyj5zr85p\"\n      ]\n    ],\n    [\n      \"p\",\n      \"相关 issue：\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/ant-design/issues/3938\"\n        },\n        \"#3938\"\n      ],\n      \" \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/ant-design/issues/5642\"\n        },\n        \"#5642\"\n      ],\n      \" \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/ant-design/issues/16120\"\n        },\n        \"#16120\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Affix 在水平滚动容器中使用时， 元素 \",\n      [\n        \"code\",\n        \"left\"\n      ],\n      \" 位置不正确。\"\n    ],\n    [\n      \"p\",\n      \"Affix 一般只适用于单向滚动的区域，只支持在垂直滚动容器中使用。如果希望在水平容器中使用，你可以考虑使用 原生 \",\n      [\n        \"code\",\n        \"position: sticky\"\n      ],\n      \" 实现。\"\n    ],\n    [\n      \"p\",\n      \"相关 issue: \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/ant-design/issues/29108\"\n        },\n        \"#29108\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/affix/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);