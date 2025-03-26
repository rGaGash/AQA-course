/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Invalid input: name must be a string and age must be a number');
  }
  characters.push(character);
  return character;
}

function getCharacter(name) {
  const character = characters.find((char) => char.name === name);
  return character;
  // Ваш код
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number' || isNaN(minAge)) {
    throw new Error('Invalid input');
  }
  const charactersAge = characters.filter((char) => char.age >= minAge);
  return charactersAge;
  // Ваш код
}

function updateCharacter(name, newCharacter) {
  const getName = getCharacter(name);
  const getIndex = characters.findIndex((char) => char.name === name);
  if (getIndex === -1) {
    throw new Error('Invalid input');
  }
  characters[getIndex] = { ...getName, ...newCharacter };
  return characters[getIndex];
}

console.log(updateCharacter('Jack', { age: 32, name: 'dudush' }));

function removeCharacter(name) {
  const getIndex = characters.findIndex((char) => char.name === name);
  if (getIndex === -1) {
    throw new Error('Invalid input');
  }
  const slicedCharacter = characters.splice(getIndex, 1)[0];
  return slicedCharacter;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
