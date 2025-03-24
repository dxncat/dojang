export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
    created_at: string;
    updated_at: string;
}