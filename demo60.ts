// 基础函数
function findPeoples(num: number): string { 
  return "找到了" + num + "个人";
}
console.log("findPeoples:" + findPeoples(18));  
console.log("findPeoples:" + findPeoples(18,1)) // 注意，输入多余的（或者少于要求的）参数，是不被允许的：
// 有可选参数的函数
function findPeoples2(num: number, sex?: string): string {
  // 不确定是否有该参数时添加?
  let str: string = "找到了" + num + "个人,";
  str += "性别" + sex;
  return str;
}
console.log("findPeoples2:" + findPeoples2(17));

// 有默认参数的函数
function findPeoples3(num: number = 18, sex: string = "女"): string {
  let str: string = "找到了" + num + "个人,";
  str += "性别" + sex;
  return str;
}
console.log("findPeoples3:" + findPeoples3(16));

// 不确定参数个数的函数可以使用rest参数
function findPeoples4(...args: string[]): string {
  let str: string = "找到了";
  for(let i=0;i<args.length;i++){
      str+=i===0?args[i]:'、'+args[i]
  }
  return str+'的人';
}
console.log("findPeoples4:" + findPeoples4('戴帽子','个高','长得帅'));