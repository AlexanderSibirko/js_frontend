// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let cubing = number => {return number*number*number};
console.log(`2^3 + 3^3 = ${cubing(2)+cubing(3)}`);
// console.log(`2^3 + 3^3 = ${Math.pow(2,3)+Math.pow(3,3)}`);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за 
// вычетом налогов равен значение"

function calcSalaryWithoutTax(salary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary*0.87}`);
}

let userInput = prompt('Введите вашу З/П до вычета налогов');
(isNaN(userInput)) ? console.log('Значение введено неверно') : calcSalaryWithoutTax(userInput);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userInputNumber1 = Number(prompt('Введите первое число'));
let userInputNumber2 = Number(prompt('Введите второе число'));
let userInputNumber3 = Number(prompt('Введите третье число'));
const getMaxNumber = (number1, number2, number3) => Math.max(number1, number2, number3);
console.log(getMaxNumber(userInputNumber1, userInputNumber2, userInputNumber3));


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция 
// выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна 
// вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
// проверки на NaN, Infinity делать не нужно.

let numbersSum = (a,b) => a+b;
let numbersDifference = (a,b) => (a > b) ? a-b : b-a;
let numbersMultiplication = (a,b) => a*b;
let numbersDivision = (a,b) => a/b;

console.log(numbersSum(2,6));
console.log(numbersDifference(2,6));
console.log(numbersDifference(6,6));
console.log(numbersDifference(6,3));
console.log(numbersMultiplication(2,6));
console.log(numbersDivision(2,6));