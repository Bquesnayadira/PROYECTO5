function datos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("DNI").value;
    var fechaNacimiento = document.getElementById("correo electronico").value;
    var f = document.getElementById("numero de celular").value;
    var m = document.getElementById("direccion").value;


    var mensaje = "Nombres: " + nombres 
    + "\nApellidos: " + apellidos
    + "\nDNI: " + DNI
    + "\nCorreo electrónico: " + email
    + "\nEstatura: " + numerodecelular
    + "\nPeso: " + direccion

    console.log(mensaje);
}


/*fijar los datos para poder pasar al siguientes*/
/*creamos un bucle para guardar todos los imputs*/


var inputs = document.getElementsByClassName('formulario_ _input');
for (var i =0; i < inputs.length; i++) {
    inputs[i].addEventListener('Keyup', function() {
        if(this.value.length>=1) {
          this.nextElementSibling.classList.add('fijar');
        } else {
          this.nextElementSibling.classList.add('fijar');  
        }
    });
} 


/*validamos todos los casilleros del formulario*/

function validar(){
    var nombres,apellidos,correo,numerodecelular,direccion, expresion;
    nombres = document.getElementById("nombres").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    numerodecelular= document.getElementById("numerodecelular").value;
    direccion = document.getElementById("direccion").value;
    expresion = /\w+@\w+\.+[a-z]/;


    /*evaluamos que todos los casilleros esten llenos con los datos*/
  
  
    if(nombres === "" || apellidos === "" || correo === "" || numerodecelular === "" || direccion ==="") {
        alert("Todos los campos son obligatorios");
        return false;
    }
 

    /*creamos el ancho de cada casillero*/


    else if(nombres.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.length>80){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }


    /*validamos el corrreo electronico con expresion.test*/


    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if(numerodecelular.length>9){
        alert("No es valido");
        return false;
    }


    /*validamos el numero de celular con isNaN*/


    else if(isNaN(numerodecelular.length>9)){
        alert("No es valido");
        return false;
    }
    else if(direccion.length>80){
        alert("La direccion es muy largo");
        return false;
    }
    
}

