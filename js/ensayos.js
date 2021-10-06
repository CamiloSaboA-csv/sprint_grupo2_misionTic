var texto="jairo alberto"

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
//validar_contrasena(texto)

function validar_nombre_usuario(nombre) {
    if(nombre.charAt(0)==nombre.charAt(0).toUpperCase()){
        console.log("correto")
    }console.log("incorreto")
}
validar_nombre_usuario(texto)