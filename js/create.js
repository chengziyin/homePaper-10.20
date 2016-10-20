var names = [
	'姓名','性别','出生年月','籍贯','现居住地','学历','工作地点','工作内容'
];

var m = 8;
var tables = document.createElement('table');
tables.border = 1;
var tableHead = document.createElement('thead');

for(var i = 0; i < m; i ++){
	var tableHeadItem = document.createElement('th');
	tableHead.appendChild(tableHeadItem);
	tableHeadItem.innerHTML = names[i];
}

tables.appendChild(tableHead);
document.body.appendChild(tables);

var btn = document.createElement('button');
btn.innerHTML = '增加信息';
btn.id = 'addInfo';
document.body.appendChild(btn);
btn.onclick = function(){
	show();
}

var addI = document.createElement('script');
addI.src = 'js/newInfo.js';
document.body.appendChild(addI);



