import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
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
        } & DefaultSession['user'];
    }
}