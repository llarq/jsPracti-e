// 1.
// Створити функцію hello1(),
// яка при визові буде вертати текст “Привіт JavaScript”.
// const hello = function () {
//   return "Привіт JavaScript"
// }
// console.log(hello());
// const hello = () => "Hello JavaScript";
// console.log(hello());


// 2.
// Напишіть функцію hello2(),
//  яка при виклику буде приймати змінну name (наприклад, «Василь»)
//  і виводити рядок (в нашому випадку «Привіт, Василь»).
// const hello2 = function (name) {
//   return "Привіт" + name
// }
// const name = "Роман"
// //   console.log(hello2(name));
// const hello1 = () => "Hello" + " " + name;
// console.log(hello1());

// 4.
// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів.
//  Перевірте її роботу.

// const mul = function (n, m) {
//   const sum = n + m;
//   const minus = n - m;
//   const multiply = n * m;
//   return [sum, minus, multiply]
// }
// console.log(mul(10, 5));

// const mul = (n, m) => {
// 	const sum = n + m
// 	const minus = n - m;
// 	const multiply = n * m;
// 	return [sum, minus, multiply]
// }
// console.log(mul(10, 5))


// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення
// `${item} is available to order!`
// якщо немає  "Sorry! We are out of stock!";

// const checkStorage = function (storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item} is available to order!`)
//     return
//   }
//   console.log('Sorry! We are out of stock!')
//   return
// }

// checkStorage(['apple', 'plum', 'pear'], 'pLuM')

// ================================================================== or

// const checkStorage = (storage, item) => {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item} is available to order!`)
//     return
//   }
//   console.log('Sorry! We are out of stock!')
//   return
// }

// checkStorage(['apple', 'plum', 'pear'], 'pLuM')









// functions homework question 7 =>

// const allLogins = ["first", "second", "third", "fourth"]
// const isLoginValid = (logins) => {
//   if (logins.length >= 4 && logins.length <= 16) {
//       return true
//   }
//   return false
// }

// const isLoginValid = (login) => login.length >= 4 && login.length <= 16;

// console.log(isLoginValid("2222"));


// const isLoginUnique = (allLogins, login) => {
//   return allLogins.includes(login)
// }

// console.log(isLoginUnique(allLogins, "first"));

// const addLogin = (allLogins, login) => {
//   const isValid = isLoginValid(login);
//   console.log(isValid);
//   if (!isValid) {
//     return "Помилка! Логін має бути від 4 до 16 символів!"
//   }
//   const isUnique = isLoginUnique(allLogins, login);
//   console.log(isUnique);
//   if (!isUnique) {
//     return "Такий логін вже використовується!";
//   }

//   allLogins.push(login);
//   return "Логін успішно доданий!";
// }


// console.log(addLogin(allLogins, "s"));
// console.log(allLogins);

// =====================================================

// const allLogins = ['fgh', 'ghk', 'ffffff', 'eessesese']

// const isLoginValid = login => login.length >= 4 && login.length <= 16

// const isLoginUnique = (allLogins, login) => !allLogins.includes(login)
// const addLogin = (allLogins, login) => {
// 	const isValid = isLoginValid(login)
// 	if (!isValid) {
// 		return 'Помилка! Логін повинен бути від 4 до 16 символів'
// 	}

// 	const isUniqe = isLoginUnique(allLogins, login)
// 	if (!isUniqe) {
// 		return 'Такий логін уже використовується!'
// 	}

// 	allLogins.push(login)
// 	return 'Логін успішно доданий!'
// }

// console.log(addLogin(allLogins, 'ffffff'))
// console.log(allLogins)