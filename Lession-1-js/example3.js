var user = {
    name: "Hieu",
    age: 18,
    appearence: {
        hairColor: 'black',
        skinColor: 'yellow',
        height: 1700,//cm
        weight: 68, //kg 
    }
}
function getAllKeys(obj, allKey = []) {
    for (key in obj) {
        if (typeof obj[key] !== `object`) {
            allKey.push(key)
        }
        else {
            allKey.push(key)
            getAllKeys(obj[key], allKey)
        }
    }
    return allKey
}
console.log(...getAllKeys(user))
