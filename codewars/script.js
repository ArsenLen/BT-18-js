// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:

// // name + " plays banjo" 
// // name + " does not play banjo"
// // Names given are always valid strings.

// // Создать функцию, которая отвечает на вопрос "Вы играете на гитаре?"
// // Если ваше имя начинается с буквы R или r, то играете!

// // Функция принимает один аргумент - имя, и возвращает одну из следующих строк
// // name + " играет на гитаре"
// // name + " не играет на гитаре"
// // Имена которые получает функция всегда валидные строки
// // name = Arsen
// // name[0] == A

// function areYouPlayingGuitar(name) {
//     if(name.toUpperCase().startsWith('R')) {
//         result = name + " Играет на гитаре"
//     } else {
//         result = name + " Не играет на гитаре"
//     }
//     return result
// }

// // Если имя начинается с R, то в строку result записываем имя Играет
// // Иначе записываем не играет

// console.log(areYouPlayingGuitar("Ronaldo")) // Ruslan играет на гитаре
// console.log(areYouPlayingGuitar("ronaldo")) // Arsen не играет на гитаре




if(price > 500) {
    console.log("скидка 10%")
} else {
    console.log("скидки нет")
}
const price = 1000
price > 500 ? console.log("скидка 10%") : console.log("скидки нет")


// Создать функцию, которая получает массив строк, 
// Она должна возвращать строки массива, которые отредактированы следующим образом
// ["a", "b", "c"] => ["1: a", "2: b", "3: c"]
// ["b", "d"] => ["1: b", "2: d"]

function number(arr) {
    const result = arr.map(function(el, index) {
        // el = "a" // b // c 
        return `${index}: ${el}`
    })
    return result
} 
console.log(number(["a", "b", "c"]))

