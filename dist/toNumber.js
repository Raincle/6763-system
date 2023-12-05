"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = void 0;
// 转为10进制
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const chMap_1 = require("./chMap");
function toNumber(ch, system) {
    const remaindersMap = ch.split("");
    const remainders = remaindersMap.map(item => parseInt(chMap_1.CH_MAP[item]));
    let deceimal = (0, bignumber_js_1.default)(0);
    const exIndex = remainders.length - 1;
    remainders.forEach((num, index) => {
        const base = (0, bignumber_js_1.default)(6764);
        const ex = (0, bignumber_js_1.default)(exIndex - index);
        const number = (0, bignumber_js_1.default)(num);
        deceimal = deceimal.plus(number.times(base.pow(ex)));
    });
    return system ? deceimal.toString(system) : deceimal.toString();
}
exports.toNumber = toNumber;
