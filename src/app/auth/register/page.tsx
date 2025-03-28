import { RegisterForm } from "./components/RegisterForm";

export default function () {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="relative flex flex-col m-6 space-y-8 bg-yinmn-blue shadow-2xl rounded-2xl md:flex-row md:space-y-0"
            >
                <div className="relative">
                    <img
                        src="/auth.webp"
                        alt="imagen representativa de taekwondo"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
                    <div
                        className="absolute hidden bottom-10 right-6 p-6 bg-white/30 backdrop-blur-sm rounded drop-shadow-lg md:block"
                    >
                        <span className="text-black text-xl text-pretty">
                            Todo empieza con un solo paso
                        </span>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}