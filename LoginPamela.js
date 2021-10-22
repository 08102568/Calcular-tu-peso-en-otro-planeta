function validar() {
	// declarar las variables
	var U, C;
	//recuperar los datos
	U=document.getElementById("usuario").value;
	C=document.getElementById("pass").value;
	//validar los datos
	if(U=="Pamela"&&C=="12345"){
		alert("Usuario y Contraseña correctos");
		window.open("PesoGalactico.html");
		document.getElementById("usuario").value="";
		document.getElementById("pass").value="";
	}
	else{
		alert("Usuario y Contraseña incorrectos, verifica tus datos");
		document.getElementById("usuario").value="";
		document.getElementById("pass").value="";
	}
}