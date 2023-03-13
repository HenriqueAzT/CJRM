const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// const newArray = arr1.concat(arr2)
const newArray = [...arr1, ...arr2]

console.log(newArray);

const obj1 = {prop1: 1, prop2: 2}
const obj2 = {prop3: 3, prop4: 4}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3);