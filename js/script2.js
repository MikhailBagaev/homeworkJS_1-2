
// Создать программу, которая будет выполнять следующие
// действия:

// Циклом заполнить массив с помощью команды prompt
// в котором будет список из 5-ти любых имен
// Потом вывести с помощью prompt сообщение с просьбой
// ввести имя пользователя
// Введенное имя, циклом сравнивать с именами в массиве
// Если нет совпадения, то есть введенное имя пользователя 
// не существует в массиве - выдавать с помощью alert 
// сообщение об ошибке
// Если есть совпадение - выводить сообщение 
// "Андрей, вы успешно вошли". Вместо "Андрей" должно
// быть имя текущего пользователя

var arr = [1, 2, 3, 4, 5];

for (i = 0; i < 5; i++) {
arr[i] = prompt("Введите Ваше имя: ");
}
console.log(arr);

var name = prompt("Введите Ваше имя для входа: ");

for (i = 0; i < 5; i++) {
var result = arr[i].indexOf(name);
console.log(result);
if (result == 0) break;
}


if (result == 0) {
	alert(name + ', вы успешно вошли');
} else {
	alert('Вы не авторизованы');
}



















