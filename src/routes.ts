import { Router } from 'express'
import { createUserController } from './useCases'

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handle(request, response)
})

export { router }