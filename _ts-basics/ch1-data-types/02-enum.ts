enum Color {
    Red = 1, 
    Green = 2, 
    Blue = 4
}

let c: Color = Color.Green;
console.log(c)

let colorName: string = Color[2];
// 显示'Green'因为上面代码里它的值是2
console.log(colorName);  