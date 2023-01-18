"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 01310930/json/
var api = _axios["default"].create({
  baseURL: "http://viacep.com.br/ws/"
});

var _default = api;
exports["default"] = _default;
//# sourceMappingURL=api.dev.js.map
