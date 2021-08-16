import { CreateUserUseCase } from './CreateUserUsecase'

export class CreateUserController {
    constructor(
      private createUserUseCase: CreateUserUseCase,
    ) {}
  
    async handle(request: Request, response: Response): Promise<Response> {
        const { first_name, last_name, age, email, phone, password } = request.body

        try {
            await this.createUserUseCase.execute({
                first_name,
                last_name,
                age,
                email,
                phone,
                password
            })
        
            return response.status(201).send();  
        } catch (err) {
            return response.status(400).json({
            message: err.message || 'Unexpected error.'
            })
        }
    }
  }