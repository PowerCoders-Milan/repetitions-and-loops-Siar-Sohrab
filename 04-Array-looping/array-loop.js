var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var num = 0;
var stir = 0;
arr1.forEach(function(item){
    if(typeof(item) == "number"){
        num++ 
    }
    if(typeof(item) == "string"){
    stir++
}
})
console.log(`in the array, we have  ${num} numbers and ${stir} strings`);

function counter(a,b){
    if(a>b){
        console.log(`we a alot of number of charachter type of numbers i.e. ${a}`)
    }
    else if (a<b){
        console.log(`we have a lot of character type of strings i.e. ${b}`)
    }
    else {
        console.log(`we have same number of strings and numbers`)

    }
}
counter(num, stir);