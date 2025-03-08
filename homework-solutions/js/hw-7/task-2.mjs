/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word.length === 0) {
    return true;
  }
  const toLowerCase = word.toLocaleLowerCase();
  const reversedWord = [...toLowerCase].reverse().join('');
  return toLowerCase === reversedWord;
}

console.log(isPalindrom('1sGhjhGs1'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return [];
  }
  // Ваш код
  const words = sentence.split(' ');
  const maxWordsLength = Math.max(...words.map((word) => word.length));
  const result = words.filter((word) => word.length === maxWordsLength);
  return result;
}

export { isPalindrom, findLongestWords };
