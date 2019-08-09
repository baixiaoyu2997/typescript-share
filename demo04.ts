// 基础函数
function findPeoples(num:number):string{  // 形参 num
    return '找到了'+num+'个人'
}
var result:string=findPeoples(18)  // 实参 18
console.log(result)

// 有可选参数的函数
function findPeoples2(num:number,sex?:string):string{ // 不确定是否有该参数时添加?
    let str:string='找到了'+num+'个人'
    if(sex!==undefined){
        str+=',性别'+sex
    }
    return str
}
var result:string=findPeoples2(18)
console.log(result)