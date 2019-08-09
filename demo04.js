"use strict";
// 基础函数
function findPeoples(num) {
    return '找到了' + num + '个人';
}
var result = findPeoples(18); // 实参 18
console.log(result);
// 有可选参数的函数
function findPeoples2(num, sex) {
    var str = '找到了' + num + '个人';
    if (sex !== undefined) {
        str += ',性别' + sex;
    }
    return str;
}
var result = findPeoples2(18);
console.log(result);
