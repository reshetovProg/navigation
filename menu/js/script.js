let menuButton = document.getElementsByClassName("menu-button")[0];
let buttonTop = menuButton.getElementsByClassName("line-top")[0];
let buttonBottom = menuButton.getElementsByClassName("line-bottom")[0];
let buttonCenter = menuButton.getElementsByClassName("line-center")[0];
let menu = document.getElementsByClassName("menu")[0];
let menuList = document.querySelectorAll('li');
console.log(menuList);

for (let el of menuList) {
	let child = el.getElementsByTagName('a');
	console.log(child);
	if (child.length == 0) {
		el.classList.add("plus");
	}
}


menuButton.addEventListener('click', function () {
	buttonTop.classList.toggle("active");
	buttonBottom.classList.toggle("active");
	buttonCenter.classList.toggle("active");

	menu.classList.toggle("show");
});
