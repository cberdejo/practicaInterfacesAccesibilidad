function less(tipo) {
    var val;
    var pre;
    var cantLibres = document.getElementById("asientosLibres").value;

    if (cantLibres > 0) {
        switch (tipo) {
            case 1:
                val = document.getElementById("cantOne").value;
                pre = document.getElementById("precioOne").value;
                if (val >= 1) {
                    document.getElementById("cantOne").value = val - 1;
                    document.getElementById("precioOne").value = pre - 8;
                    substractTotal(8)
                }
                break;
            case 2:
                val = document.getElementById("cantTwo").value;
                pre = document.getElementById("precioTwo").value;
                if (val >= 1) {
                    document.getElementById("cantTwo").value = val - 1;
                    document.getElementById("precioTwo").value = pre - 6;
                    substractTotal(6)
                }
                break;
            case 3:
                val = document.getElementById("cantThree").value;
                pre = document.getElementById("precioThree").value;
                if (val >= 1) {
                    document.getElementById("cantThree").value = val - 1;
                    document.getElementById("precioThree").value = pre - 15;
                    substractTotal(15)
                }
                break;
        }
        document.getElementById("asientosSeleccionados").value = cantLibres - 1;
        document.getElementById("asientosLibres").value = cantLibres - 1;
    } else {
        alert("Deseleccione algún asiento");
    }
}

function more(tipo) {
    var val;
    var pre;
    var cant = document.getElementById("asientosSeleccionados").value;

    if (cant <= 128) {
        switch (tipo) {
            case 1:
                val = document.getElementById("cantOne").value;
                pre = document.getElementById("precioOne").value;
                document.getElementById("cantOne").stepUp(1);
                document.getElementById("precioOne").stepUp(8);
                addTotal(8)
                break;
            case 2:
                val = document.getElementById("cantTwo").value;
                pre = document.getElementById("precioTwo").value;
                document.getElementById("cantTwo").stepUp(1);
                document.getElementById("precioTwo").stepUp(6);
                addTotal(6)
                break;
            case 3:
                val = document.getElementById("cantThree").value;
                pre = document.getElementById("precioThree").value;
                document.getElementById("cantThree").stepUp(1);
                document.getElementById("precioThree").stepUp(15);
                addTotal(15)
                break;
        }
        document.getElementById("asientosSeleccionados").stepUp();
        document.getElementById("asientosLibres").stepUp();
    } else {
        alert("No se pueden seleccionar más asientos");
    }
}

function substractTotal(cant) {
    var val = document.getElementById("pTotal").value;
    document.getElementById("pTotal").value = val - cant;
}

function addTotal(cant) {
    document.getElementById("pTotal").stepUp(cant);
}

function reservar(id) {
    var val = document.getElementById("asientosLibres").value;
    if (document.getElementById(id).value == 0 && val > 0) {
        document.getElementById(id).src = "images/sofa verde.svg";
        document.getElementById(id).value = 1;
        document.getElementById("asientosLibres").value = val - 1
    } else if (document.getElementById(id).value == 0 && val == 0) {
        alert("Seleccione más entradas");
    } else {
        document.getElementById(id).src = "images/sofa.svg";
        document.getElementById(id).value = 0;
        document.getElementById("asientosLibres").stepUp();

    }
}

function pagar() {
    var sel = document.getElementById("asientosSeleccionados").value;
    var lib = document.getElementById("asientosLibres").value;
    if (sel == 0 || lib > 0) {
        alert("Por favor, seleccione asientos a comprar o eliga algún asiento libre");
    } else {
        openForm();
        document.addEventListener('mouseup', function (e) {
            var container = document.getElementById('popUp');
            if (!container.contains(e.target)) {
                closeForm();
            }
        });
    }
}

function openForm() {
    document.getElementById("popUp").style.display = "block";
    document.getElementById("background").style.display = "block";
}
function closeForm() {
    document.getElementById("popUp").style.display = "none";
    document.getElementById("background").style.display = "none";
}

function comprar(){
    closeForm();
    alert("Gracias por su compra");
    window.location.href = './index.html';
}

