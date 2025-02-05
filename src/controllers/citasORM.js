import db from './db.js'

class CitasORM {
    static async getCitas() {
        try {
            const citas = await db.query('SELECT * FROM citas')
            return citas
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
        const { fecha, descripcion, pacienteId } = citaData
        try {
            const result = await db.query(
                'INSERT INTO citas (fecha, descripcion, paciente_id) VALUES ($1, $2, $3) RETURNING *',
                [fecha, descripcion, pacienteId]
            )
            return result.rows[0]
        } catch (error) {
            throw new Error('Error creating cita: ' + error.message)
        }
    }

    static async updateCita(id, citaData) {
        const { fecha, descripcion, pacienteId } = citaData
        try {
            const result = await db.query(
                'UPDATE citas SET fecha = $1, descripcion = $2, paciente_id = $3 WHERE id = $4 RETURNING *',
                [fecha, descripcion, pacienteId, id]
            )
            return result.rows[0]
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