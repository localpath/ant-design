(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tabs/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tabs/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tabs/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"Tabs make it easy to switch between different views.\"\n    ],\n    [\n      \"h3\",\n      \"When To Use\"\n    ],\n    [\n      \"p\",\n      \"Ant Design has 3 types of Tabs for different situations.\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Card Tabs: for managing too many closeable views.\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"Normal Tabs: for functional aspects of a page.\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"/components/radio/#components-radio-demo-radiobutton\"\n            },\n            \"Radio.Button\"\n          ],\n          \": for secondary tabs.\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"type\": \"Data Display\",\n    \"title\": \"Tabs\",\n    \"cols\": 1,\n    \"cover\": \"https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg\",\n    \"filename\": \"components/tabs/index.en-US.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Tabs\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ],\n          [\n            \"th\",\n            \"Version\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"activeKey\"\n          ],\n          [\n            \"td\",\n            \"Current TabPane's key\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"addIcon\"\n          ],\n          [\n            \"td\",\n            \"Customize add icon\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.4.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"animated\"\n          ],\n          [\n            \"td\",\n            \"Whether to change tabs with animation. Only works while \",\n            [\n              \"code\",\n              \"tabPosition=\\\"top\\\"\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" { inkBar: boolean, tabPane: boolean }\"\n          ],\n          [\n            \"td\",\n            \"{ inkBar: true, tabPane: false }\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"centered\"\n          ],\n          [\n            \"td\",\n            \"Centers tabs\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\",\n            \"4.4.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultActiveKey\"\n          ],\n          [\n            \"td\",\n            \"Initial active TabPane's key, if \",\n            [\n              \"code\",\n              \"activeKey\"\n            ],\n            \" is not set\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"hideAdd\"\n          ],\n          [\n            \"td\",\n            \"Hide plus icon or not. Only works while \",\n            [\n              \"code\",\n              \"type=\\\"editable-card\\\"\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"moreIcon\"\n          ],\n          [\n            \"td\",\n            \"The custom icon of ellipsis\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"<\",\n            \"EllipsisOutlined />\"\n          ],\n          [\n            \"td\",\n            \"4.14.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"renderTabBar\"\n          ],\n          [\n            \"td\",\n            \"Replace the TabBar\"\n          ],\n          [\n            \"td\",\n            \"(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"Preset tab bar size\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"default\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"default\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tabBarExtraContent\"\n          ],\n          [\n            \"td\",\n            \"Extra content in tab bar\"\n          ],\n          [\n            \"td\",\n            \"ReactNode \",\n            \"|\",\n            \" {left?: ReactNode, right?: ReactNode}\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"object: 4.6.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tabBarGutter\"\n          ],\n          [\n            \"td\",\n            \"The gap between tabs\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tabBarStyle\"\n          ],\n          [\n            \"td\",\n            \"Tab bar style object\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tabPosition\"\n          ],\n          [\n            \"td\",\n            \"Position of tabs\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"right\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"left\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"top\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"destroyInactiveTabPane\"\n          ],\n          [\n            \"td\",\n            \"Whether destroy inactive TabPane when change tab\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"type\"\n          ],\n          [\n            \"td\",\n            \"Basic style of tabs\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"line\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"card\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"editable-card\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"line\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"Callback executed when active tab is changed\"\n          ],\n          [\n            \"td\",\n            \"function(activeKey) {}\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onEdit\"\n          ],\n          [\n            \"td\",\n            \"Callback executed when tab is added or removed. Only works while \",\n            [\n              \"code\",\n              \"type=\\\"editable-card\\\"\"\n            ]\n          ],\n          [\n            \"td\",\n            \"(targetKey, action) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onTabClick\"\n          ],\n          [\n            \"td\",\n            \"Callback executed when tab is clicked\"\n          ],\n          [\n            \"td\",\n            \"function(key: string, event: MouseEvent)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onTabScroll\"\n          ],\n          [\n            \"td\",\n            \"Trigger when tab scroll\"\n          ],\n          [\n            \"td\",\n            \"function({ direction: \",\n            [\n              \"code\",\n              \"left\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"right\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"top\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"bottom\"\n            ],\n            \" })\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.3.0\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"More option at \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/react-component/tabs#tabs\"\n        },\n        \"rc-tabs option\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"Tabs.TabPane\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"Property\"\n          ],\n          [\n            \"th\",\n            \"Description\"\n          ],\n          [\n            \"th\",\n            \"Type\"\n          ],\n          [\n            \"th\",\n            \"Default\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"closeIcon\"\n          ],\n          [\n            \"td\",\n            \"Customize close icon in TabPane's head. Only works while \",\n            [\n              \"code\",\n              \"type=\\\"editable-card\\\"\"\n            ]\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"forceRender\"\n          ],\n          [\n            \"td\",\n            \"Forced render of content in tabs, not lazy render after clicking on tabs\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"key\"\n          ],\n          [\n            \"td\",\n            \"TabPane's key\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tab\"\n          ],\n          [\n            \"td\",\n            \"Show text in TabPane's head\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"p\",\n      \"More option at \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/react-component/tabs#tabpane\"\n        },\n        \"rc-tabs option\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/tabs/index.en-US.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);