"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV === "production" && pluginOptions && pluginOptions.bingId) {
    return setHeadComponents([/*#__PURE__*/_react["default"].createElement("script", {
      "data-obct": true,
      type: "text/javascript",
      key: "gatsby-plugin-ms-bing",
      dangerouslySetInnerHTML: {
        __html: "\n                        (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:\"".concat(pluginOptions.bingId, "\"};o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!==\"loaded\"&&s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\n                    ")
      }
    })]);
  }
};