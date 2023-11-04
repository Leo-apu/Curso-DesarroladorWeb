function datos(){
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let dni = document.getElementById('dni').value;
let email = document.getElementById('email').value;
let telefono = document.getElementById('telefono').value;
let tipoSeguro = document.getElementById('tipoSeguro').value;
let monto = "";

switch(tipoSeguro){
    case 'basico':
        monto = '$ 500';
        break;
    case 'intermedio':
        monto = '$ 1000';
        break;
    case 'premium':
        monto = '$ 1500';
        break;
    default:
        monto = '$ 500';
}

alert("DATOS : \n" + 
"Nombre : "+nombre +
"\nApellido : "+ apellido +
"\nDNI : "+ dni +
"\nEmail : "+ email +
"\nTelefono : "+ telefono +
"\nTipo de Seguro : "+ tipoSeguro +
"\nMonto de Seguro : "+ monto);

//return true;
} 

