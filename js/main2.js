function validateForm(){
	var regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; ;
	
	var email= document.getElementById("email").value;
	var nombre=  (''). value;
	var mensaje= '';
	var errores= 0;

	if (!regexEmail.test[email]) {
		mensaje = "esta mal email";
		errores=false;
	}

	if (!regexEmail.test[nombre]) {
		mensaje = "esta mal nombre";
		errores=false;
	}
	if (!errores) {
	alert(mensaje);

	}
	return errores;
}

