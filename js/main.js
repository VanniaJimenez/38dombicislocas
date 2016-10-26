function validateForm(){

var nombreApellido =  /[A-Z]/;  
var numeros = /[0-9]/;
var especiales = /[!@#$%^&"´*]/; 
var formatoMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([AZ-az])$/;


nombre = document.getElementById("name").value;
apellido = document.getElementById("lastname").value;
i_mail = document.getElementById("input-email").value;
i_password = document.getElementById("input-password").value;

//Todos los campos son obligatorios, excepto los dos últimos.
if( nombre == "" ){
	alert("Nombre es obligatorio");
}

if( apellido == "" ){
	alert("Apellido es obligatorio");
}

if( i_mail == "" ){
	alert("Correo electrónico es obligatorio");
}

if( i_password == "" ){
	alert("Password es obligatorio");
}


//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
if(nombre.match(especiales) || nombre.match(numeros))   
{   
alert('Nombre sólo permite caracteres de la A-Z'); 
}  

if(apellido.match(especiales) || apellido.match(numeros))   
{   
alert('Apellido sólo permite caracteres de la A-Z'); 
}  


//Para los campos nombre y apellido la primera letra debe ser mayúscula
if (nombre.substring(0,1).match(nombreApellido))   {   }  
else  
{   
alert('Primera letra del nombre debe ser mayúscula...!')  
}  

if (apellido.substring(0,1).match(nombreApellido))   {   }  
else  
{   
alert('Primera letra del apellido debe ser mayúscula...!')  
}  



//Validar que el campo email tenga un formato válido
if (formatoMail.test(i_mail) === false) 
{
alert('Formato de email no válido : name@domain.dfvd');
}



//El campo password debe tener al menos 6 caracteres
if(i_password.length<6){
	    alert('Password debe tener al menos 6 caracteres');
}



//El campo password no puede ser igual a "password" ó "123456" ó "098754
if (i_password === "password" || i_password === "123456" || i_password === "098754") 
        {
        alert('Password debe ser distinto a "password" ó "123456" ó "098754"');
        }


}