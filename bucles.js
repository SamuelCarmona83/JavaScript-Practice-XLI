let geeks = [ 'Ruben', 'Andres', 'Carlos', 'Mariana', 'Anderson', 'Rafa', 'Wissam', 'Yarumis', 'Jose', 'Alexander', 'Hussein', 'Ignacio', 'Daniela', 'Euclides', 'Elias', 'Keiber']

let emojis = [ '🐠', '🪓', '🍓', '✅', '🥭', '🥗', '💾', '🐳']

let secondarys = ['☮', '😎', '❤']

let counter = 0

for(let i = 0; i < geeks.length; i = i + 1 ){
    // console.log(`Hola ${ geeks[i] } ${ pickRandomEmoji(emojis) }`) // literal template! 
}

function pickRandomEmoji(emojiList){
    let position = parseInt( Math.random()*emojiList.length )
    return emojiList[position]
    // return emojiList[Math.floor(Math.random()*emojiList.length)]
}

// Inmeditly Invoce Function Expresion

//IIFE
//<= ES6
// funcion que se ejecuna una unica vez!

let result = 0; //Hussein Jose Elias Carlos 

(function (){ // encapsulado
    //nuevo alcance - alcance local
    let result = '🧀' // Paulo Rafa
    // console.log('Uyyyy muy anonimo! 👁‍🗨 1 : ', result)
})();

// console.log('Uyyyy muy anonimo! 👁‍🗨 2 : ', result)









// const comparar = function (name) {
//     return 'Hola Mundo! soy una IIFE' + name;
// };

// const comparar = (name) => {
//     return 'Hola Mundo! soy una ' + name;
// };

// const comparar = (name) => 'Hola Mundo! soy una ' + name;

// console.log(comparar)
// console.log(comparar('Rafa 🐳'))


console.log(geeks.filter((word1, word2) => {
    if(word1 > word2) return 1
    if(word2 == word1) return 0
    return -1   
}))

// Inmediatly invoke function expresion
console.log(() => '🪓');

// This Current context of execution - Constructor Functions





