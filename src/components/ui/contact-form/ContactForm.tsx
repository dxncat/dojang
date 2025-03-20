"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulando envío del formulario
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })

        // Resetear el estado después de 3 segundos
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Nombre completo
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                        Teléfono
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu teléfono"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Asunto
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                >
                    <option value="" disabled>
                        Selecciona un asunto
                    </option>
                    <option value="info">Información general</option>
                    <option value="classes">Clases y horarios</option>
                    <option value="prices">Precios y tarifas</option>
                    <option value="trial">Clase de prueba</option>
                    <option value="other">Otro</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
            </div>

            <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${isSubmitting
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    }`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>

            {submitted && (
                <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
                    ¡Gracias! Tu mensaje ha sido enviado correctamente.
                </div>
            )}
        </form>
    )
}

