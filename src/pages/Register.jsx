import React, { useContext, useState } from 'react'
import { TokenContext } from '../context/TokenContext'
import { useNavigate, Link } from 'react-router-dom'

function Registro() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [numeroDocumento, setNumeroDocumento] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mensajeError, setMensajeError] = useState('')
    const { setToken } = useContext(TokenContext)
    const navigate = useNavigate()

    const submitRegistro = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario: username,
                contrasena: password,
                nombre: nombre,
                apellido: apellido,
                email: email,
                numero_documento: numeroDocumento,
                rango_id: 1,
                rol_id: 2
            })
        }

        const response = await fetch('http://127.0.0.1:8000/usuarios/register', requestOptions)
        const data = await response.json()

        if (!response.ok) {
            setMensajeError(data.detail)
        } else {
            setToken(data.access_token)
            navigate('/')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            submitRegistro()
        } else {
            setMensajeError('Las contraseñas no coinciden')
        }
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 h-screen w-full bg-[#D0D3D9]'>

            {/* Contenedor de imagen */}

            <div className='hidden md:block'>
                <img className='w-full h-full object-cover' src="./login.svg" alt="imagen" />
            </div>

            {/* Contenedor de formulario */}

            <div className=' flex flex-col justify-center'>
                <form className='max-w-[500px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
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
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col py-2'>
                            <label>Nombre</label>
                            <input
                                className='border p-2'
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Apellido</label>
                            <input
                                className='border p-2'
                                type="text"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input
                                className='border p-2'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Numero de Documento</label>
                            <input
                                className='border p-2'
                                type="text"
                                value={numeroDocumento}
                                onChange={(e) => setNumeroDocumento(e.target.value)}
                            />
                        </div>
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
                    <div className='flex flex-col py-2'>
                        <label>Confirma Contraseña</label>
                        <input
                            className='border p-2'
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <p className='text-red-500'>{mensajeError}</p>
                    <button className='border w-full my-5 py-5 bg-customGreen hover:bg-customYellow rounded-xl bg-red-600'>Crear Cuenta</button>
                    <div className='flex justify-between'>
                        <p>Ya tienes una cuenta?</p>
                        <Link to={"/register"}><p className='text-[#034AA6]'>Inicia Sesión</p></Link>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Registro