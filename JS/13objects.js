const apartment = {
	descr: 'Spacious apartment in the city center',
	rating: 4,
	price: 2153,
}
const valuess = []
const keys = Object.keys(apartment);
// console.log(keys);

for (const key of keys) {
  valuess.push(apartment[key])
}

// console.log(valuess);

const newValues = Object.values(apartment)
// console.log(newValues);

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
}
const entries = Object.entries(feedback)
// console.log(entries);
// console.table(entries);



// 1
// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості
// hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex)
  rgbColors.push(color.rgb)
}
// console.log(hexColors);
// console.log(rgbColors);



// 2
// Доповни код функції так, щоб вона шукала об'єкт продукту
// з певним ім'ям (властивість name) в масиві products і
// повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений повертати null.
const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

const productName = "Radar";

const getProductPrice = (productName) => {
  for (const product of products) {
		console.log(product.name);
		if (product.name === productName) {
			return product.price
		}
  }
  return null
}

// console.log(getProductPrice("Radar"));


// 0
// Скопіювати масив викор розпорошення 
const numberss = [1, 2, 3, 54, 12];
// Скопіювати обєкт викор розпорошення 
const apartment1 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const apartmentsCopy = {
  ...apartment1
} 
const numbersCopy = [...numberss]
	

// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// getExtremeScores([89, 64, 42, 17, 93, 51, 26]) //{ best: 93, worst: 17 }
// getExtremeScores([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }
const getExtremeScores = (scores) => {
  const maxScore = Math.max(...scores)
  const minScore = Math.min(...scores)
  console.log(maxScore, minScore);
  
  const score = {
		best: maxScore,
		worst: minScore,
  }

  return score
}

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]))


// Використовуючи синтаксис залишкових параметрів,
// створи функцію add() так,
// щоб вона приймала будь-яку кількість аргументів у параметр args
//  і повертала їхню суму


const add = (...args) => {
  let total = 0; 
  for (const num of args) {
    total += num
  }
  return total
}

console.log(add(12, 4, 11, 48)) // 75
console.log(add(32, 6, 13, 19, 8)) // 78