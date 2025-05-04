// //Task 1
// function calcRectangleArea(width, height) {
//     if (typeof width !== 'number' || typeof height !== 'number') {
//         throw new Error('Параметри width і height повинні бути числами');
//     }
//     return width * height;
// }

// try {
//     let width = 10;
//     let height = 5;
//     let area = calcRectangleArea(width, height);
//     console.log(`Площа прямокутника: ${area}`);
// } catch (error) {
//     console.error(`Помилка: ${error.message}`);
// }

// // Task 2

// function checkAge() {
//     try {
//         let age = prompt("Вкажіть свій вік:");

//         if (age === "") {
//             throw new Error("The field is empty! Please enter your age");
//         }

//         if (isNaN(age)) {
//             throw new Error("Ви ввели нечислове значення!");
//         }

//         age = Number(age);
//         if (age < 14) {
//             throw new Error("Ваш вік менше 14 років. Доступ заборонено.");
//         }

//         alert("Доступ дозволено. Приємного перегляду!");
//     } catch (error) {
//         alert(`Помилка: ${error.name}\nОпис: ${error.message}`);
//     }
// }

// checkAge();

// // Task3 
// class MonthException {
//     constructor(message) {
//         this.name = "MonthException";
//         this.message = message;
//     }
// }

// function showMonthName(month) {
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     if (month < 1 || month > 12 || isNaN(month)) {
//         throw new MonthException("Incorrect month number");
//     }

//     return months[month - 1];
// }


// try {
//     console.log(showMonthName(6));
// } catch (error) {
//     console.log(`${error.name} ${error.message}`);
// }

// try {
//     console.log(showMonthName(9));
// } catch (error) {
//     console.log(`${error.name} ${error.message}`);
// }

// //Task 4
// function showUser(id) {
//     if (id < 0) {
//         throw new Error(`ID must not be negative: ${id}`);
//     }
//     return { id: id };
// }

// function showUsers(ids) {
//     const validUsers = [];

//     for (let id of ids) {
//         try {
//             const user = showUser(id);
//             validUsers.push(user);
//         } catch (error) {
//             console.error(error.message);
//         }
//     }

//     return validUsers;
// }

// const result = showUsers([9, 12, 47, 22]);
// console.log(result);

