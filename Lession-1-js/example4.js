function removelastelements(array, n) {
    array.splice(array.length - n, n)
    return array
}
let array1 = [21, 4, 5, -1, 15, 4, 13]
console.log(removelastelements(array1, 3))