let x: [string, number];

// Initialize it
// OK
x = ['hello', 10]; 

// Error
// x = [10, 'hello']; 

console.log(x)


let t: [number, string?, boolean?];
t = [42, null, true]
console.log(t)