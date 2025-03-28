"use client";

import { CircleAlert } from 'lucide-react'
import { authenticate } from '@/actions'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import React from 'react'
import Link from 'next/link';

export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined)
    const router = useRouter()

    useEffect(() => {
        if (state === "Success") {
            router.replace('/home')
        }
    }, [state])

    return (
        <form action={dispatch} className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Bienvenido de nuevo</span>
            <span className="font-light text-gray-400 mb-8">
                por favor inicia sesión para continuar
            </span>
            <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="email"
                />
            </div>
            <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                    type="password"
                    name="password"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
            </div>

            {state === "CredentialsSignin" && (
                <div className="flex flex-row mb-2">
                    <CircleAlert className="size-5 text-red-500" />
                    <p className="text-sm text-red-500">Credenciales Invalidas</p>
                </div>
            )}

            <LoginButton />

            <div className="text-center text-gray-400">
                Aun no tienes una cuenta?
                <Link href={'/auth/register'} className="font-bold text-penn-red-500 hover:text-penn-red-400"> Regístrate aquí</Link>
            </div>

        </form>
    )
}


function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={clsx({
                "btn-login": !pending,
                "btn-disabled": pending
            })}
            disabled={pending}
        >
            Iniciar Sesión
        </button>
    )
}