import bcryptjs from "bcryptjs";

interface seedRange {
    id: number;
    nombre: string;
    description: string;
}

interface seedUser {
    email: string;
    password: string;
    name: string;
    isAdmin?: boolean;
}

interface seedPost {
    title: string;
    content: string;
}

interface InitialData {
    ranges: seedRange[];
    users: seedUser[];
    posts: seedPost[];
}

export const initialData: InitialData = {
    ranges: [
        {
            id: 1,
            nombre: "10º Kup (Cinturón Blanco)",
            description: "El nivel inicial en taekwondo. Representa la pureza y el comienzo del camino."
        },
        {
            id: 2,
            nombre: "9º Kup (Cinturón Blanco con Punta Amarilla)",
            description: "El primer paso hacia el aprendizaje básico de técnicas y fundamentos."
        },
        {
            id: 3,
            nombre: "8º Kup (Cinturón Amarillo)",
            description: "Simboliza la tierra, donde la semilla del conocimiento comienza a crecer."
        },
        {
            id: 4,
            nombre: "7º Kup (Cinturón Amarillo con Punta Verde)",
            description: "El estudiante comienza a desarrollar habilidades más avanzadas."
        },
        {
            id: 5,
            nombre: "6º Kup (Cinturón Verde)",
            description: "Representa el crecimiento de la planta, simbolizando el progreso del estudiante."
        },
        {
            id: 6,
            nombre: "5º Kup (Cinturón Verde con Punta Azul)",
            description: "El estudiante continúa fortaleciendo sus habilidades y técnicas."
        },
        {
            id: 7,
            nombre: "4º Kup (Cinturón Azul)",
            description: "Simboliza el cielo, hacia donde la planta crece, representando la expansión del conocimiento."
        },
        {
            id: 8,
            nombre: "3º Kup (Cinturón Azul con Punta Roja)",
            description: "El estudiante demuestra un alto nivel de compromiso y destreza."
        },
        {
            id: 9,
            nombre: "2º Kup (Cinturón Rojo)",
            description: "Representa el peligro, indicando que el estudiante tiene un control significativo de sus técnicas."
        },
        {
            id: 10,
            nombre: "1º Kup (Cinturón Rojo con Punta Negra)",
            description: "El último paso antes del cinturón negro. Simboliza madurez y preparación."
        },
        {
            id: 11,
            nombre: "1º Dan (Cinturón Negro)",
            description: "El inicio de un nuevo camino. El estudiante se convierte en un practicante avanzado."
        },
        {
            id: 12,
            nombre: "2º Dan (Cinturón Negro)",
            description: "El practicante profundiza en su conocimiento y habilidades."
        },
        {
            id: 13,
            nombre: "3º Dan (Cinturón Negro)",
            description: "Un nivel avanzado que demuestra maestría y dedicación."
        },
        {
            id: 14,
            nombre: "4º Dan (Cinturón Negro)",
            description: "El practicante se convierte en un experto, con un entendimiento profundo del arte."
        },
        {
            id: 15,
            nombre: "5º Dan (Cinturón Negro)",
            description: "Un nivel de maestría que refleja años de dedicación y enseñanza."
        },
        {
            id: 16,
            nombre: "6º Dan (Cinturón Negro)",
            description: "El practicante es reconocido como un líder y mentor en el taekwondo."
        },
        {
            id: 17,
            nombre: "7º Dan (Cinturón Negro)",
            description: "Un nivel de gran prestigio, reservado para los más experimentados."
        },
        {
            id: 18,
            nombre: "8º Dan (Cinturón Negro)",
            description: "Representa la excelencia y el más alto nivel de habilidad."
        },
        {
            id: 19,
            nombre: "9º Dan (Cinturón Negro)",
            description: "El máximo nivel en taekwondo, reservado para los grandes maestros."
        }
    ],
    users: [
        {
            email: "testuser@test.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Test User"
        },
        {
            email: "testadmin@test.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Test Admin",
            isAdmin: true
        },
        {
            email: "user1@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Alice"
        },
        {
            email: "user2@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Bob"
        },
        {
            email: "user3@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Charlie"
        },
        {
            email: "user4@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "David"
        },
        {
            email: "user5@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Eve"
        },
        {
            email: "user6@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Frank"
        },
        {
            email: "user7@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Grace"
        },
        {
            email: "user8@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Hank"
        },
        {
            email: "user9@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Ivy"
        },
        {
            email: "user10@example.com",
            password: bcryptjs.hashSync("password", 10),
            name: "Jack"
        }
    ],
    posts: [
        {
            title: "Post 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 5",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 6",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 7",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 8",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 9",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Post 10",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
}