// 转为6763进制
import BigNumber from "bignumber.js";
import { NUM_MAP } from './numMap';

export function to6764(num: string, system?: number): string {
    let newNum = system ? BigNumber(num, system) : BigNumber(num)
    
    if (newNum.toNumber() <= 6763) {
        return NUM_MAP[newNum.toNumber()]
    } else {        
        let remainders = []
        while (newNum.toNumber() > 6763) {
            const remainder = newNum.mod(6764)
            remainders.unshift(remainder.toNumber())
            newNum = newNum.minus(remainder).div(6764)
        }
        if (newNum.toNumber() != 0) {
            remainders.unshift(newNum.toNumber())
        }
        let remaindersMap = remainders.map(num => NUM_MAP[num])
        return remaindersMap.join("")
    }
}
