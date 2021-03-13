function frequencyElements(array) {
    return array.reduce((count, current) => {
        if (current in count) {
            count[current]++
        }
        else {
            count[current] = 1
        }
        return count
    }, {})
}

let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'b', 'b', 'c', 'z']
console.log(frequencyElements(arr))