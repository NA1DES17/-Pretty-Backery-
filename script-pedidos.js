/* Variables de productos */
let vainilla = ["Vainilla", 0];
let limon = ["Limón", 0];
let naranja = ["Naranja", 0];
let ingles = ["Ingles", 0];
let marmolado = ["Marmolado", 0];
let chocolate = ["Chocolate", 0];
let pedido = [vainilla, limon, naranja, ingles, marmolado, chocolate];
let pedidoTerminado = [];
/* Variables de productos */

/* Variables para la función */
let nombre = document.querySelector("#name");
let frase = "Mi pedido: <br>\n <br>\n";
let mensaje = "Hola, soy " + nombre.value + " te pido: \n";
/* Variables para la función */

/* Funcionalidad botones parte de abajo */
let button = document.querySelector("#button");
button.onclick = agregar;
let confirmacion = document.querySelector("#confirmacion");
confirmacion.onclick = enviarMensaje;
let borrarPedido = document.querySelector("#borrarPedido");
borrarPedido.onclick = limpiarLista;
/* Funcionalidad botones parte de abajo */

/* Funcionalidad +;- */
botonVainilla.onclick = () => {
	vainilla[1]++;
	document.getElementById("mostradorVainilla").innerHTML = vainilla[1];
};
botonVainillaDel.onclick = () => {
	vainilla[1]--;
	document.getElementById("mostradorVainilla").innerHTML = vainilla[1];
};
botonLimon.onclick = () => {
	limon[1]++;
	document.getElementById("mostradorLimon").innerHTML = limon[1];
};
botonLimonDel.onclick = () => {
	limon[1]--;
	document.getElementById("mostradorLimon").innerHTML = limon[1];
};
botonNaranja.onclick = () => {
	naranja[1]++;
	document.getElementById("mostradorNaranja").innerHTML = naranja[1];
};
botonNaranjaDel.onclick = () => {
	naranja[1]--;
	document.getElementById("mostradorNaranja").innerHTML = naranja[1];
};
botonIngles.onclick = () => {
	ingles[1]++;
	document.getElementById("mostradorIngles").innerHTML = ingles[1];
};
botonInglesDel.onclick = () => {
	ingles[1]--;
	document.getElementById("mostradorIngles").innerHTML = ingles[1];
};
botonMarmolado.onclick = () => {
	marmolado[1]++;
	document.getElementById("mostradorMarmolado").innerHTML = marmolado[1];
};
botonMarmoladoDel.onclick = () => {
	marmolado[1]--;
	document.getElementById("mostradorMarmolado").innerHTML = marmolado[1];
};
botonChocolate.onclick = () => {
	chocolate[1]++;
	document.getElementById("mostradorChocolate").innerHTML = chocolate[1];
};
botonChocolateDel.onclick = () => {
	chocolate[1]--;
	document.getElementById("mostradorChocolate").innerHTML = chocolate[1];
};
/* Funcionalidad +;- */

/* Funciones */
function texto(array) {
	for (let i = 0; array.length > i; i++) {
		frase = frase + "- " + array[i][0] + ": " + array[i][1] + ". <br>\n";
	}
	return frase;
}
function agregar() {
	for (let i = 0; pedido.length > i; i++) {
		if (pedido[i][1] != 0) {
			pedidoTerminado.push(pedido[i]);
		}
	}
	document.getElementById("pedidoFinalizado").innerHTML =
		texto(pedidoTerminado);
	pedidoTerminado = [];
	frase = "Mi pedido: <br>\n <br>\n";
	return frase;
}
function limpiarLista() {
	window.location.reload();
}
function enviarMensaje() {
	mensaje = "Hola, soy " + nombre.value + " te pido: %0A";
	for (let i = 0; pedido.length > i; i++) {
		if (pedido[i][1] != 0) {
			pedidoTerminado.push(pedido[i]);
		}
	}
	for (let j = 0; pedidoTerminado.length > j; j++) {
		mensaje =
			mensaje +
			"- " +
			pedidoTerminado[j][0] +
			": " +
			pedidoTerminado[j][1] +
			". %0A";
	}
	/* console.log(mensaje); */
	if (nombre.value === "") {
		alert("Debe ingresar un nombre!!");
		pedidoTerminado = [];
		mensaje = "Hola, soy " + nombre.value + " te pido: %0A";
	} else {
		window.open(
			`https://api.whatsapp.com/send?phone=5491138561101&text=${mensaje}`
		);
		pedidoTerminado = [];
		mensaje = "Hola, soy " + nombre.value + " te pido: %0A";
	}
}
/* Funciones */