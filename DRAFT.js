/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
// */
// function mergeArrays(...arg) {
//     // Ваш код
//     const arr = [...arg]
//     return arg
// }

// console.log(mergeArrays([1,2,3,4,5],[5,6,7,8,9]))
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
// function devideBy(sentence) {
//     const text = sentence.split(' ')
//     return result = text.map((el, index) => index === 0 ? el.toLowerCase(): el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join('_')
//   }

// console.log(devideBy('I am super engineer'))

// if(typeof sentence !== 'string'){
//     console.log(`${sentence} is not String`)
//     return
// }
// const text = [sentence]
// return sentence.split(' ').map(sentence => sentence.charAt(0).toLowerCase())

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
// function fibonacci(n) {
//     // Ваш код
//     if(n <= 1){
//         return n
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }

//   }
//   console.log(fibonacci(8))

// function mergeArrays(...arg) {
//   return arg.flat();
// }
// console.log(mergeArrays([1, 2, 3, 4, 5, 7], [2, 4, 5, 6, 7, 8]));
/*
1. isPalindrom
Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

// function isPalindrom(word) {
//   if (typeof word !== 'string') {
//     console.log(`${word} is not string`);
//     return;
//   }
//   const reversedWord = [...word]
//     .map((word) => word.toLowerCase())
//     .reverse()
//     .join('');
//   const toLowerCaseWord = reversedWord.toLowerCase();

//   if (toLowerCaseWord == reversedWord) {
//     console.log(`\'${word}\' is palidrom`);
//   } else {
//     console.log(`\'${word}\' is not palidrom`);
//   }
// }

// isPalindrom('ggAgg');

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

// function findLongestWords(sentence) {
//   if (typeof sentence !== 'string' || sentence.length === 0) {
//     return sentence;
//   }
//   // Ваш код
//   const words = sentence.split(' ');
//   const maxWordsLength = Math.max(...words.map((word) => word.length));
//   const result = words.filter((word) => word.length === maxWordsLength);
//   return result;
// }

// console.log(findLongestWords(2343));

/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

// function digitalRoot(number) {
//   if (typeof number !== 'number') {
//     return false;
//   }
//   if (number <= 9) {
//     return number;
//   }
//   const num = number.toString().split('');
//   const result = num.reduce((acc, num) => acc + Number(num), 0);
//   return digitalRoot(result);
//   // Ваш код
// }
// console.log(digitalRoot(112312312));
