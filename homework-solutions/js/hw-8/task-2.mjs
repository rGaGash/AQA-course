/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiou';
  return [...wordsArr].sort(
    (a, b) =>
      a.split('').filter((element) => vowels.includes(element)).length -
      b.split('').filter((element) => vowels.includes(element)).length,
  );
}

console.log(sortedByVowels(words));

export { sortedByVowels };
