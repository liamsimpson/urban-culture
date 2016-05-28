//gets values from form and ouputs to webpage
function output() {
	//form values
	var fname = document.forms["registerform"]["fname"].value;
	var lname = document.forms["registerform"]["lname"].value;
	var email = document.forms["registerform"]["email"].value;
    var street = document.forms["registerform"]["street"].value;
	var suburb = document.forms["registerform"]["suburb"].value;
    var postCode = document.forms["registerform"]["postCode"].value;
    var state = document.forms["registerform"]["state"].value;
    var country = document.forms["registerform"]["country"].value;
	//check if the name is not empty
	if (!fname){
		//dislay error message
		fnameMessage.innerHTML = "Must enter first name.".fontcolor("red");
	}else{
		//display the first name on the page
		fnameMessage.innerHTML = fname;
	}
	if (!lname){
		//dislay error message
		lnameMessage.innerHTML = "Must enter last name.".fontcolor("red");
	} else{
		//display the last name on the page
		lnameMessage.innerHTML = lname;
	}
	if(email.indexOf("@") > -1){
		//display the email on the page
		emailMessage.innerHTML = email;
	} else {
		//dislay error message
		emailMessage.innerHTML = "Email address is invalid".fontcolor("red");
	}
	if (!street){
		//dislay error message
		streetMessage.innerHTML = "Must enter street.".fontcolor("red");
	} else{
		//display the last name on the page
		streetMessage.innerHTML = street;
	}
    if (!suburb){
		//dislay error message
		suburbMessage.innerHTML = "Must enter suburb.".fontcolor("red");
	} else{
		//display the last name on the page
		suburbMessage.innerHTML = suburb;
	}
    if (!postCode){
		//dislay error message
		postCodeMessage.innerHTML = "Must enter post code.".fontcolor("red");
	} else{
		//display the last name on the page
		postCodeMessage.innerHTML = postCode;
	}
    if (!state){
		//dislay error message
		stateMessage.innerHTML = "Must enter state.".fontcolor("red");
	} else{
		//display the last name on the page
		stateMessage.innerHTML = state;
	}
    if (!country){
		//dislay error message
		countryMessage.innerHTML = "Must enter country.".fontcolor("red");
	} else{
		//display the last name on the page
		countryMessage.innerHTML = country;
	}
	return false;
}