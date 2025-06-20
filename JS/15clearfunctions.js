const players = [
	{ id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
	{ id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
	{ id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
	{ id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
	{ id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців

const playerNames = players.map(player => player.name)
// const playerNames = players.map({name} => name)
// console.log(playerNames);

// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

const playerPoints = players.map((player) => {
	return {...player, points: player.points * 1.1}
})
// console.log(playerPoints);

// Збільшити кількість годин гравця по id. Переписати на тернарник

const ubdatedPlayerHours = players.map((player) => {
	if (player.id === 'player-2') {
		player.timePlayed = player.timePlayed + 100;
		return {...player, player: player.timePlayed + 100}
	}
	return player
})
// console.log(ubdatedPlayerHours);



//filter()
// Отримати масив всіх гравців онлайн

const playerOnline = players.filter((player) => player.online)
// console.log([playerOnline]);

// Отримати масив всіх гравців офлайн

const playerOffline = players.filter(player => !player.online)
// console.log([playerOffline])

// Отримати масив всіх хардкорних гравців з часом більше 250

const bestPlayers = players.filter((player) => player.timePlayed > 250);
// console.log(bestPlayers);


//Find()
// Знайти гравця по id

const playerById = players.find((player) => (player.id === "player-1"))
// console.log(playerById());

// Знайти гравця по імені

const playerByName = players.find((player) => (player.name === "Kiwi"))


//every()

// Перевірити чи всі гравці мають час більше 200

const bestPlayers1 = players.every((player) => (player.timePlayed > 200))
// console.log(bestPlayers);


// Перевірити чи всі гравці онлайн

const onlinePlayers = players.every((player) => (player.online === true))
// console.log(onlinePlayers);


// Порахувати загальну к-ть годин проведену в іграх

const totalTime = players.reduce((acc, player) => (player.timePlayed + acc), 0)
// console.log(totalTime);

// Відсортувати за поінтами

const sortByPoints = [...players].sort((previousPlayer, nextPlayer) => previousPlayer.points - nextPlayer.points).map((player) => player.name)
// console.log(sortByPoints);

// Відсортувати за іменами (в алфавітному порядку)

const sortByNames = [...players].sort((previousPlayer, nextPlayer) => previousPlayer.name.localeCompare(nextPlayer.name)).map((player) => player.name)
console.log(sortByNames);

