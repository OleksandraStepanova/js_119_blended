// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// **************************** TASK 1 ************************************

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// const inndex = styles.indexOf('blues');
// styles[inndex] = "classic";
// // styles.splice(inndex, 1, "classic");
// console.log(styles);


// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i+1}: ${array[i]}`);
        
//     }
// }
// logItems(styles);

// **************************** TASK 2 ************************************

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     const name = prompt('What`s your name?');
//     if (array.includes(name)) {
//         alert(`Welcome, ${name}!`)
//     } else {
//         alert('User not found')
//     }
// }

// checkLogin(logins);


// **************************** TASK 3 ************************************

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage() {
//     let sum = 0;
//     let counter = 0;
//     for (const arg of arguments) {
//         if (typeof arg === "number") {
//             sum += arg;
//             counter++;
//         }
//     }
//     return sum / counter;
// }

// console.log(caclculateAverage(1, 5, 2, 7, 8));
// console.log(caclculateAverage(1, 5, false, 2, 7, "hello", 8));

// **************************** TASK 4 ************************************

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function culculateSum() {
    const newArr = [];
}