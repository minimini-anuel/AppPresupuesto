let ingresosHTML;

let agregarDato = (event) =>{
    event.preventDefault();
    
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").valor;

if(descripcion!="" && valor !== ""){
    console.log("descipcion: "+ descripcion)
    console.log("valor: "+valor)
    if(tipo==="ingreso"){
        cargarIngresos(descripcion, Number(valor));

    }else if (tipo === "egreso"){
        cargarEgreso(descripcion,Number(valor));

    }
    document.getElementById("descripcion").value="";
    document.getElementById("valor")="";
}else{
        alert("Debe completar todos los campos")
    }
    console.log(tipo)
}

let cargarIngresos = (descripcion, valor) =>{
    ingresosHTML = ingresosHTML + crearIngresosHTML(descripcion,valor);
    totalIngresos=+valor;
    document.getElementById("ingresoTotal").textContent = totalIngresos
    document.getElementById("presuouesto").textContent = totalIngresos
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;   
}


let crearIngresosHTML=(descripcion,valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatearCLP(valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
 
}
function formatearCLP(numero) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(numero);
}