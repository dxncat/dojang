export interface User {
    id: string;
    email: string;
    name: string;
    image: string;
    currentRange: {
        id: number;
        nombre: string;
        description: string;
    };
    isAdmin: boolean;
    isActive: boolean;
    createdAt: string;
}