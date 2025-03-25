'use client';

import { logout } from '@/actions';
import { titleFont } from '@/config/fonts';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { Clock, LogIn, LogOut, PanelsTopLeft, Shirt, Ticket, User, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


export const SideBar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSidebarOpen);
    const closeSideMenu = useUIStore(state => state.closeSidebar);

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user
    const isAdmin = session?.user?.isAdmin

    return (
        <div>

            {/* Background black */}
            {
                isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
                )
            }

            {/* Blur */}

            {
                isSideMenuOpen && (
                    <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
                )
            }

            {/* Sidemenu */}
            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen,
                    }
                )
            }>
                <X
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}
                />

                {isAuthenticated && (
                    <>
                        {/* Menu */}
                        <Link
                            href='/profile'
                            onClick={closeSideMenu}
                            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                            <User size={30} />
                            <span className='ml-3 text-xl'>Perfil</span>
                        </Link>

                        <Link
                            href='/'
                            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                            <Clock size={30} />
                            <span className='ml-3 text-xl'>Horarios</span>
                        </Link>

                        {/* Line Separator */}
                    </>
                )}

                {/* Admin */}
                {
                    isAdmin && (
                        <>
                            <div className='w-full h-px bg-gray-200 my-10' />
                            <Link
                                href='/'
                                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                                <Shirt size={30} />
                                <span className='ml-3 text-xl'>Productos</span>
                            </Link>

                            <Link
                                href='/'
                                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                                <Ticket size={30} />
                                <span className='ml-3 text-xl'>Ordenes</span>
                            </Link>

                            <Link
                                href='/'
                                className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                                <PanelsTopLeft size={30} />
                                <span className='ml-3 text-xl'>Usuarios</span>
                            </Link>
                        </>
                    )
                }


                {
                    isAuthenticated ? (
                        <>
                            <div className='w-full h-px bg-gray-200 my-10' />
                            <button
                                onClick={() => {
                                    logout()
                                    closeSideMenu()
                                }}
                                className='flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded cursor-pointer transition-all'>
                                <LogOut size={30} />
                                <span className='ml-3 text-xl'>Cerrar sesión</span>
                            </button>
                        </>
                    ) : (
                        <Link
                            href='/auth/login'
                            onClick={closeSideMenu}
                            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                            <LogIn size={30} />
                            <span className='ml-3 text-xl'>Iniciar sesión</span>
                        </Link>
                    )
                }

            </nav>

        </div>
    )
}
