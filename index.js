
/*
Este es un programita para calcular el promedio de cualquier alumno,
sin importar la cantidad de notas que tengan.
*/
const registro = () =>{var notas;
    var promedio;
    var suma=0;
    
    var nombre= prompt("Ingrese el nombre del alumno a promediar")
    var nnotas= parseInt(prompt("Digite la cantidad de notas a promediar"))
    
    for(i=0; i < nnotas; i++){
        var notas= parseInt (prompt("Digite la nota" + i));
        suma = suma + notas;
    }
    
    promedio = suma/nnotas;
    alert("Su promedio de notas es " + promedio);
    
    if(promedio>3)
    {
        alert(  nombre+ "aprobo con promedio de" + promedio);
    }
    else{
        alert(  nombre+ "no aprobo por que su promedio fue de" + promedio);
    }
    
}

const bienvenido = () =>{
    alert("Buenas!");
    let respuesta = prompt(`¿Quiere calcular el promedio del alumno?
    1 = Si
    2 = No
    `) ;
    if(respuesta.toLowerCase() == "si" || parseInt(respuesta) == 1){
        registro();
    }else{
        alert("Perfecto, adios!!!");
    }
}