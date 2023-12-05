"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.to6764 = void 0;
// 转为6763进制
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const numMap_1 = require("./numMap");
function to6764(num, system) {
    let newNum = system ? (0, bignumber_js_1.default)(num, system) : (0, bignumber_js_1.default)(num);
    if (newNum.toNumber() <= 6763) {
        return numMap_1.NUM_MAP[newNum.toNumber()];
    }
    else {
        let remainders = [];
        while (newNum.toNumber() > 6763) {
            const remainder = newNum.mod(6764);
            remainders.unshift(remainder.toNumber());
            newNum = newNum.minus(remainder).div(6764);
        }
        if (newNum.toNumber() != 0) {
            remainders.unshift(newNum.toNumber());
        }
        let remaindersMap = remainders.map(num => numMap_1.NUM_MAP[num]);
        return remaindersMap.join("");
    }
}
exports.to6764 = to6764;
