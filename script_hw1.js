'use strict';

console.log("ok");
/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью 
console.log и вернуть пустой объект.
*/
var x = 999;
var y = 356;
var z = 105;
var c = 35;

function numberToObj(number) {
    console.log("преобразование числа " + number + " в обьект:");
    let obj = {
        единицы: number % 10,
        десядки: (number % 100 - number % 10) / 10,
        сотни: (number - number % 100) / 100
    }
    return (obj);
};

console.log(numberToObj(x));
console.log(numberToObj(y));
console.log(numberToObj(z));
console.log(numberToObj(c));
