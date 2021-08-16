import { User } from '../entities/User'

export interface UserRepository{
    findById(user_id: string): Promise<User>
    exists(data: object) : Promise<User>
    create(user: User): Promise<void>
}