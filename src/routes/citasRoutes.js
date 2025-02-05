import { Router } from 'express'
import controller from '../controllers/citasController.js'

const router = Router()

// Crear una nueva cita
router.post('/appointments', controller.createCita);

// Consultar una cita específica
router.get('/appointments/:id', controller.getCita);

// Actualizar detalles de una cita
router.put('/appointments/:id', controller.updateCita);

// Eliminar una cita
router.delete('/appointments/:id', controller.deleteCita);

// Listar todas las citas
router.get('/appointments', controller.getCitas);

export default router