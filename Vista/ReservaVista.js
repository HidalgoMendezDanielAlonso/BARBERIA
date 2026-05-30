// ==========================================
// 2. LA VISTA (View)
// Responsabilidad: Interactuar con el HTML (el DOM).
// Captura lo que el usuario escribe y mueve la pantalla. No procesa lógica.
// ==========================================
export class ReservaVista {
    constructor() {
        // Elementos de Reservas
        this.formularioReserva = document.getElementById("formReserva");
        this.seccionReservas = document.getElementById("reservas");

        // Elemento de Reclamos
        this.formularioReclamo = document.getElementById("formReclamo");
    }

    obtenerDatosReserva() {
        return {
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value
        };
    }

    // Capturar todos los campos del Libro de Reclamaciones
    obtenerDatosReclamo() {
        const inputs = this.formularioReclamo.querySelectorAll("input");
        const selects = this.formularioReclamo.querySelectorAll("select");
        const textareas = this.formularioReclamo.querySelectorAll("textarea");

        return {
            consumidor: {
                nombre: inputs[0].value,
                domicilio: inputs[1].value,
                dni: inputs[2].value,
                telefono: inputs[3].value,
                correo: inputs[4].value
            },
            bienContratado: {
                tipo: selects[0].value,
                monto: inputs[5].value,
                descripcion: textareas[0].value
            },
            reclamacion: {
                tipo: selects[1].value,
                detalle: textareas[1].value,
                pedido: textareas[2].value
            },
            fechaRegistro: new Date().toLocaleString()
        };
    }

    hacerScroll() {
        this.seccionReservas.scrollIntoView({ behavior: 'smooth' });
    }

    mostrarMensaje(servicio) {
        alert("Seleccionaste el servicio: " + servicio);
    }
}