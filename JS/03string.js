// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"


// const products = "telephone";
// const price = 7000;
// const message = `You picked ${products}, price per item is ${price} credits`;
// console.log(message);

// скрипт для їх замовлення
// товар, ціна за одну штуку, ціна доставки, виводити суму замовлення
// message - у форматі "You ordered <назва товару> worth <total price> credits"

// const products = "lime";
// const totalPrice = 450;
// const message = `You ordered ${products} worth ${totalPrice} credits`;
// console.log(message);




// 6 Отримати  останній символ :
// const fruit = 'апельсин';
// const lenght = (fruit.length)
// console.log(fruit[lenght - 1]);




// 7 чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру

// const frase = "Jason Neis".toLowerCase();
// const word = 'jAsOn'.toLowerCase();
// console.log(frase.includes(word));




// 8 "styles.css", перевірити чи закінчується на ".css", ".js"

// const fileName = "styles.css";
// console.log(fileName.endsWith('.css'));
// console.log(fileName.endsWith('.js'));




// Створити скрипт, який буде отримувати від користувача число
// (кількість хвилин) і буде виводити рядок в форматі часу як результат.
// Наприклад 80 виведе 01:20
//          450 =>     07:30

const number = 123;
const minutes = number % 60;
const hours = Math.floor(number / 60)
const modHours = String(hours).padStart(2, 0);
const modMinutes = String(hours).padStart(2, 0);
const phraseForTime = `${modHours}:${modMinutes}`;
console.log(phraseForTime);


// скільки хв в годині? 60
// як вирахувати кількість годин з хвилин? n / 60
// який метод округлить число до меншого? round, floor
// який метод додасть на перед символи&  7  =>  07 padStart





