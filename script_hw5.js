console.log("*Задание 5: цикл for без тела.");
/*
 * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
x
xx
xxx
xxxx
xxxxx
*/

let i = "";
do {
    i += "x"
    console.log(i);
} while (i.length < 20);
