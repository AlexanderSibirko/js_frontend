// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let index = 0; index < 11; index++) {
    if (index === 0) {
        console.log(`${index} - это ноль`)
    } else if (index % 2) {
        console.log(`${index} - нечетное число`)
    } else {
        console.log(`${index} - четное число`)
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
//  и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomNumbersArray = [];
randomNumbersArray.push(randomMinMax(0,9),randomMinMax(0,9),randomMinMax(0,9),randomMinMax(0,9),randomMinMax(0,9))
console.log(randomNumbersArray);

const minValue = Math.min(...randomNumbersArray);
console.log(minValue);

const containsThree = randomNumbersArray.includes(3);
console.log(containsThree)


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
    console.log('X'.repeat(i+1));
}