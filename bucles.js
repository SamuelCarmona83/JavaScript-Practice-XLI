let geeks = [ 'Ruben', 'Andres', 'Carlos', 'Mariana', 'Anderson', 'Rafa', 'Wissam', 'Yarumis', 'Jose', 'Alexander', 'Hussein', 'Ignacio', 'Daniela', 'Euclides', 'Elias', 'Keiber']

let emojis = [ '🐠', '🪓', '🍓', '✅', '🥭', '🥗', '💾', '🐳']

let secondarys = ['☮', '😎', '❤']

let counter = 0

for(let i = 0; i < geeks.length; i = i + 1 ){
    console.log(`Hola ${ geeks[i] } ${ pickRandomEmoji(emojis) }`) // literal template! 
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
(function (){
    console.log('Uyyyy muy anonimo! 👁‍🗨')
})();