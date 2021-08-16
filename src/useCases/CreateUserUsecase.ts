import { UserRepository } from '../repositories/UserRepository'
import { MailProvider } from '../providers/MailProvider'
import { SMSProvider } from '../providers/SMSProvider'
import { CreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../entities/User'
import config from '../config'

export class CreateUserUseCase {
    constructor(
        private users : UserRepository,
        private mail : MailProvider,
        private sms: SMSProvider
    ) {}

    async execute(data: CreateUserRequestDTO){
        const exists = await this.users.exists({email: data.email, phone: data.phone})

        if(exists){
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.users.create(user)

        await this.mail.send({
            to: {
                name: data.first_name,
                email: data.email,
            },
            from: {
                name: config.MAIL.FROM.name,
                email: config.MAIL.FROM.email
            },
            subject: config.MAIL.SUBJECT,
            body: `Dear ${data.first_name}, thank you for creating an account with us`
        })

        await this.sms.send({
            sender: config.SMS.SENDER,
            numbers: [data.phone],
            body: `Dear ${data.first_name}, thank you for creating an account with us`
        })
    }
}