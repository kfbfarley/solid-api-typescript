import 'dotenv/config'

export default {
    AWS: {
        SES:{
            SERVER: process.env.AWS_SES_SERVER,
            PORT: process.env.AWS_SES_SERVER_PORT,
            USER: process.env.AWS_SES_USER,
            SECRET: process.env.AWS_SES_SECRET,
            SECURE: false
        }
    },
    SENDPULSE:{
        SMS: {
            USER: process.env.PULSE_USER,
            SECRET: process.env.PULSE_SECRET,
            STG: process.env.PULSE_STG
        }
    },
    MAIL: {
        FROM: {
            name: process.env.MAIL_FROM_NAME,
            email: process.env.MAIL_FROM
        },
        SUBJECT: process.env.MAIL_SUBJECT
    },
    SMS: {
        SENDER: process.env.SMS_SENDER,
        BODY: process.env.SMS_BODY
    }
}