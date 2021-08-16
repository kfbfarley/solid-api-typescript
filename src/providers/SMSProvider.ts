interface Numbers {
    [index:number]:string
}

export interface Message{
    sender: string,
    numbers: Numbers,
    body: string
}

export interface SMSProvider {
    send(message: Message): Promise<void>
}