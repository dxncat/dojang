import { auth } from "@/auth.config";

export default async function ProfilePage() {

    const session = await auth()

    return (
        <div>
            <p>ID: {session?.user.id}</p>
            <p>Email: {session?.user.email}</p>
            <p>Name: {session?.user.name}</p>
            <p>Range ID: {session?.user.rangoActual.id}</p>
            <p>Range Name: {session?.user.rangoActual.nombre}</p>
            <p>Range Description: {session?.user.rangoActual.description}</p>
            <p>Is Admin: {session?.user.isAdmin ? 'Yes' : 'No'}</p>
            <p>Is Active: {session?.user.isActive ? 'Yes' : 'No'}</p>
            <p>Created At: {session?.user.createdAt}</p>
        </div>
    )
}