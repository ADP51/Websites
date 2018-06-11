var body = document.querySelector("body");
var button = document.querySelector("button");
var isPink = false;

// button.addEventListener("click", function() {
// 	body.classList.toggle("pink");
// });

button.addEventListener("click", function() {
	if (isPink) {
		document.body.style.background = "white";
		isPink = false;
	} else {
		document.body.style.background = "pink";
		isPink = true;
	}
});

