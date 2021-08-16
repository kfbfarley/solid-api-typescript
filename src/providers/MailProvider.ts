interface Address {
    email: string
    name: string
}

export interface Message {
    to: Address
    from: Address
    subject: string
    body: string
}

export interface MailProvider {
    send(message: Message): Promise<void>
}