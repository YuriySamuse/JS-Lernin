// let total = 0;
// let count = 10;
// while (count <= 10) {
// 	total += count;
// 	count += 1;
// }

// if (count <= 11) {
// 	count += 1;
// 	total += count;
// } else {
// 	total = 0;
// }
// console.log(total);

// //індекс маси тіла людини

// let weight = "88,3";
// let height = "1.75";

// weight = Number(weight.replace(",", "."));
// height = Number(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi);

//Цикл while (condition) {}
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
// 	console.log("clientCounter: ", clientCounter);
// 	clientCounter += 1;
// }

//цикли з передумовою DO..While
// let password = "";
// do {
// 	password = prompt("Пароль має містити мінімум 4 символи", "");
// } while (password.length < 5);
// console.log("Ввели пароль, символів: ", password);

// FOR

// const number = 15;
// for (let index = 0; index < number; index += 1) {
// 	if (index % 2 !== 0) {
// 		continue;
// 	}
// 	console.log("Ne parni i: ", index);
// }

//switch

// const value = 5;
// if (value === 1) {
// 	console.log("einz");
// } else if (value === 2) {
// 	console.log("zwei");
// } else if (value === 5) {
// 	console.log("funf");
// } else {
// 	console.log("defoult");
// }

// switch (value) {
// 	case 1:
// 		console.log("einz");
// 		break;
// 	case 2:
// 		console.log("zwei");
// 		break;
// 	case 5:
// 		console.log("funf");
// 		break;

// 	default:
// 		console.log("defoult");
// 		break;
// }

// Область видимости

// const a = 15;

// if (true) {
// 	console.log(a);
// }

// Лічильники

// const str = "hello world";

// for (let i = 0; i < str.length; i += 1) {
// 	console.log(str[i]);
// }

// let i = 0;
// while (i < str.length) {
// 	if (str[i] === "w") {
// 		console.log("Yes");
// 		break;
// 	}
// 	console.log("No", str[i]);
// 	i += 1;
// }

//Pracktice

// const value = prompt("Яка щфіційна назва JavaScript?");

// if (value === "ECMAScript") {
// 	alert("Yes");
// } else {
// 	alert("No, ECMAScript");
// }

// const hours = 14;
// const minutes = 0;

// if (minutes > 0) {
// 	console.log(`${hours} h. ${minutes} min.`);
// } else {
// 	console.log(`${hours} h.`);
// }

// const userInput = Number(prompt("Vvedit chislo!"));

// if (!userInput) {
// 	console.log("Ce 0");
// } else if (userInput > 0) {
// 	console.log("pozitivne");
// } else {
// 	console.log("videme chislo");
// }

// const userInput = Number(prompt("Vvedit chislo!"));

// if (!userInput) {
// 	console.log("Ce 0");
// } else if (userInput % 2) {
// 	console.log("ne parne");
// } else {
// 	console.log("parne chislo");
// }

// console.log(userInput % 2 ? "Ne parne" : "Parne");

// const a = 180;
// const b = 1;

// if (a > 100 && b > 100) {
// if (a > b) {
// 	console.log(a);
// } else {
// 	console.log(b);
// }
// 	console.log(a > b ? a : b);
// } else {
// 	console.log(b + 512);
// }

// let link = "https://my-site.com/about";
// if (!link.endsWith("/")) {
// 	link += "/";
// }
// console.log(link);

// let link = "https://my-site.com/about";
// if (!link.endsWith("/") && link.includes("my-site")) {
// 	link += "/";
// }
// console.log(link);

// let link = "https://my-site.com/about";

// console.log(
// 	!link.endsWith("/") && link.includes("my-site") ? (link += "/") : link
// );

// const hours = 16;

// if (hours < 17) {
// 	console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
// 	console.log("Expires");
// } else {
// 	console.log("Overdue");
// }

// const daysUntilDeadline = 4;

// if (daysUntilDeadline >= 3) {
// 	console.log("Дата у майбутньому");
// } else if (daysUntilDeadline === 2) {
// 	console.log("Післязавтра");
// } else if (daysUntilDeadline === 1) {
// 	console.log("Завтра");
// } else {
// 	console.log("Сьогодні");
// }

// if (daysUntilDeadline >= 0) {
// 	switch (daysUntilDeadline) {
// 		case 0:
// 			console.log("Сьогодні");
// 			break;
// 		case 1:
// 			console.log("Завтра");
// 			break;
// 		case 2:
// 			console.log("Післязавтра");
// 			break;
// 		default:
// 			console.log("Дата у майбутньому");
// 			break;
// 	}
// } else {
// 	console.log("swich quantity days");
// }

// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
// 	if (!(i % 5)) {
// 		console.log(i);
// 	}
// }

// const login = prompt("Логін");

// if (!login) {
// 	console.log("Скасовано");
// } else if (login === "Адмін") {
// 	const password = prompt("Пароль");
// 	if (!password) {
// 		console.log("Скасовано");
// 	} else
// 		console.log(
// 			password === "Я адмін" ? "Здраствуйте!" : "Невірний пароль"
// 		);
// } else {
// 	console.log("Я вас не знаю");
// }

// Simple JS Task
// Task 1

// let a = 34;
// let b = 20;
// let c = "Новая";
// a = a + 2; // = 36
// b = b - 5; // = 15
// c = c + " строка!"; //= "Новая строка"
// console.log(a);
// console.log(b);
// console.log(c);

// Task 2

// let salary = Number(prompt("Enter the amount of his salary"));
// if (!salary) {
// 	console.log("This field cannot be empty");
// } else {
// 	alert(
// 		`У вас премия 15 %. Теперь ваша зарплата составляет ${(salary +=
// 			salary * 0.15)}грн.`
// 	);

// 	alert(
// 		`Налоги в сумме 10% от суммы всех начислений (зарплата + премия), составляет ${(salary -=
// 			salary * 0.1)}грн.`
// 	);

// 	alert(`Трату в магазине в сумме 190, остаток: ${(salary -= 190)}грн.`);

// 	alert(`Половину отжала жена, осталось: ${(salary /= 2)}грн.`);
// }
// console.log("Вот такая жизнь, даже на пиво не осталось");

// Task 3

// let i = 1;
// console.log(`Как-то погожим деньком
// Бубуля спекла пирожков.`);
// console.log(`${i} уволок кот Василий,`);
// console.log(`${++i} слопали дед и внук Миша,`);
// console.log(`${++i} дали соседке Марине,`);
// console.log(
// 	`${--i} угостили малышек Алену и Анну,
// что к парку Везла тетя Валя в коляске.`
// );
// console.log(`${--i} передали доярке,
// Что носит нам сливки на праздник."`);
// console.log(`${(i += 4)} поделились с друзьями
// Двенадцатилетней Наташи,`);
// console.log(
// 	`Так сколько ж осталось их с нами,
// Коль в печке их было ${(i += 12)}?`
// );
// console.log(`Ах, да, Маргарита вернула ${(i -= 16)} пирожок на тарелку,
// Подруга Наташи сказала,
// что нужно отдать его белке.
// Но белку искать мы не стали,
// Пирог этот тоже не съели.
// Ну, как, вы уже подсчитали,
// То, сколько пирогов уцелели?`);

// Task 4

// let result;
// alert("Задумайте число!");
// alert("Теперь умножте его на 2");
// alert("А теперь прибавьте 7");
// const value = prompt("А теперь введите результат");
// if (!value) {
// 	console.log("Вы не задумали число?");
// } else if (!Number(value)) {
// 	console.log("введите число цифрами");
// } else {
// 	result = (value - 7) / 2;
// }

// alert(result);
// document.write(result);

// Task 5

// let names = [];
// do {
// 	names.push(prompt("Введите имя студента"));
// 	continue;
// } while (!names);
// console.log("student", names);

// function withdraw(amount, balance) {
// 	if (amount === 0) {
// 		console.log("Vvedit summu > 0");
// 		return;
// 	}
// 	if (amount > balance) {
// 		console.log("Ne doststnyo koshtiv");
// 		return;
// 	}

// 	console.log("Operaciya uspishna");
// }
// withdraw(400, 300);

const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [9, 10, 11, 12];

function sum(item) {
	for (let i = 0; i < item.length; i += 1) {
		item[i] = item[i] * 2;
	}
	console.log(item);
}

sum(arr);
sum(arr1);
sum(arr2);
