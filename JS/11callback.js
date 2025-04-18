// Зробити функції для фільтрації масиву чисел згідно переданого колбеку
// const array = [1, 2, 3, 4, 5]
// const filter = (arr, callback) => {
//   let filteredArr = []
//   for (const number of arr) {
//     const passTest = callback(number)
//     if (passTest) {
//       filteredArr.push(number)
//     }
//   }
//   return filteredArr
// } 
// const f1 = (number) => {
//   return number < 4;
// }
// console.log(filter(array, f1));
// const f2 = number => {
// 	return number < 3
// }
// console.log(filter(array, f2))
// const f3 = number => {
// 	return number > 3
// }
// console.log(filter(array, f3))


// // =========================================

// const filter = (array, test) => {
//   const filteredArray = [];

//   for (const el of array) {
//     // console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // const callback1 = (value) => value >= 3;

// const r1 = filter(arr, (value) => value >= 3);
// // console.log(r1);

// // const callback2 = (value) => value <= 4;

// const r2 = filter(arr, (value) => value <= 4);
// // console.log(r2);

// =======================================================


/*   1.
Напишіть функцію, яка приймає на вхід масив чисел 
і повертає новий масив, в якому кожний елемент є 
квадратом відповідного елементу вхідного масиву.
Знайдіть суму елементів масиву 
з використанням колбек-функції */

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredAndSumArray = function (array) {
  let newArr = [];
  for (const number of array) {
    newArr.push(number**2)
  }
  let sum = 0;
  for (const number of newArr) {
    sum += number
  }
  return sum
}
console.log(squaredAndSumArray(arr1));

