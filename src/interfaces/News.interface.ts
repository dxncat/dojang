import { User } from "./User.interface"

export interface News {
    id: string
    title: string
    content: string
    published: boolean
    author: User
    createdAt: string
    updatedAt: string
}