import { MailProvider, Message } from '../MailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import config from '../../config'

export class Mailer implements MailProvider{
    private transporter: Mail

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: config.AWS.SES.SERVER,
            port: config.AWS.SES.SERVER,
            secure: config.AWS.SES.SECURE,
            auth: {
                user: config.AWS.SES.USER,
                pass: config.AWS.SES.SECRET
            }
        })
    }
    
    async send(message: Message): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
    
}