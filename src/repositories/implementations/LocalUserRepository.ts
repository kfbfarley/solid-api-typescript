import { UserRepository } from '../UserRepository'
import { User } from '../../entities/User'

export class LocalUserRepository implements UserRepository{
    private users: User[] = [];
    
    async findById(user_id: string): Promise<User>{
        return this.users.find(user => user.user_id == user_id)
    }
    async exists(data: {email: string, phone: string}): Promise<User>{
        return this.users.find(user => user.email == data.email || user.phone == data.phone )
    }

    async create(user: User): Promise<void>{
        this.users.push(user)
    }
}