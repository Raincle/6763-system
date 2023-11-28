# 6764-system
6764进制(基于6763个高频中文汉字)

## Motivation
1. 中文是世界上词汇量最多的语言，仅以高频字来说就有6763个。
2. 市面上常用的进制转换，基于英文字母，例如16进制、26进制、52进制、62进制，都限制于数字和字母大小写的个数。
3. 因此，作者决定开发基于字频的中文6764进制，缩短密文长度，提高密文可读性，使密文能够仅在脑中存储。

## Features

1. 6764进制便于记忆大数、缩短密文等
2. 将10进制、16进制转换为6764进制
3. 将6764进制，转换为10进制、16进制

## Installation
```sh
$ npm i --save 6764-system
```

## Common Usage
```js
/*
 *加密解密
 */
import { to6764, toNumber } from "6764-system";

const hello = to6764("3706792")
console.log(hello) // 你好
const deceimalHello = toNumber("你好")
console.log(deceimalHello) // 3706792

const helloHex = to6764("388fa8", 16)
console.log(helloHex) // 你好
const hexHello = toNumber("你好", 16)
console.log(hexHello) // 388fa8

const helloWorld = to6764("169592022349604")
console.log(helloWorld) // 你好世界
const deceimalHelloWorld = toNumber("你好世界")
console.log(deceimalHelloWorld) // 169592022349604

const helloWorldHex = to6764("9a3e383fb724", 16)
console.log(helloWorldHex) // 你好世界
const hexHelloWorld = toNumber("你好世界", 16)
console.log(hexHelloWorld) // 9a3e383fb724

```


## Advanced Usage

## Contact
如果你有好点子，想改善这个库，  
或者想要一起做点有意思的事  
请联系我！
- - -
微信：Mid9Rain  
小红书：雨叔  
抖音：85665398215
- - -
知乎：雨叔  
B站：雨叔在B站  

## License
MIT
