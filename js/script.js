// Написать функцию pow, аналогичную Math.pow,
// которая должна возводить указанное число в 
// указанную степень. Указать число и степень 
// пользователь должен через команду prompt. 
// Результат выполнения функции вывести в консоль.
// Работать с целыми числами, большими, меньшими,
// и равными нулю. Бесконечности можно не обрабатывать.

function exponent(a, b) {
	var a = prompt('Введите целое число, которое нужно возвести в степень: '); 

	while (a % 1 > 0 && a % 1 < 1 ||  a == 0 ) {
		var a = prompt('Введите заново, число должно быть целым, больше 0: ');
	}     
    
	while (isNaN(a) || isNaN(parseFloat(a)) && isFinite(a)) {
		var a = prompt('Введите заново, значение может быть только числовым: ');
	} 

	var b = prompt('Введите необходимую степень, число должно быть целым: ');

    while (b % 1 > 0 && b % 1 < 1 || b == 0) {
		var b = prompt('Введите заново, число должно быть целым, больше 0:  ');
	} 

	while (isNaN(b) || isNaN(parseFloat(b)) && isFinite(b)) {
		var b = prompt('Введите заново, значение может быть только числовым: ');
	} 	
        
    var c = a;
    var i = 1;

	while (i < b) {
		c *= a;
		i++;
	}  
	alert(c);	
}

exponent();
	


