"use client"

import { useEffect, useRef } from "react"

export function Map() {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Esta función simula la carga de un mapa
        // En una implementación real, aquí cargarías Google Maps, Mapbox, etc.
        if (mapRef.current) {
            const mapElement = mapRef.current
            mapElement.innerHTML = ""

            // Crear un mapa simulado
            const mapSimulation = document.createElement("div")
            mapSimulation.className = "w-full h-full bg-gray-200 flex items-center justify-center"
            mapSimulation.innerHTML = `
        <div class="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mx-auto text-gray-500">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p class="mt-2 text-gray-600">DOJANG</p>
          <p class="text-sm text-gray-500">Av. Principal 123, Ciudad Deportiva</p>
        </div>
      `
            mapElement.appendChild(mapSimulation)
        }
    }, [])

    return (
        <div className="mt-6">
            <h3 className="font-medium mb-3">Nuestra ubicación</h3>
            <div ref={mapRef} className="w-full h-64 bg-gray-100 rounded-md overflow-hidden border border-gray-200"></div>
        </div>
    )
}

