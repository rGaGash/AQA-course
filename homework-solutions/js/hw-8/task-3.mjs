/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(numbers) {
  const num = [...new Set(numbers)];
  const min = Math.min(...num);
  const max = Math.max(...num);
  const rangeOfNumbers = Array.from({ length: max - min + 1 }, (el, i) => min + i);
  return rangeOfNumbers.filter((el) => !num.includes(el));
}

console.log(findMissingNumber(arr));

export { findMissingNumber };
