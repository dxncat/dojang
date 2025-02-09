import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TokenContext } from '../context/TokenContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mensajeError, setMensajeError] = useState('')
    const navigate = useNavigate()
    const { setToken } = useContext(TokenContext)

    const submitLogin = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/usuarios/login', requestOptions);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Error al iniciar sesión');
            }

            setToken(data.access_token);
            navigate('/');
        } catch (error) {
            setMensajeError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin();
    };

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 h-screen w-full bg-[#D0D3D9]'>

            {/* Contenedor de formulario */}

            <div className=' flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                    <h2 className='font-caveat text-4xl font-bold text-center py-6 text-[#034AA6]'>DOJANG</h2>
                    <div className='flex flex-col py-2'>
                        <label>Usuario</label>
                        <input
                            className='border p-2'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Contraseña</label>
                        <input
                            className='border p-2'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='text-red-500'>{mensajeError}</p>
                    <button className='border w-full my-5 py-5 bg-customGreen hover:bg-customYellow rounded-xl bg-red-600'>Inicia Sesión</button>
                    <div className='flex justify-between'>
                        <p>No tienes cuenta?</p>
                        <Link to={"/register"}><p className='text-[#034AA6]'>Crea tu cuenta</p></Link>
                    </div>
                </form>
            </div>

            {/* Contenedor de imagen */}

            <div className='hidden md:block'>
                <img className='w-full h-full object-cover' src="./login.svg" alt="imagen" />
            </div>

        </section>
    )
}

export default Login