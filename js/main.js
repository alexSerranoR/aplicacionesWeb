// ==========================================================
// main.js - JavaScript común a todas las páginas
// ----------------------------------------------------------
// En este primer microhito solo comprobamos que el archivo
// JavaScript está bien enlazado. Todavía NO usamos el DOM
// ni eventos (eso es del siguiente microhito).
// Para verlo: abrir la página, pulsar F12 y mirar la Consola.
// ==========================================================

// Constantes con datos generales de la aplicación
const NOMBRE_APP = "Centro de formación";
const ANIO = 2026;

// Función que construye un mensaje de bienvenida con una plantilla literal
function crearMensajeBienvenida(nombre, anio) {
    return `Bienvenido a ${nombre} (${anio}). JavaScript cargado correctamente.`;
}

// Mostramos el mensaje en la consola del navegador
console.log(crearMensajeBienvenida(NOMBRE_APP, ANIO));
