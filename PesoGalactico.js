function Calculo(){
	//declarar las variables
	var m, pl, g, p;
	//Recuperar las variables
	m=parseInt(document.getElementById('Mc').value);
    pl=parseInt(document.getElementById('Planeta').value);
	g=parseInt(document.getElementById('gravedad').value);
	//Realizar las operaciones
	p=m*g/9.81;
	document.getElementById("peso").value=p;
}
function Borrar(){
    document.getElementById("Mc").value="";
    document.getElementById("Planeta").value="";
    document.getElementById("gravedad").value="";
    document.getElementById("peso").value="";
}
function Salir(){
    return Salir;
}