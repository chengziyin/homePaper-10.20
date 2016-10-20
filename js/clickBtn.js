var btnButton = document.getElementsByClassName('clickBtn');
var inputTxt = document.getElementsByTagName('input');
var txt = [];

	btnButton[0].onclick = function(){
		confirm('are you sure?');
		if(true){
			var tr = document.createElement('tr');
			for(var i = 0; i < inputTxt.length; i ++){
			txt[i]= inputTxt[i].value;
			var td = document.createElement('td');
			td.innerHTML = inputTxt[i].value;
			tr.appendChild(td);
			}
			this.parentNode.parentNode.remove();
			
			var tdAdd = document.createElement('td');
			tdAdd.setAttribute('class','moreBtn');
			tdAdd.innerHTML = '<button>删除</button><button>修改</button>';
			tr.appendChild(tdAdd);
			tables.appendChild(tr);
			
			var removeBtn = document.getElementsByClassName('moreBtn');
			for(var i = 0; i < removeBtn.length; i ++){
				removeBtn[i].childNodes[0].onclick = (function(i){
					return function(){
						i = this.parentNode.parentNode.rowIndex;
						this.parentNode.parentNode.parentNode.deleteRow(i);
					}
				})(i)
				
				removeBtn[i].childNodes[1].onclick = (function(i){
					return function(){
						tdNodes = this.parentNode.parentNode.childNodes;
						show();
						for(var h = 0; h < tdNodes.length - 1; h ++){
//							alert(tdNodes[h].innerHTML);
							inputTxt[h].value = tdNodes[h].innerHTML;
						}
					}
				})(i)
			}
		}else{
			alert('you have canceled');
		}
		
	}
	
	btnButton[1].onclick = function(){
		for(var i = 0; i < inputTxt.length; i ++){
			inputTxt[i].value = '';
		}
	}


