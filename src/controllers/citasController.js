import ORM from './citasORM.js'

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
            await fetch('https://jbustillos:Popiyu77@bustilliosapi.app.n8n.cloud/webhook-test/4ef22d53-7347-4b40-b244-107102c0d5cc', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cita: cita
                })
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