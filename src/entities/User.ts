import { v4 as uuidv4 } from 'uuid'

export class User {

    public readonly user_id:string

    public first_name: string
    public last_name: string
    public age: number
    public email: string
    public phone: string
    public password: string
    public status: boolean
    public date_created: string
    public date_updated: string
    
    constructor(props: Omit<User, 'user_id' | 'status' | 'date_created' | 'date_updated'>, user_id ? : string){
        this.first_name = props.first_name
        this.last_name = props.last_name
        this.age = props.age
        this.email = props.email
        this.phone = props.phone
        this.password = props.password

        if(!user_id){
            this.user_id = uuidv4()
            this.status = false
            this.date_created = new Date().toLocaleString()
            this.date_updated = null
        }
    }
}