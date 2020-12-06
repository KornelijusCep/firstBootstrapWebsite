function validateLoginForm() {
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;
  var text;

  if (email == "" && password == "") {
    text = "Neivestas elektroninis paštas ir slaptažodis";
    error_message.innerHTML = text;
    return false;
  }
  else if ( email == "" && password != "")
  {
  	text = "Neivestas elektroninis paštas";
  	error_message.innerHTML = text;
    return false;
  }
  else if ( email != "" && password == "")
  {
  	text = "Neivestas slaptažodis";
  	error_message.innerHTML = text;
    return false;
  }
  else {
  	text = "Sėkmingai prisijungėte";
  	error_message.innerHTML = text;
  	return true;
  }
}


function validateRegisterForm() {
  var x = document.forms["registerForm"]["username"].value;
  var y = document.forms["registerForm"]["email"].value;
  var z = document.forms["registerForm"]["password"].value;
  var w = document.forms["registerForm"]["repeatPassword"].value;

  if (x == "" || y == "") {
    alert("Neivesti asmeniniai duomenys");
    return false;
  }
  else if ( z == "")
  {
  	alert("Neįvestas slaptažodis");
    return false;
  }
  else if ( w == "")
  {
  	alert("Neįvestas pakartotinas slaptažodis");
    return false;
  }
  else if ( z != w)
  {
  	alert("Slaptažodžiai nesutampa!");
    return false;
  }
  else {
  	alert("Sėkmingai užsiregistravote");
  	return true;
  }
}