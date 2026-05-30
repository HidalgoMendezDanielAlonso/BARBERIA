// ==========================================
// 3. EL CONTROLADOR (Controller)
// Responsabilidad: Es el "cerebro". Escucha los eventos del usuario, 
// pide datos a la Vista, se los pasa al Modelo y ejecuta la acción final.
// ==========================================
import { ReservaModelo } from '../modelo/ReservaModelo.js';
import { ReservaVista } from '../vista/ReservaVista.js';

export class ReservaControlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Escuchar Formulario de Reservas
        this.vista.formularioReserva.addEventListener("submit", (e) => {
            e.preventDefault();
            this.procesarFormularioReserva();
        });

        this.vista.formularioReclamo.addEventListener("submit", (e) => {
            e.preventDefault();
            this.procesarFormularioReclamo();
        });

        window.reservar = (servicio) => {
            this.vista.hacerScroll();
            this.vista.mostrarMensaje(servicio);
        };
    }

    procesarFormularioReserva() {
        const datos = this.vista.obtenerDatosReserva();
        const enlace = this.modelo.guardarYGenerarReserva(datos.nombre, datos.telefono, datos.fecha, datos.hora);
        window.open(enlace);
    }

    // Lógica para procesar el reclamo
    procesarFormularioReclamo() {
        const datosReclamo = this.vista.obtenerDatosReclamo();
        this.modelo.guardarReclamo(datosReclamo);
        alert("¡Hoja de Reclamación guardada con éxito en el sistema!");
        this.vista.formularioReclamo.reset(); // Limpia el formulario
    }
}

const app = new ReservaControlador(new ReservaModelo(), new ReservaVista());