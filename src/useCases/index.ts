import { LocalUserRepository } from '../repositories/implementations/LocalUserRepository'
import { Mailer } from '../providers/implementations/Mailer'
import { SMS } from '../providers/implementations/SMS'
import { CreateUserUseCase } from './CreateUserUsecase'
import { CreateUserController } from './CreateUserController'

const users = new LocalUserRepository()
const mail = new Mailer()
const sms = new SMS()

const createUserUseCase = new CreateUserUseCase(users, mail, sms)
const createUserController = new CreateUserController(createUserUseCase)
  
export { createUserUseCase, createUserController }