(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tree-select/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/index.zh-CN.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/index.zh-CN.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"树型选择控件。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。\"\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"树选择\",\n    \"type\": \"数据录入\",\n    \"title\": \"TreeSelect\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg\",\n    \"filename\": \"components/tree-select/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"h3\",\n      \"Tree props\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"allowClear\"\n          ],\n          [\n            \"td\",\n            \"显示清除按钮\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"autoClearSearchValue\"\n          ],\n          [\n            \"td\",\n            \"当多选模式下值被选择，自动清空搜索框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"bordered\"\n          ],\n          [\n            \"td\",\n            \"是否显示边框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultValue\"\n          ],\n          [\n            \"td\",\n            \"指定默认选中的条目\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownClassName\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单的 className 属性\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownMatchSelectWidth\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单和选择器同宽。默认将设置 \",\n            [\n              \"code\",\n              \"min-width\"\n            ],\n            \"，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" number\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownRender\"\n          ],\n          [\n            \"td\",\n            \"自定义下拉框内容\"\n          ],\n          [\n            \"td\",\n            \"(originNode: ReactNode, props) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"dropdownStyle\"\n          ],\n          [\n            \"td\",\n            \"下拉菜单的样式\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"fieldNames\"\n          ],\n          [\n            \"td\",\n            \"自定义节点 label、key、children 的字段\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"{ label: \",\n            [\n              \"code\",\n              \"label\"\n            ],\n            \", key: \",\n            [\n              \"code\",\n              \"key\"\n            ],\n            \", children: \",\n            [\n              \"code\",\n              \"children\"\n            ],\n            \" }\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"filterTreeNode\"\n          ],\n          [\n            \"td\",\n            \"是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值)\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"getPopupContainer\"\n          ],\n          [\n            \"td\",\n            \"菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://codepen.io/afc163/pen/zEjNOy?editors=0010\"\n              },\n              \"示例\"\n            ]\n          ],\n          [\n            \"td\",\n            \"function(triggerNode)\"\n          ],\n          [\n            \"td\",\n            \"() => document.body\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"labelInValue\"\n          ],\n          [\n            \"td\",\n            \"是否把每个选项的 label 包装到 value 中，会把 value 类型从 \",\n            [\n              \"code\",\n              \"string\"\n            ],\n            \" 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string\",\n            \"[\",\n            \"] } 的格式\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"listHeight\"\n          ],\n          [\n            \"td\",\n            \"设置弹窗滚动高度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"256\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"loadData\"\n          ],\n          [\n            \"td\",\n            \"异步加载数据\"\n          ],\n          [\n            \"td\",\n            \"function(node)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxTagCount\"\n          ],\n          [\n            \"td\",\n            \"最多显示多少个 tag，响应式模式会对性能产生损耗\"\n          ],\n          [\n            \"td\",\n            \"number \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"responsive\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"responsive: 4.10\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxTagPlaceholder\"\n          ],\n          [\n            \"td\",\n            \"隐藏 tag 时显示的内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode \",\n            \"|\",\n            \" function(omittedValues)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"multiple\"\n          ],\n          [\n            \"td\",\n            \"支持多选（当设置 treeCheckable 时自动变为 true）\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"placeholder\"\n          ],\n          [\n            \"td\",\n            \"选择框默认文字\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"searchValue\"\n          ],\n          [\n            \"td\",\n            \"搜索框的值，可以通过 \",\n            [\n              \"code\",\n              \"onSearch\"\n            ],\n            \" 获取用户输入\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showArrow\"\n          ],\n          [\n            \"td\",\n            \"是否显示 \",\n            [\n              \"code\",\n              \"suffixIcon\"\n            ],\n            \"，单选模式下默认 \",\n            [\n              \"code\",\n              \"true\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showCheckedStrategy\"\n          ],\n          [\n            \"td\",\n            \"配置 \",\n            [\n              \"code\",\n              \"treeCheckable\"\n            ],\n            \" 时，定义选中项回填的方式。\",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_ALL\"\n            ],\n            \": 显示所有选中节点(包括父节点)。\",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_PARENT\"\n            ],\n            \": 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_ALL\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_PARENT\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_CHILD\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"TreeSelect.SHOW_CHILD\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showSearch\"\n          ],\n          [\n            \"td\",\n            \"是否支持搜索框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"单选：false \",\n            \"|\",\n            \" 多选：true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"size\"\n          ],\n          [\n            \"td\",\n            \"选择框大小\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"large\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"middle\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"small\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"suffixIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义的选择框后缀图标, 多选模式下必须同时设置 \",\n            [\n              \"code\",\n              \"showArrow\"\n            ],\n            \" 为 true\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"switcherIcon\"\n          ],\n          [\n            \"td\",\n            \"自定义树节点的展开/折叠图标\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"tagRender\"\n          ],\n          [\n            \"td\",\n            \"自定义 tag 内容，多选时生效\"\n          ],\n          [\n            \"td\",\n            \"(props) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeCheckable\"\n          ],\n          [\n            \"td\",\n            \"显示 Checkbox\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeCheckStrictly\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"checkable\"\n            ],\n            \" 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 \",\n            [\n              \"code\",\n              \"labelInValue\"\n            ],\n            \" 强制为 true\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeData\"\n          ],\n          [\n            \"td\",\n            \"treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）\"\n          ],\n          [\n            \"td\",\n            \"array\",\n            \"<\",\n            \"{value, title, children, \",\n            \"[\",\n            \"disabled, disableCheckbox, selectable, checkable]}>\"\n          ],\n          [\n            \"td\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeDataSimpleMode\"\n          ],\n          [\n            \"td\",\n            \"使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: \",\n            \"[\",\n            \"{id:1, pId:0, value:'1', title:\\\"test1\\\",...},...]， \",\n            [\n              \"code\",\n              \"pId\"\n            ],\n            \" 是父节点的 id)\"\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" object\",\n            \"<\",\n            \"{ id: string, pId: string, rootPId: string }>\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeDefaultExpandAll\"\n          ],\n          [\n            \"td\",\n            \"默认展开所有树节点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeDefaultExpandedKeys\"\n          ],\n          [\n            \"td\",\n            \"默认展开的树节点\"\n          ],\n          [\n            \"td\",\n            \"string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeExpandedKeys\"\n          ],\n          [\n            \"td\",\n            \"设置展开的树节点\"\n          ],\n          [\n            \"td\",\n            \"string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeIcon\"\n          ],\n          [\n            \"td\",\n            \"是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeLine\"\n          ],\n          [\n            \"td\",\n            \"是否展示线条样式，请参考 \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/tree/#components-tree-demo-line\"\n              },\n              \"Tree - showLine\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" object\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\",\n            \"4.17.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeNodeFilterProp\"\n          ],\n          [\n            \"td\",\n            \"输入项过滤对应的 treeNode 属性\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"value\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"treeNodeLabelProp\"\n          ],\n          [\n            \"td\",\n            \"作为显示的 prop 设置\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"title\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"指定当前选中的条目\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" string\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"virtual\"\n          ],\n          [\n            \"td\",\n            \"设置 false 时关闭虚拟滚动\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"4.1.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"选中树节点时调用此函数\"\n          ],\n          [\n            \"td\",\n            \"function(value, label, extra)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onDropdownVisibleChange\"\n          ],\n          [\n            \"td\",\n            \"展开下拉菜单的回调\"\n          ],\n          [\n            \"td\",\n            \"function(open)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSearch\"\n          ],\n          [\n            \"td\",\n            \"文本框值变化时回调\"\n          ],\n          [\n            \"td\",\n            \"function(value: string)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onSelect\"\n          ],\n          [\n            \"td\",\n            \"被选中时调用\"\n          ],\n          [\n            \"td\",\n            \"function(value, node, extra)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onTreeExpand\"\n          ],\n          [\n            \"td\",\n            \"展示节点时调用\"\n          ],\n          [\n            \"td\",\n            \"function(expandedKeys)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"Tree 方法\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"名称\"\n          ],\n          [\n            \"th\",\n            \"描述\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"blur()\"\n          ],\n          [\n            \"td\",\n            \"移除焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"focus()\"\n          ],\n          [\n            \"td\",\n            \"获取焦点\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"TreeNode props\"\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"建议使用 treeData 来代替 TreeNode，免去手工构造麻烦\"\n      ]\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"checkable\"\n          ],\n          [\n            \"td\",\n            \"当树为 Checkbox 时，设置独立节点是否展示 Checkbox\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disableCheckbox\"\n          ],\n          [\n            \"td\",\n            \"禁掉 Checkbox\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"isLeaf\"\n          ],\n          [\n            \"td\",\n            \"是否是叶子节点\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"key\"\n          ],\n          [\n            \"td\",\n            \"此项必须设置（其值在整个树范围内唯一）\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"selectable\"\n          ],\n          [\n            \"td\",\n            \"是否可选\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"title\"\n          ],\n          [\n            \"td\",\n            \"树节点显示的内容\"\n          ],\n          [\n            \"td\",\n            \"ReactNode\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"---\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"value\"\n          ],\n          [\n            \"td\",\n            \"默认根据此属性值进行筛选（其值在整个树范围内唯一）\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      \"onChange 时如何获得父节点信息？\"\n    ],\n    [\n      \"p\",\n      \"从性能角度考虑，我们默认不透出父节点信息。你可以这样获得：\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://codesandbox.io/s/wk080nn81k\"\n        },\n        \"https://codesandbox.io/s/wk080nn81k\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"自定义 Option 样式导致滚动异常怎么办？\"\n    ],\n    [\n      \"p\",\n      \"请参考 Select 的 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/components/select\"\n        },\n        \"FAQ\"\n      ],\n      \"。\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/tree-select/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);