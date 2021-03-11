function sumZero(arrSorted) {
    for (let i = 0; arrSorted[i] <= 0; i++) {
        let check = arrSorted.find(element => element === -arrSorted[i])
        if (check !== undefined) {
            if (check === 0) return [0, 0]
            return [-check, check]
        }
    }
    return undefined
}

console.log(sumZero([-4, -2, 0, 1, 2, 3, 5]))