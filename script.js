let index = prompt()
let arr = ['Alex', 'Sasha', 'Oleg', 'Nefor']
if(arr[index]) {
    arr.splice(index, 1)
    console.log('гуд')
} else {
    console.log('такого элемента нет');
}



let arr1 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let filter = arr1.filter(item => typeof(item) == 'number')
if(filter.length >= 5){
    console.log('good')
} else {
    console.log('domoy')
}


let car = [
    {
        name: 'malibu',
        price: 24000
    },


    {
        name: 'spark',
        price: 4000
    },


    {
        name: 'matiz',
        price: 3500
    },


    {
        name: 'negr',
        price: 500
    },


    {
        name: 'jiguli',
        price: 104000
    }
]
let cheap = car.filter(nefor => nefor.price <= 35000)
console.log(cheap);