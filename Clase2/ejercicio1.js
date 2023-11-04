/** Participaron en la Resolucion
            Leandro Victorino Cruz
            Claudio Olivera Gonzalez
            Jonata Huarte
            Gisela Gomez
            Andres Mobrici
            Fernando Manuel Ledesma Sanchez
            Rodirgo Aubry
     */

function mostrarMensaje(c) {
    console.log("La suma se ha calculado. Es = "+ c);
}

function suma (a,b,callback){
    let c = a +b;
    callback( c);
}
suma(2, 3, mostrarMensaje);

/**¿Que es el tercer parámetro recibido?
El tercer parametro es una funcion que se ejecutara dentro de la
funcion suma desde de realizar la operacion suma.


¿En que casos es obligatorio desarrollar este tipo de funciones? 
Los callbacks se utilizan comúnmente en JavaScript para manejar
operaciones asincrónicas o para permitir que el código llame a 
una función después de que se haya completado una tarea 
específica. En este caso, la función callback se ejecutará 
después de calcular la suma de a y `b.

*/