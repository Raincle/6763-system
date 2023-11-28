// 转为10进制
import BigNumber from "bignumber.js";
import { CH_MAP } from './chMap';

export function toNumber(ch: string, system?: number): string {
    const remaindersMap = ch.split("")
    const remainders = remaindersMap.map(item => parseInt(CH_MAP[item]))
    
    let deceimal = BigNumber(0)
    const exIndex = remainders.length - 1
    
    remainders.forEach((num: number, index: number) => {
        const base = BigNumber(6764)
        const ex = BigNumber(exIndex - index)
        const number = BigNumber(num)

        deceimal = deceimal.plus(number.times(base.pow(ex)))
        
    })
    
    return system ? deceimal.toString(system) : deceimal.toString()
}