// const emotion = 'love'

// switch (emotion) {
// 	case 'anger':
// 	case 'fear':
// 	case 'sadness':
// 		console.log('This is a Negative emotion')
// 		break
// 	case 'hope':
// 	case 'love':
// 	case 'calmness':
// 		console.log('It is a Positive emotion')
// 		break
// 	default:
// 		console.log('Invalid value')
// }



// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }

// const browser = "Firefox";
// let text
// switch (browser) {
//   case "Edge":
//     text = "You've got the Edge!";
//     break;
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     text = 'Ми підтримуємо і ці браузери';
//     break;
//   default:
//     text = 'Маємо надію, що ця сторінка виглядає добре!';
// }
// console.log(text);



// if (a1 === 0) {
//   output = 0;
// }
// if (a1 === 1) {
//   output = 1;
// }
// if (a1 === 2 || a1 === 3) {
//   output = "2,3";
// }

// let a1 = 0
// let output
// switch (a1) {
//   case 0:
//     output = 0;
//     break;
//   case 1:
//     output = 1;
//     break;
//   case 2:
//   case 3:
//     output = "2,3";
//     break;
//   default:
//     console.log("Invalid value");
// }
// console.log(output);


// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'

// let stars = 1
// let value
// switch (stars) {
//   case 1:
//     value = "20$";
//     break;
//   case 2:
//     value = "30$";
//     break;
//   case 3:
//     value = "50$";
//     break;
//   case 4:
//     value = "70$";
//     break;
//   case 5:
//     value = "120$";
//     break;
//   default:
//     console.log('Такої кількості зірок немає');
// }
// console.log(value);



// 1
// Напиши скрипт вибору опції доставки товару.
// Опція зберігається в змінній option:
//  1 - самовивіз, 2 - кур"єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонит менеджер'.

// let option = "кур'єр"
// let message;
// switch (option) {
//   case 'самовивіз':
//     message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
//     break;
//   case "кур'єр":
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case "пошта":
//     message = 'Посилка буде відправлена сьогодні';
//     break;
//   default:
//     console.log("Вам передзвоне менеджер");
// }
// console.log(message);



//  Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'.
//   За допомогою конструкції switch виведи на екран
//   назву місяця в залежності від обраної мови.

//   Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// let lang = "ua"
// let city

// switch (lang) {
//   case "ua":
//     city = "Kyiv";
//     break;
//   case "en":
//     city = "London";
//     break;
//   case "ru":
//     city = "Moscow";
//     break;
//   case "fr":
//     city = "Paris";
//     break;
//   default:
//     console.log("Invalid language");
// }
// console.log(city);








//  Якщо ваше ім’я містить більше 4 букв і прізвище більше 5,
//  то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “УПС”.

// const userName = "Serhii";
// const userSurname = "Leushkin";
// let fullNameLenght = 0;
// if (userName.length > 4 && userSurname.length > 5) {
//   const resault = userName.length + userSurname.length
//   console.log(resault);
// }
// else {
//   console.log('УПС')
// };