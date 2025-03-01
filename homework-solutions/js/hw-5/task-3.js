/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowel = 'AEIOU';
let consonants = 'BCDFGHJKLMNPQRSTUVWXYZ';
let vowelScore = 0;
let consonantsScore = 0;
for(let i = 0; i< word.length;i++){
    if(vowel.includes(word[i].toUpperCase())){
        vowelScore++;
    }
    else if (consonants.includes(word[i].toUpperCase())){
        consonantsScore++;
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowelScore} vowels and ${consonantsScore} consonants`
console.log(vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };
