// for (let i = 0; i <= 20; i *= 1) {
//   console.log(i);
// }

// const number = 10;
// let result = 0;
// for (let i = 1; i <= number; i += 1) {
//   result += i;
//   console.log(result);
  
// }
// console.log(result);

// for (let i = 1; i <= number; i += 1) {
// 	console.log(i, i / 2, i % 2 === 0)
// 	// console.log(10 % 2) //2 2 2 2 2
// 	// console.log(7 % 2) //2 2 2 1
// 	if (i % 2 === 0) {
// 		result += i
// 		console.log(result)
// 	}
// }


// Вивести в консоль числа від 1 до 5 всіма циклами

// const sum = 5
// let i = 1;
// for (i = 1; i <= sum; i += 1) {
//   console.log(i);
// }

// let index = 1;
// while (index <= sum) {
//   console.log(index)
//   index += 1;
// }


// let number = 0;
// while (number <= 5) {
//   console.log(number);
//   number += 1;
// };

//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end,
// яке ділиться на 5 без остачі

// const start = 6;
// const end = 17;
// let w;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     w = i;
//     break;
//   }
// }
// console.log(w)


// Виведіть в консоль всі непарні числа від 10 до 20
// за допомогою циклу for

// for (let i = 0; i <= 20; i += 1) {
//   // if (i % 2 === 0) {
//   //   console.log('parni');
//   //   continue;
//   // }
//   // console.log('ne parni', i);
//   // if (i % 2 !== ) {
//   //   console.log('ne parni', i);
//   // }
// }


// Напиши цикл, який пропонує в prompt ввести число, більше 100.
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// let userNumber;
// do {
//   userNumber = prompt('ВВедіть число більше 100')
// } while (userNumber < 100)
//   console.log(userNumber);
  


// // 1 змінні
const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;
for (let i = 0; i < employees; i += 1) {
  const salary = Math.random() * (maxSalary - minSalary) + minSalary;
  console.log(`Зарплата працівника номер ${i + 1}`, Math.floor(salary));
  totalSalary += Math.floor(salary);
}
console.log(totalSalary);


