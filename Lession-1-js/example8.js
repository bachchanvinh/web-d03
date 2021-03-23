console.log(a)
var a = 'Hoisting'

saysomething('Something')
function saysomething(a) {
    console.log(a)
}

dosomething()

function dosomething(){
        console.log(a)
        var a ='fly'
}

