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
    image?: string;
}

interface seedPackages {
    name: string;
    hours: number;
    price: number;
    description: string;
}

interface seedPost {
    title: string;
    content: string;
}

interface InitialData {
    ranges: seedRange[];
    users: seedUser[];
    posts: seedPost[];
    packages: seedPackages[];
}

export const initialData: InitialData = {
    packages: [
        {
            name: "Iniciación Taekwondo (50 horas)",
            hours: 50,
            price: 450000,
            description: `Paquete ideal para dar tus primeros pasos en el arte marcial. Incluye:
    - Acceso ilimitado a clases grupales hasta completar las 50 horas
    - Uniforme de entrenamiento básico (dobok blanco)
    - Evaluación técnica inicial sin costo
    - Sesión de inducción personalizada
    - Manual digital de fundamentos del Taekwondo WT
    - Las horas son acumulables y no expiran
    - Posibilidad de complementar con clases privadas (valor adicional)`
        },
        {
            name: "Ascenso Básico (100 horas)",
            hours: 100,
            price: 850000,
            description: `Diseñado específicamente para tu primer ascenso de rango:
    - Todas las horas necesarias para pasar de 10° a 9° Kup
    - Kit de inicio (vendas y protector bucal)
    - Acceso prioritario a seminarios básicos
    - Asesoría permanente en el desarrollo técnico
    - Derecho a presentar examen de ascenso incluido
    - Horas acumulables sin límite de tiempo
    - Reporte detallado de progreso cada 25 horas`
        },
        {
            name: "Avance Continuo (200 horas)",
            hours: 200,
            price: 1500000,
            description: `Para alumnos comprometidos con su progreso:
    - Paquete de horas permanente sin caducidad
    - 2 sesiones de técnicas especiales con maestros certificados
    - Acceso a material multimedia exclusivo
    - Descuento del 15% en equipamiento oficial
    - Evaluaciones periódicas de desempeño
    - Posibilidad de transferir horas a otro alumno (costo administrativo)
    - Las horas no utilizadas se mantienen indefinidamente`
        },
        {
            name: "Excelencia Marcial (300 horas)",
            hours: 300,
            price: 2100000,
            description: `Experiencia de entrenamiento premium:
    - Horas permanentes para uso ilimitado en el tiempo
    - 4 clases privadas incluidas con maestros titulados
    - Uniforme de competencia de regalo
    - Acceso vitalicio a la biblioteca técnica digital
    - Participación garantizada en torneos internos
    - Descuentos del 20% en eventos especiales
    - Asesoría nutricional básica permanente
    - Las horas adquiridas nunca pierden validez`
        },
        {
            name: "Maestría (500 horas)",
            hours: 500,
            price: 3200000,
            description: `Camino hacia el cinturón negro:
    - Inversión permanente en tu desarrollo marcial
    - 8 sesiones privadas con Grand Master
    - Kit completo de protección profesional
    - Acceso ilimitado a todas las clases grupales
    - Certificación internacional incluida
    - Derecho a asistir como observador a exámenes de grados
    - Horas transferibles a familiares directos
    - Garantía de por vida sobre las horas adquiridas`
        },
        {
            name: "Legado Familiar (800 horas)",
            hours: 800,
            price: 4800000,
            description: `Para familias que ven el Taekwondo como estilo de vida:
    - Horas de uso permanente para hasta 4 familiares
    - 16 clases privadas familiares incluidas
    - 4 uniformes premium de alta gama
    - Membresía dorada con beneficios exclusivos
    - Acceso a eventos cerrados para miembros
    - Fotografía profesional familiar anual
    - Asesoría legal deportiva permanente
    - Las horas nunca caducan y son totalmente transferibles
    - Programa de lealtad con recompensas acumulativas`
        }
    ],
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
            isAdmin: true,
            image: "https://res.cloudinary.com/dixjvn0t7/image/upload/v1742827867/lggwj6neyqugf5m38su5.jpg"
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