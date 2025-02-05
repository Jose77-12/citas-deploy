import db from './db.js'

class CitasORM {
    static async getCitas() {
        try {
            const citas = await db.query('SELECT * FROM citas')
            return [...citas]
        } catch (error) {
            throw new Error('Error fetching citas: ' + error.message)
        }
    }

    static async getCitaById(id) {
        try {
            const cita = await db.query('SELECT * FROM citas WHERE id = $1', [id])
            return cita[0]
        } catch (error) {
            throw new Error('Error fetching cita: ' + error.message)
        }
    }

    static async createCita(citaData) {
        const { fecha, hora, cliente, descripcion } = citaData
        try {
            const result = await db.query(
                'INSERT INTO citas (fecha, hora, cliente, descripcion) VALUES ($1, $2, $3, $4) RETURNING *',
                [fecha, hora, cliente, descripcion]
            )
            return result[0]
        } catch (error) {
            throw new Error('Error creating cita: ' + error.message)
        }
    }

    static async updateCita(id, citaData) {
        const { fecha, hora, cliente, descripcion } = citaData
        try {
            const result = await db.query(
                'UPDATE citas SET fecha = $1, hora = $2, cliente = $3, descripcion = $4 WHERE id = $5 RETURNING *',
                [fecha, hora, cliente, descripcion, id]
            )
            return result[0]
        } catch (error) {
            throw new Error('Error updating cita: ' + error.message)
        }
    }

    static async deleteCita(id) {
        try {
            await db.query('DELETE FROM citas WHERE id = $1', [id])
            return { message: 'Cita deleted successfully' }
        } catch (error) {
            throw new Error('Error deleting cita: ' + error.message)
        }
    }
}

export default CitasORM