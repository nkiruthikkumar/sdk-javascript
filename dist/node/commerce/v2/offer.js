'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _find=require('../../utils/find');var _find2=_interopRequireDefault(_find);var _=require('./');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(apikey){return{find:(0,_find2.default)(_.api,apikey,'events','offers')};};module.exports=exports['default'];