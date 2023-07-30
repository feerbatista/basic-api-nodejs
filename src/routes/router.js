import express from 'express'
import { createUserHandler,getAllUserHandler,updateUserHandler,deleteUserHandler } from '../controllers/userController.js'

const router = express.Router()

router.post('/clientes', createUserHandler)
router.get('/clientes', getAllUserHandler)
router.put('/clientes/:id', updateUserHandler)
router.delete('/clientes/:id', deleteUserHandler)


export default router;