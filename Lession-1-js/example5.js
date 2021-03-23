function insertElement(array, index, element) {
    array.splice(index, 0, element)
    return array
}

let array2 = [21, 4, 5, -1]

console.log(insertElement(array2, 2, 999))