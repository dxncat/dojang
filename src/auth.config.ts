import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";
import bcryptjs from "bcryptjs";

const allowedRoutesByRole = {
    admin: ["/admin", "/home", "/home/perfil", "/home/horarios"],
    user: ["/home", "/home/perfil", "/home/horarios"],
}

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: "/auth/login",
        newUser: "/auth/register",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isAdmin = auth?.user?.isAdmin || false
            const userRole = isAdmin ? "admin" : "user"
            const requestedRoute = nextUrl.pathname

            //rutas publicas (no requieren autenticación)
            const publicRoutes = ["/", "/auth/login", "/auth/register", "/nosotros", "/contacto", "/precios"]

            //permitir acceso a rutas publicas
            if (publicRoutes.includes(requestedRoute)) return true

            //verificar si el usuario esta autenticado
            if (!isLoggedIn) return Response.redirect(new URL('/auth/login', nextUrl))

            //rutas permitidas protegidas
            const isPostRoute = requestedRoute.startsWith("/post/")

            //verificar si el usuario tiene acceso a la ruta
            const allowedRoutes = allowedRoutesByRole[userRole] || []

            //verificar si el usuario tiene acceso a la ruta solicitada
            if (allowedRoutes.includes(requestedRoute) || isPostRoute) return true

            //si el usuario no tiene acceso a la ruta, redirigir a la página de inicio
            return Response.redirect(new URL('/', nextUrl))

        },
        jwt({ token, user }) {
            if (user) {
                token.data = user
            }
            return token
        },
        session({ session, token, user }) {
            session.user = token.data as any
            return session
        }
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials)

                if (!parsedCredentials.success) return null

                const { email, password } = parsedCredentials.data

                // buscar usuario en la base de datos
                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase() },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        isAdmin: true,
                        image: true,
                        isActive: true,
                        createdAt: true,
                        password: true,
                        currentRange: true,
                    }
                })

                if (!user) return null

                if (!bcryptjs.compareSync(password, user.password)) return null

                //regresar el usuario sin el password
                const { password: _, ...rest } = user

                return rest
            }
        })
    ]
}


export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)
