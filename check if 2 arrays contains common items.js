/*
Given two arrays, create a function which lets the user know if the 2 arrays contains
common items or not.

Sample

1.
---- const array1 = ['a','b','c','x']
---- const array2 = ['z','y','x']
---- result should be true

2.
---- const array1 = ['a','b','c','x']
---- const array2 = ['z','y','i']
---- result should be false
*/

// 2 parameters - arrays - no size limit
// return true or false

// Bruteforce approach - O(n^2) or O(a*b)
// function checkCommonItems(array1, array2) {

//     array1.forEach(element => {
//         if(array2.includes(element)) {
//             return true
//         }
//     })

//     return false
// }

/*

Efficient solution - O(n) or O(m+n)
1. loop through 1st array and create an object(hashmap) with properties as items of the array
2. loop through 2nd array and check if any item is present in the created object

*/

function checkCommonItems(array1, array2) {

    const map = convertArrayToObject(array1)

    array2.forEach(item => {
        if(map[item]) {
            return true
        }
    })

    return false
}

/**
 * converts array of items to object with properties === items
 * Loop through array and add each item in the map object
 */


function convertArrayToObject(array) {
    const map = {}
    array.forEach(item => {
        map[item] = true
    })
    return map
}



/**
 * Solution using Set datastructure
 * 
 */

function checkCommonItemsUsingSet(a, b) {
    return new Set([...a, ...b]).size < (a.length + b.length) ? true : false
}

const arr1 = ['a','b','c','d','e','f']
const arr2 = ['z','x','y','h','t','n','j']

console.log(checkCommonItemsUsingSet(arr1,arr2))