import ORM from './citasORM.js'
import jwt from 'jsonwebtoken';

const webHookUrl = new URL('https://bustilliosapi.app.n8n.cloud/webhook/4ef22d53-7347-4b40-b244-107102c0d5cc')
const password = 'Popiyu77'

export default {
    getCitas: async (req, res) => {
        try {
            const citas = await ORM.getCitas()
            res.json(citas)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    getCita: async (req, res) => {
        try {
            const cita = await ORM.getCitaById(req.params.id)
            res.json(cita)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    createCita: async (req, res) => {
        try {
            const cita = await ORM.createCita(req.body)
            const event = {
                event: 'create',
                cita: cita
            }
            await fetch(webHookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt.sign(event, password)}`
                },
                body: JSON.stringify(event)
            })
            res.json(cita)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    updateCita: async (req, res) => {
        try {
            const cita = await ORM.updateCita(req.params.id, req.body)
            res.json(cita)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteCita: async (req, res) => {
        try {
            await ORM.deleteCita(req.params.id)
            res.json({ message: 'Cita eliminada' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}