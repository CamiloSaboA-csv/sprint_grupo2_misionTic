
let enviar_registro;
let nombre_usuario;
let anoNacimiento_usuario;
let contrasena_usuario;




window.onload = validar_contrasena;
// COMENTAR HASTA AQUI PARA VALIDAR EL SPRINT 2

function validar_nombre_usuario(nombre) {
    if(nombre.charAt(0)==nombre.charAt(0).toUpperCase()){
        return true;
    }else{return false}
}

function validar_anoNacimiento_usuario(nacimiento){
    if(nacimiento<1900 || nacimiento> 2022 ){
        return false;
    }else{return true}
}

function validar_contrasena(texto){
    var abcd="a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z"
    var numeros="123456789"
    var [minu,mayus,numm, caracEspe]=[0,0,0,0];

    for (var i = 0; i<texto.length; i++){

        var caracter= texto.charAt(i)

        //console.log(caracter)
        
        if (abcd.includes(caracter)){
            minu++
        }else if ((abcd.toUpperCase()).includes(caracter)){
            mayus++
        }else if (numeros.includes(caracter)){
            numm++
        }else{caracEspe++};

        }
        
        //console.log(minu,mayus,numm, caracEspe)
        
    if (!(caracEspe<1 && minu>0 && mayus>0 && numm>0 && texto.length>5)){
        alert("contraseña invalida, complete los requerimientos correctamente")
        return false
    }else{ 
        alert("la contraseña ingresada es valida")
        return true}
}


module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;

module.exports.validar_nombre_usuario= validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;