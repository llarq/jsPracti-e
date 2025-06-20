// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.


// const colorsArr = ['red', 'green', 'blue', 'yellow', 'orange', 'pink']

// const changeColorButton = document.querySelector(".js-btn")
// const onButtonChangeColorClick = (event) => {
//   // console.log("Click", event);
//   // event.target.style.backgroundColor = "red"
//   changeColorButton.style.backgroundColor =
// 		colorsArr[Math.round(Math.random() * (colorsArr.length - 1) + 1)]
  
// }
// changeColorButton.addEventListener('click', onButtonChangeColorClick)


// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.


const button = document.querySelector(".js-add-style-btn");
const text = document.querySelector(".text");

const onBtnClickAddClass = () => {
  console.log("click");

  // or

  // if (text.classList.contains('textUpdate')) {
	// 	text.classList.remove("textUpdate")
	// } else {
	// 	text.classList.add("textUpdate")
	// }
  // console.log(text.classList);

  // or

  text.classList.toggle("textUpdate")

}
button.addEventListener("click", onBtnClickAddClass)


// 4. Створити форму, після сабміту виводити на екран
// повідомлення ‘Ви зареєструвалися успішно! Дякую!’




const formElement = document.querySelector('.form')
const messageEl = document.querySelector('.greating')

const formHandler = event => {
  event.preventDefault()
  // console.log('Ви зареєструвалися успішно! Дякую!')
  const { name, surname } = event.currentTarget.elements
  // console.log(name, surname);
  messageEl.textContent = `${name.value} ${surname.value} Ви зареєструвалися успішно! Дякую!`;
  formElement.reset()
  setTimeout(() => (messageEl.style.display = 'block'), 500)
  setTimeout(() => (messageEl.style.display = 'none'), 2500)
}

formElement.addEventListener('submit', formHandler);


