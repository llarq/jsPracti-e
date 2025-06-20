// Об’єкт user
const user = {
	// name: 'John',
	// age: 30,
	email: 'john@example.com',
}

const { name = "Max", age = 29, email: userEmail } = user
// console.log(name, age, userEmail);

// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const { title, director: { name: directorName, nationality: directorNationality }, release_year, actors: {actortim, actorMorgan}, ratings: { imdb: ratingsImdb, rotten_tomatoes: ratingsRotten_tomatoes } } = movie 
// console.log(title, directorName, directorNationality, release_year, actortim, actorMorgan, ratingsImdb, ratingsRotten_tomatoes);



// Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}

// const { count, list: [{title, author, year }, killBook, thousandNinehundredEightyFour] } = books
// console.log(count, title, author, year, killBook, thousandNinehundredEightyFour);



// Дано масив об’єктів
// Написати функція яка буде отримувати масив
// та ім’я друга якого потрібно знайти
// Написати функцію яка буде повертати масив всіх імен друзів
// Написати функ,яка буде повертати масив імен друзів які онлайн
// Написати функцію яка буде повертати масив імен друзів які офлайн

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

function findFriendByName(friends, nameToFind) {
  for (const {name} of friends) {
    if (name === nameToFind) {
      return "Ми знайшли друга"
    }
  }
  return "Немає друга, не знайшли його"
}

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

function getAllNames(friends) {
  const names = []
  for (const friend of friends) {
    names.push(friend.name)
  }
  return names
}

// console.log(getAllNames(friends));

function getOnlineFriends(friends) {
  const onlineFriendsName = [];
  for (const friend of friends) {
    if (friend.online) {
      onlineFriendsName.push(friend.name);
    }
  }
  return onlineFriendsName
}

// console.log(getOnlineFriends(friends));

function getOfflineFriends(friends) {
  const offlineFriendsName = [];
  for (const {online, name} of friends) {
    if (!online) {
      offlineFriendsName.push(friend.name);
    }
  }
  return offlineFriendsName
}

// console.log(getOfflineFriends(friends));


// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }


const cart = {
	items: [],
	getItems() {
		return this.items
	},
	add(product) {
		this.items.push(product)
		return 'The product was added'
	},
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].name === productName) {
        // console.log("Знайшли продукт");
        this.items.splice(i, 1)
      }
    }
    return "this product was deleted"
  },
  clear() {
    this.items = []
    return "card was cleared"
  },
	countTotalPrice() {},
	increaseQuantity(productName) {},
	decreaseQuantity(productName) {},
}
// console.log(cart.getItems())
// console.table(cart.getItems());

console.log(cart.add({ name: '🍎', price: 50 }))
console.log(cart.add({ name: '🍇', price: 70 }))
console.log(cart.add({ name: '🍋', price: 60 }))
console.log(cart.add({ name: '🍓', price: 110 }))

console.log(cart.getItems());
console.log(cart.remove('🍎'))
console.log(cart.getItems());
console.log(cart.clear());
console.log(cart.getItems())


