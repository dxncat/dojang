"use client";

import { CircleAlert } from 'lucide-react'
import clsx from 'clsx'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { login, registerUser } from '@/actions';
import { titleFont } from '@/config/fonts';

type FormInputs = {
    name: string;
    email: string;
    password: string;
}

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (data: FormInputs) => {
        setErrorMessage('')
        const { name, email, password } = data
        const res = await registerUser(name, email, password)

        if (!res.ok) {
            setErrorMessage(res.message)
            return
        }

        await login(email.toLowerCase(), password)
        window.location.replace('/')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Bienvenido a <span className={`${titleFont.className} antialiased`}>DOJANG</span></span>
            <span className="font-light text-gray-400 mb-8">
                por favor crea una cuenta para ser parte de nuestra familia
            </span>

            <div className="py-4">
                <span className="mb-2 text-md">Nombre Completo</span>
                <input
                    type="text"
                    className={
                        clsx(
                            "w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500",
                            {
                                'border-red-500': !!errors.email
                            }
                        )
                    }
                    autoFocus
                    {...register("name", { required: true })}
                />
            </div>

            <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                    type="email"
                    className={
                        clsx(
                            "w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500",
                            {
                                'border-red-500': !!errors.email
                            }
                        )
                    }
                    {...register("email", { required: true })}
                />
            </div>

            <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                    type="password"
                    className={
                        clsx(
                            "w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500",
                            {
                                'border-red-500': !!errors.email
                            }
                        )
                    }
                    {...register("password", { required: true })}
                />
            </div>

            <span className="text-red-500">{errorMessage}</span>

            <button
                className="btn-login">
                Crear cuenta
            </button>

            <div className="text-center text-gray-400">
                Ya una cuenta?
                <Link href={'/auth/login'} className="font-bold text-penn-red-500 hover:text-penn-red-400"> Inicia sesión aquí</Link>
            </div>

        </form>
    )
}
