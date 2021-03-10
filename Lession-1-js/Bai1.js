function same (arr1,arr2){
        arr1=arr1.map((num)=>num*num)
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                 if(arr1[i]===arr2[j]){
                     arr1.splice(i,1)
                     arr2.splice(j,1)
                     i--
                     j--
                 }
            }
        }
        // return arr1.length
        if(arr1.length===0&&arr2.length===0)return true
        else return false
}
console.log(same([1,2,1,3],[1,9,4,1]))