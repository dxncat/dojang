"use client";

import { CircleAlert, Key, Mail } from 'lucide-react'
import { authenticate } from '@/actions'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import React from 'react'

export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined)
    const router = useRouter()

    useEffect(() => {
        if (state === "Success") {
            router.replace('/')
        }
    }, [state])

    return (
        <form className='flex flex-col items-center' action={dispatch}>
            <div className='flex items-center bg-gray-100 w-64 p-2 mb-3 rounded-lg'>
                <Mail className='text-gray-400 mr-2' />
                <input type="email" name='email' placeholder='Correo' className='text-gray-900 outline-none text-sm flex-1' />
            </div>
            <div className='flex items-center bg-gray-100 w-64 p-2 rounded-lg'>
                <Key className='text-gray-400 mr-2' />
                <input type="password" name='password' placeholder='Contraseña' className='text-gray-900 outline-none text-sm flex-1' />
            </div>

            {state === "CredentialsSignin" && (
                <div className="flex flex-row mb-2">
                    <CircleAlert className="size-5 text-red-500" />
                    <p className="text-sm text-red-500">Credenciales Invalidas</p>
                </div>
            )}

            <LoginButton />
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