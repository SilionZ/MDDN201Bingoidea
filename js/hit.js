function doFirst(){
	mytry = document. getElementById('trytry');
	mytry.addEventListener("dragstart", startDrag, false);
	leftbox = document. getElementById('leftbox');
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();} , false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();} , false);
	leftbox.addEventListener("drop", dropped, false);
}

function startDrag(e) {
	var code = '<img src="img/e1.jpg">';
	e.dataTransfer.setData('leftbox', code);
}

function dropped(e) {
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('leftbox');
}


function doFirst2(){
	mytry = document. getElementById('trytry');
	mytry.addEventListener("dragstart", startDrag, false);
	leftbox = document. getElementById('leftbox2');
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();} , false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();} , false);
	leftbox.addEventListener("drop", dropped, false);
}

function startDrag(e) {
	var code = '<img src="img/e1.jpg">';
	e.dataTransfer.setData('leftbox2', code);
}

function dropped(e) {
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('leftbox2');
}


window.addEventListener("load", doFirst, false);
window.addEventListener("load", doFirst2, false);
