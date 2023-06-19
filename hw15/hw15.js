// ""Получение данных о пользователе""
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
// в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID 
// с удаленного сервера. Функция должна возвращать промис, который разрешается с данными 
// о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен 
// быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и 
// возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с 
// сообщением об ошибке.

const getUserData = async (userId) => {
    const serverUrl = 'https://api.github.com/user/'; //тут может быть любой необходимый удалённый сервер, в идеале читается из некого конфига
    const response = await fetch(serverUrl + userId);
    const result = await response.json();
    return response.status === 200 ? result : new Error(`My Error -- response.status =/= 200 (${response.status} response with message:'${result.message}')`);
}

// ""Отправка данных на сервер""
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе 
// в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для 
// сохранения. Функция должна возвращать промис, который разрешается, если данные успешно 
// отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };
// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный 
// сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием 
// типа содержимого application/json и сериализует объект с данными о пользователе в 
// JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция 
// разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const saveUserData = async (userData, serverUrl) => { //serverUrl - добавлен для проверки различных ответов
    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        return result
    } catch (error) {
        throw new Error(`My Error -- original error message: ${error.message}`);
    }
}

// ""Изменение стиля элемента через заданное время""
// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и 
// время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить 
// стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const changeStyleDelayed = (elementId, delayMiliseconds) => {
    const element = document.querySelector('#' + elementId)
    setTimeout(() => {
        element.style.fontSize = '50px'
    }, delayMiliseconds);
}

