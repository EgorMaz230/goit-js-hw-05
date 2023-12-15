// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. 
// В prototype функції-конструктора добав метод getInfo(), 
// який виводить в консоль значення полів login і email об'єкта який його викликав.

// console.log(Account.prototype.getInfo); // function

// function Account({ login, email }) {
//     this.login = login;
//     this.email = email;
//   }

//   Account.prototype.getInfo = function () {
//     console.log(`Логин: ${this.login}, Электронная почта: ${this.email}`);
//   };
  
//   const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
//   });
  
//   mango.getInfo(); // Логин: Mangozedog, Электронная почта: mango@dog.woof
  
//   const poly = new Account({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });
  
//   poly.getInfo(); // Логин: Poly, Электронная почта: poly@mail.com


// 2


// Напиши клас User для створення користувача з наступними властивостями:

// name — рядок
// age — число
// followers — число

// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers.


// class User {
//     constructor({ name, age, followers }) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//     }
  
//     getInfo() {
//       console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
//   }
  
//   const mango = new User({
//     name: 'Mango',
//     age: 20,
//     followers: 298.801,
//   });
  
//   const poly = new User({
//     name: 'Poly',
//     age: 23,
//     followers: 17.227,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
//   poly.getInfo();  // User Poly is 3 years old and has 17 followers
  
// 3

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//     constructor(items) {
//       this.items = items;
//     }
  
//     getItems() {
//       return this.items;
//     }
  
//     addItem(item) {
//       this.items.push(item);
//     }
  
//     removeItem(item) {
//       const itemIndex = this.items.indexOf(item);
//       if (itemIndex !== -1) {
//         this.items.splice(itemIndex, 1);
//       }
//     }
//   }
  
//   const storage = new Storage([
//     'Нанітоіди',
//     'Пролонгер',
//     'Залізні жупи',
//     'Антигравітатор',
//   ]);
  
//   const items = storage.getItems();
//   console.log(items)

//   storage.addItem('Дроїд');
//   console.log(storage.items)

//   storage.removeItem('Пролонгер');
//   console.log(storage.items)


// 4

// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.

// Додай класу наступний функціонал:

// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value

// class StringBuilder {
//     constructor(value) {
//       this._value = value;
//     }
  
//     get value() {
//       return this._value;
//     }
  
//     append(str) {
//       this._value += str;
//     }
  
//     prepend(str) {
//       this._value = str + this._value;
//     }
  
//     pad(str) {
//       this._value = str + this._value + str;
//     }
//   }
  
//   const builder = new StringBuilder('.');

//   builder.append('^');
//   console.log(builder.value); // '.^'
  
//   builder.prepend('^');
//   console.log(builder.value); // '^.^'
  
//   builder.pad('=');
//   console.log(builder.value); // '=^.^='
  

// 5


// Напиши клас Car із зазначеними властивостями і методами.

// class Car {
//     static getSpecs(car) {
//       console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
//     }
  
//     constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//       this.speed = speed;
//       this._price = price;
//       this.maxSpeed = maxSpeed;
//       this.isOn = isOn;
//       this.distance = distance;
//     }
  
//     get price() {
//       return this._price;
//     }
  
//     set price(newPrice) {
//       this._price = newPrice;
//     }
  
//     turnOn() {
//       this.isOn = true;
//     }
  
//     turnOff() {
//       this.isOn = false;
//       this.speed = 0;
//     }
  
//     accelerate(value) {
//       if (this.speed + value <= this.maxSpeed) {
//         this.speed += value;
//       }
//     }
  
//     decelerate(value) {
//       if (this.speed - value >= 0) {
//         this.speed -= value;
//       }
//     }
  
//     drive(hours) {
//       if (this.isOn) {
//         this.distance += hours * this.speed;
//       }
//     }
//   }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
 
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
  
//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000
  




// lesson





// class Book {
//     constructor(title, author, price) {
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
// }

// class Bookstore {
//     constructor() {
//         this.books = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//         console.log(`book "${book.title}" add to book shop.`);
//     }

//     removeBook(book) {
//         const index = this.books.indexOf(book);
//         if (index !== -1) {
//             this.books.splice(index, 1);
//             console.log(`book "${book.title}" deleted з book shop.`);
//         } else {
//             console.log(`book "${book.title}" nema in book shop.`);
//         }
//     }

//     listBooks() {
//         if (this.books.length === 0) {
//             console.log("book nema в book shop.");
//         } else {
//             console.log("list of book in book shop:");
//             this.books.forEach(book => {
//                 console.log(`name: ${book.title}, author: ${book.author}, cena: ${book.price}`);
//             });
//         }
//     }
// }

// const bookstore = new Bookstore();
// const book1 = new Book("hharry ppoter", "ja", 25.99);
// const book2 = new Book("wwar and peace", "ne ja", 19.99);

// bookstore.addBook(book1);
// bookstore.addBook(book2);
// bookstore.listBooks();

// bookstore.removeBook(book1);
// bookstore.listBooks();








// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     getInfo() {
//       return `${this.name} is ${this.age} years old`;
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age, position) {
//       super(name, age);
//       this.position = position;
//     }
  
//     getInfo() {
//       return `${super.getInfo()} and hi is a ${this.position}`;
//     }
//   }
  
//   const john = new Employee("John", 32, "programmer");
//   console.log(john.getInfo());









// class Book {
//     constructor(title, author, published) {
//         this.title = title;
//         this.author = author;
//         this.published = published;
//         this.isAvailable = true;
//     }
// }

// class Library {
//     constructor() {
//         this.books = [];
//     }

//     addBook(book) {
//         this.books.push(book);
//         console.log(`Book '${book.title}' added to the library.`);
//     }

//     checkOutBook(title) {
//         const book = this.books.find(book => book.title === title);

//         if (book) {
//             if (book.isAvailable) {
//                 book.isAvailable = false;
//                 console.log(`Book '${title}' checked out successfully.`);
//             } else {
//                 console.log(`Book '${title}' is not available for checkout.`);
//             }
//         } else {
//             console.log(`Book '${title}' not found in the library.`);
//         }
//     }

//     returnBook(title) {
//         const book = this.books.find(book => book.title === title);

//         if (book) {
//             book.isAvailable = true;
//             console.log(`Book '${title}' returned to the library.`);
//         } else {
//             console.log(`Book '${title}' not found in the library.`);
//         }
//     }

//     listAvailableBooks() {
//         const availableBooks = this.books.filter(book => book.isAvailable);
//         if (availableBooks.length > 0) {
//             console.log("Available books in the library:");
//             availableBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));
//         } else {
//             console.log("No available books in the library.");
//         }
//     }
// }

// const library = new Library();

// const book1 = new Book("Hharry Potter", "Illa", 2019);
// const book2 = new Book("ttitanik", "Tereza", 2033);
// const book3 = new Book("cherpashki nindzia", "Egor", -3340);

// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// library.listAvailableBooks();

// library.checkOutBook("ttitanik");
// library.checkOutBook("ttitanik"); 

// library.listAvailableBooks();

// library.returnBook("ttitanik");

// library.listAvailableBooks();
