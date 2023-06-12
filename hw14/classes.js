// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}
Department: ${this.department}`);
    }
}

// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales



// ""Управление списком заказов""
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    arrProducts = [];

    constructor(orderNumber, ...products) {
        this.orderNumber = orderNumber;
        products.forEach(product => {
            if (product instanceof Product) {
                this.arrProducts.push(product);
            }
        })
    }

    addProduct(product) {
        this.arrProducts.push(product);
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.arrProducts.forEach(product => {
            totalPrice += product.price;
        })
        return totalPrice;
    }

    //посмотреть список продуктов
    showProducts(){
        this.arrProducts.forEach(product => {
            console.log(product);
        });
    }
}

// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
order.showProducts();
console.log(order.getTotalPrice()); // Вывод: 600


const order2 = new Order(123456, new Product("Soup", 300), new Product("Salad", 200));
order2.showProducts();
console.log(order2.getTotalPrice()); // Вывод: 500 (300+200)


const order3 = new Order(1234567, new Product("Bread", 300));
order3.showProducts();
console.log(order3.getTotalPrice()); // Вывод: 300
