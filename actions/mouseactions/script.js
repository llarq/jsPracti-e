// Завдання:

// Створіть на екрані кружечок.
// -Коли клієнт наводить мишку на кружечок,
// він повинен змінювати свій колір на якийсь інший випадковий колір.
// -Коли мишка йде з кружечка,
// він повинен повертатися до свого початкового кольору.
// -Додатково, зробіть так, щоб під час руху мишки над кружечком
// (без клікання), колір кружечка плавно змінювався
// від початкового до нового випадкового кольору.
// 1)Знайдіть елемент - document.querySelectorAll('.circle').
// 2)запам'ятайте його початковий колір у змінній
// 3)створіть функцію для генерації випадкового RGB кольору
// 4)Для кружечка додайте слухачі подій:
// mouseover: мишка наводиться на el змініть його на випадковий колір
// mouseout: мишка йде з кружечка, поверніть до початкового кольору.
// mousemove: Коли мишка рухається над кружечком,
// змінюйте його колір(setInterval)


const circle = document.querySelector('.circle')
const currentColor = 'lightblue'
const colors = ["red", "green", "yellow", "orange", "purple", "pink"];


function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const onCircleOver = (event) => {
  // console.log(circle);
  // console.log(getRandomColor());
  // circle.style.backgroundColor = getRandomColor();
  setBgColor()
}
const onCircleLeave = (event) => {
  circle.style.backgroundColor = currentColor;
}
const onCircleMove = (event) => {
  // setInterval(setBgColor, 1000)
  // circle.style.backgroundColor = getRandomColor();
  setBgColor()
}
function setBgColor() {
  circle.style.backgroundColor = getRandomColor()
}


circle.addEventListener('mouseover', onCircleOver)
circle.addEventListener("mouseout", onCircleLeave)
circle.addEventListener("mousemove", onCircleMove)