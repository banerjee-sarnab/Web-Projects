// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", (e) => {
		try {
			if (e.target.innerHTML == "=") {
				string = eval(string);
				document.querySelector("input").value = string;
			} else if (e.target.innerHTML == "AC") {
				string = "";
				document.querySelector("input").value = string;
			} else if (e.target.innerHTML == '<img src="icon.png" alt="None">') {
				string = string.slice(0, -1);
				document.querySelector("input").value = string;
			} else if (e.target.innerHTML == "()") {
				string = "(" + string + ")";
				document.querySelector("input").value = string;
			} else if (e.target.innerHTML == "%") {
				string = eval(string + "/100");
				document.querySelector("input").value = string;
			} else {
				// console.log(e.target);
				string = string + e.target.innerHTML;
				document.querySelector("input").value = string;
			}
		} catch {
			alert("Invalid Format !");
		}
	});
});
