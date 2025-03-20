import { Key, Mail } from 'lucide-react'
import React from 'react'

export const LoginForm = () => {
    return (
        <form className='flex flex-col items-center'>
            <div className='flex items-center bg-gray-100 w-64 p-2 mb-3 rounded-lg'>
                <Mail className='text-gray-400 mr-2' />
                <input type="email" name='email' placeholder='Correo' className='text-gray-900 outline-none text-sm flex-1' />
            </div>
            <div className='flex items-center bg-gray-100 w-64 p-2 rounded-lg'>
                <Key className='text-gray-400 mr-2' />
                <input type="password" name='password' placeholder='Contraseña' className='text-gray-900 outline-none text-sm flex-1' />
            </div>
            <button className="border-2 border-white rounded-lg px-12 py-2 inline-block font-semibold mt-16 hover:bg-white hover:text-gray-800 transition-all cursor-pointer">
                Iniciar Sesión
            </button>
        </form>
    )
}
