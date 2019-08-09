import { UserStore as UserStoreModel } from '.'

export as namespace IUserStore

export interface UserStore extends UserStoreModel {}

export interface IUser {
    _id?: string
    account: string
    password?: string
    category?: string
    createdAt?: string
}
