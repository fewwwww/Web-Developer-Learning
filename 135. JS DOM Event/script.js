var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var createButton = document.createElement("button");
    var createButtonText = document.createTextNode("Delete");
    createButton.appendChild(createButtonText);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createButton);
	ul.appendChild(li);
	createButton.addEventListener("click", deleteLi);
    li.addEventListener("click", toggle)
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var del = document.querySelectorAll('button');
var li_lst = document.querySelectorAll('li');

function deleteLi(){
	ul.removeChild(this.parentElement)
}

for (var i = 1; i < del.length; i++){
	del[i].addEventListener("click", deleteLi)
}

function toggle() {
  this.classList.toggle("done");
}

for (var i = 0; i < li_lst.length; i++) {
  li_lst[i].addEventListener("click", toggle);
}