"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme(); // <-- Mover aquí

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, []);

    if (!load) {
        return null;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
        >
            {isDark ? (
                <Sun className="size-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
                <Moon className="size-6 text-blue-500 rotate-0 transition-all" />
            )}
        </div>
    );
}