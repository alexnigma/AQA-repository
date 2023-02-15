// ? - Определение переменной в зависимости от условия:

// Код для оптимизации:
/* 
let accessAllowed;
let age = prompt('Сколько вам лет?');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);
*/


// Через оператор "?":
// Синтаксис:
// let result = условие ? значение1 : значение2;

// Пример:
/*
let age = prompt('Сколько вам лет?','');
let accessAllowed = (age >= 18) ? true : false;
console.log(accessAllowed);
*/

// Несколько операторов „?“
// Последовательность операторов вопросительного знака ? позволяет вернуть значение, которое зависит от более чем одного условия.

//Пример:
/*
let age = prompt('Возраст?');

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

console.log(message);
*/

// Можно, но не правильно:
/*
let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

Вместо:
let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}
*/