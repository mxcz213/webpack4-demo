import { square, foo } from './math.js'
console.log('打印2的平方',square(2))
console.log('执行foo', foo())

let arr = [1,2,3];
let arr2 = arr.map(item => item + 2)
arr.includes(8)
console.log('new Set(arr2):', new Set(arr2))

async function l() {
    return await 1;
}
l().then((value) => {
    console.log(value);
    console.log(111111)
})

const app = document.getElementById('app')
app.innerHTML = 'hello world lalalala';