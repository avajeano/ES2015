//given function 
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// ES2015 version
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (object1, object2) => ({...object1, ...object2})

//doubleAndReturnArgs

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(num => num*2)]

//Slice and Dice! 
//remove a random element in the items array and return a new array without that item
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//return a new array with every item in array1 and array2
const extend = (array1, array2) => {return [...array1, ...array2]}

//return a new object with all the keys and values from obj and a new key/value pair
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key]=val;
    return newObj;
}

//return a new object with a key removed

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

//combine two objects and return a new object
const combine = (obj1, obj2) => {return{...obj1, ...obj2};}

//return a new object with a modified key and value
const update = (obj, key, val) => {return{...obj, [key]:val};}