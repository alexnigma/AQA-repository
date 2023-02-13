// Оператор И пишется как два амперсанда &&:

/*
Синтаксис:
result = a && b;

Комбинации:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
*/


// Пример с if:

/*
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
*/


// Любое значение:

/*
if (1 && 0) {
  alert( "не сработает, так как результат ложный" );
}
*/


// И «&&» находит первое ложное значение:
/*
Синтаксис:
result = value1 && value2 && value3;
*/

// Примеры:

/*
console.log( 1 && 0 );
console.log( 1 && 5 );
console.log( null && 5 );
console.log( 0 && "no matter what" );
console.log( 1 && 2 && null && 3 ); 
console.log( 1 && 2 && 3 );
*/


/*
Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.

a && b || c && d == (a && b) || (c && d)
*/


// Как и оператор ИЛИ ||, И && иногда может заменять if:

/*
let x = 1;
(x > 0) && console.log( 'Greater than zero!' );
Действие в правой части && выполнится только в том случае, если до него дойдут вычисления. То есть, alert сработает, если в левой части (x > 0) будет true.

Получился аналог:

let x = 1;
if (x > 0) {
  console.log( 'Greater than zero!' );
}
*/
