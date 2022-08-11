// ts运行demo https://zhuanlan.zhihu.com/p/61583462


// 变量声明
var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)

var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)


var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)


// 运算符

var num1:number = 10
var num2:number = 2
var res:number = 0
   
res = num1 + num2
console.log("加:        "+res);

res = num1 - num2;
console.log("减: "+res)

res = num1*num2
console.log("乘:    "+res)

res = num1/num2
console.log("除:   "+res)
   
res = num1%num2
console.log("余数:   "+res)

num1++
console.log("num1 自增运算: "+num1)

num2--
console.log("num2 自减运算: "+num2)

// 判断
var  num:number = 5
if (num > 0) { 
   console.log("数字是正数") 
}

// 循环
var num:number = 5; 
var i:number; 
var factorial = 1; 
 
for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)


// 函数定义
function greet():string { // 返回一个字符串
    return "Hello World" 
} 
 
function caller() { 
    var msg = greet() // 调用 greet() 函数 
    console.log(msg) 
} 
 
// 调用函数
caller()



console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); 
console.log("最小值为: " + Number.MIN_VALUE); 
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
console.log("正无穷大:" + Number.POSITIVE_INFINITY);


var sites = { 
    site1:"Runoob", 
    site2:"Google" 
 }; 
 // 访问对象的值
 console.log(sites.site1) 
 console.log(sites.site2)