let students = []
loadFromSite()
//получаем данные с сервера
function loadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response'];
	});
}


function loadStudenst() {

	let table = $('#tbl_all')

	for (let i = 0; i < students.length; i++) {
		//создадим новую строку
		let tr = $('<tr>')
		//создадим 3 ячейки
		let td1 = $('<td>' + students[i].id + '</td>')
		let td2 = $('<td>' + students[i].name + '</td>')
		let td3 = $('<td>' + students[i].surname + '</td>')
		let td4 = $('<td><button onclick="show_info('+i+')">Подробно</button></td>')
		
		//прикрепим ячейки к строке
		tr.append(td1).append(td2).append(td3).append(td4)
		//прикрепим строку к таблице
		table.append(tr)
	}
		
	$('#btn').disabled = true
}

function show_info(id) {
	//находим блок
	let div = $('#info')

	//создадим заголовок
	let header = $('<h1>Информация о студенте № '+id+'<h1>')

	//вывод имени и фамилии
	let name = $('<h3>'+students[id].name+' '+students[id].surname+'<h3>')
	 

	//вывод логотипа
	let img = $('<img src="http://217.71.129.139:4035/' + students[id].logo+'">')

	//очистим блок
	div.html('')
	//добавим элементы к блоку
	div.append(header).append(name).append(img)
}

