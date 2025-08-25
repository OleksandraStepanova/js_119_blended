// Task 1
// const number = Number(prompt('Введіть число!'));

// if(number===10){
//     alert('Вірно!');
// }else{
//     alert('Невірно!')
// }

// alert(number===10?'Вірно!':'Невірно!');

// Task 2
// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if(min<=15){
//     alert(`${min} входить в першу чверть`);
// }else if(min<30){
//     alert(`${min} входить в другу чверть`);
// }else if(min<45){
//     alert(`${min} входить в третю чверть`);
// }else{
//     alert(`${min} входить в четверту чверть`);
// }

// Task 3
// const num = Number(prompt("Please enter a number between 1 and 4:"));
// let result;
// switch(num){
//     case 1:
//         result="winter";
//         break;
//     case 2:
//         result="spring";
//         break;
//     case 3:
//         result="summer";
//         break;
//     case 4:
//         result="autumn";
//         break;
//     default:
//         result="Sorry, but you must enter a value from 1 to 4 inclusive.";
// }
// console.log(result);

//Task 4
// const minutes = Number(prompt('Enter a number:'));
// const hours = Math.floor(minutes/60);
// const modifiedHours = String(hours).padStart(2,0);
// const leftMinutes=minutes%60;
// const modifiedMinutes = String(leftMinutes).padStart(2,0);
// console.log(`${modifiedHours}:${modifiedMinutes}`);

// Task 5

// const login = prompt('Enter your login:');
// if(login==="Адмін"){
//     const password =prompt('Enter your password:');

//     if(password==="Я головний"){
//         alert("Добрий день!");
//     }else{
//         alert("Невірний пароль!")
//     }
// }else if(login===''||login===null){
//     alert('Скасовано')
// }else{
//     alert("Я вас не знаю");
// }

// Task 6

// let counter=0;
// while(counter<=20){
//     console.log(counter);
//     counter++;
// }

// Task 7
// function getNumbers(min, max) {
//   let sum = 0;
//   let counter = max;

//   while (counter >= min) {
//     console.log(counter);
//     if (counter % 2 === 0) {
//       sum += counter;
//     }
//     counter--;
//   }
//   //   for (let i = max; i >= min; i--) {
//   //     console.log(i);
//   //     if (i % 2 === 0) {
//   //       sum += i;
//   //     }
//   //   }
//   return sum;
// }
// getNumbers(1, 20);
// console.log(getNumbers(1, 20));

// Task 8
// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     //   return a < b ? a : b;
//     return Math.min(a, b);
//   } else {
//     return 'Not a number!';
//   }
// }
// console.log(min(5, 20));

// Task 9
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Are you already 18?');
//   }
// }
// console.log(isAdult());

// Task 10
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} fizzbuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} buzz`);
//     }
//   }
// }

// fizzBuzz(15);
