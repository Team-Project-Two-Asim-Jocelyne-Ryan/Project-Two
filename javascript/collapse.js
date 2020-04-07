function collapse() {
		var sec = document.getElementsByClassName("section");
		var information = document.getElementsByClassName("information");
		var disp = information.style.display.value;
	 	if (disp === "none") {
	 		information.style.display = "block";
	 	}
	 	if (disp === "block"){
	 		information.style.display = "none";
	 	}
}