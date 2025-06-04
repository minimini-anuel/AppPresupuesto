let ingresosHTML="";
let egresosHTML="";
let totalIngresos = 0;
let totalEgresos = 0;
 
 
let agregarDato = (event) =>{
    event.preventDefault();
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;
 
    if (descripcion!== "" && valor !== "") {
        console.log("Descripción " + descripcion);
        console.log("Valor " + valor);
        if (tipo === "ingreso"){
            cargarIngresos(descripcion, Number(valor));
            document.getElementById("descripcion").value = "";
            document.getElementById("valor").value = "";
        }else if (tipo === "egreso"){
            cargarEgresos(descripcion, Number(valor));
            document.getElementById("descripcion").value = "";
            document.getElementById("valor").value = "";
 
        }
 
    }else {
        alert("Completa todos los campos.");
    }
    console.log(tipo);
}
 
let cargarIngresos = (descripcion, valor) => {
    ingresosHTML += crearIngresosHTML(descripcion, valor);
    totalIngresos += valor;
    document.getElementById("ingresoTotal").textContent = formatearCLP(totalIngresos);
    document.getElementById("presupuesto").textContent = formatearCLP(totalIngresos - totalEgresos);
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
 
}
 
 
let crearIngresosHTML = (descripcion, valor) => {
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
 
 
let cargarEgresos = (descripcion, valor) => {
    egresosHTML += crearEgresosHTML(descripcion, valor);
    totalEgresos += valor;
    document.getElementById("egresoTotal").textContent = formatearCLP(totalEgresos);
    document.getElementById("presupuesto").textContent = formatearCLP(totalIngresos - totalEgresos);
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
    document.getElementById("calcular_porcentaje").textContent = ((totalEgresos * 100) / totalIngresos).toFixed(1) + "%";
}
 
let crearEgresosHTML = (descripcion, valor) => {
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