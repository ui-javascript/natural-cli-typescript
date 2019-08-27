let x: [string, number];

x = ['hello', 10]; 

// Error
// x = [10, 'hello']; 

console.log(x)


let t: [number, string?, boolean?];
t = [42, null, true]
console.log(t)
t = [12]
console.log(t)