'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _all=require('../../utils/all');var _all2=_interopRequireDefault(_all);var _find=require('../../utils/find');var _find2=_interopRequireDefault(_find);var _=require('./');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(apiKey){return{all:(0,_all2.default)(_.api,apiKey,'attractions'),find:(0,_find2.default)(_.api,apiKey,'attractions')};};module.exports=exports['default'];