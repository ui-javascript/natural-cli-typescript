// 在函数和返回值类型之前使用( =>)符号，使之清晰明了
let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

console.log(myAdd(1, 2))    
