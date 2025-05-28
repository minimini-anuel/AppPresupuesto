let agregarDato = (event) =>{
    event.preventDefault();
    
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").valor;

if(descripcion!="" && valor !== ""){
    console.log("descipcion: "+ descripcion)
    console.log("valor: "+valor)
    }else{
        alert("Debe completar todos los campos")
    }
    console.log(tipo)
}
