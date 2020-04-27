function Signup(){
	var fn = document.forms["signup"]["fname"].value;
	var ln = document.forms["signup"]["lname"].value;
	var e = document.forms["signup"]["email"].value;
	var p = document.forms["signup"]["pwd"].value;
	if (fn.length < 1){
		alert("Fill out first name");
		return false;
	}
	else if (ln.length < 1){
		alert("Fill out last name");
		return false;
	}
	else if (e.length < 1){
		alert("Fill out email");
		return false;
	}
	else if (p.length < 15){
		return false;
	}
	else{
		alert("Thanks for joining!");
		return true;
	}
}
