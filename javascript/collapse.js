var sec = document.getElementsByClassName("section")
var i;
function collapse() {
	for (i = 0; i < sec.length; i++) {
	 	sec[i].addEventListener("click", function(){
	 		var info = this.nextElementSibling;
	 		if (info.style.display === "block"){
	 			info.style.display = "none";
	 		}
	 		else {
	 			info.style.display = "block";
	 		}
	 	});
	 }
}