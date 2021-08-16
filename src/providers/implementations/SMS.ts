import { SMSProvider, Message } from '../SMSProvider'
import sendpulse from 'sendpulse-api'
import config from '../../config'

export class SMS implements SMSProvider{

    async send(message: Message): Promise<void>{
        sendpulse.init(config.SENDPULSE.SMS.USER, config.SENDPULSE.SMS.SECRET, config.SENDPULSE.SMS.STG, (token) =>{
            if(token && token.is_error){
                throw new Error('Token error')
            }

            const callback = (data) => {
                console.log('sms sent')
            }

            const { sender, numbers, body } = message

            sendpulse.smsSend(callback, sender, numbers, body)
        })
    }
}