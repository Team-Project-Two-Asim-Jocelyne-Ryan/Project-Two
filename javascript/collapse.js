function collapse() {
		var sec = document.getElementsByClassName("section");
		var information = document.getElementsByClassName("information");
	 	if (information.style.display === "none") {
	 		information.style.display = "block";
	 	}
	 	if (information.style.display === "block"){
	 		information.style.display = "none";
	 	}
}