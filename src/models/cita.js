/**
 * Creates an instance of Cita.
 * 
 * @class Cita
 * @param {number} id - The unique identifier for the appointment.
 * @param {string} fecha - The date of the appointment.
 * @param {string} hora - The time of the appointment.
 * @param {string} cliente - The client associated with the appointment.
 * @param {string} descripcion - A description of the appointment.
 */
class Cita {
    constructor(id, fecha, hora, cliente, descripcion) {
        this.id = id
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.descripcion = descripcion
    }
}

export default Cita