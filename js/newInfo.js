
function show(){
	var showDiv = document.createElement('div');
	showDiv.setAttribute('class','showPal');
	document.body.appendChild(showDiv);
	
	var addPal = document.createElement('div');
	addPal.setAttribute('class','addPal');
	showDiv.appendChild(addPal);
	
	var palTitle = document.createElement('h2');
	palTitle.innerHTML = '添加学生信息';
	palTitle.setAttribute('class','palTitle');
	addPal.appendChild(palTitle);
	
	var x = document.createElement('button');
	x.innerHTML = 'X';
	x.setAttribute('class','exit');
	addPal.appendChild(x);
	x.onclick = function(){
		document.body.removeChild(showDiv);
	}
	
	for(var i = 0 ; i < m; i ++){
		var line = document.createElement('p');
		line.setAttribute('class','line');
		addPal.appendChild(line);
		
		var labels = document.createElement('label');
		labels.innerHTML = names[i];
		line.appendChild(labels);
		
		var inputPal = document.createElement('input');
		line.appendChild(inputPal);
		
	}
	
		var btns = [
			'确定','重置'
		];
		
		for(var i = 0; i < 2; i ++){
			var clickBtn = document.createElement('button');
			clickBtn.setAttribute('class','clickBtn');
			clickBtn.innerHTML = btns[i];
			addPal.appendChild(clickBtn);
		}
		var clickScript = document.createElement('script');
		clickScript.src = 'js/clickBtn.js';
		document.body.appendChild(clickScript);
}


