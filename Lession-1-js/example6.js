function evenNumbers (array){

   let result = array.filter(num=>num%2===0)
    return result
}

let arr=[1,2,3,4,5,6,7,8]
console.log(evenNumbers(arr))