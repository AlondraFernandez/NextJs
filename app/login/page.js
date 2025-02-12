"use client";
import { useAuth } from "@/providers/AuthProvider"; // Asegúrate de que la ruta sea correcta
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, loggedIn } = useAuth(); // Accede a las funciones y estado de autenticación
    const router = useRouter();

    useEffect(() => {
        if (loggedIn) {
            router.push("/admin"); // Redirige al panel de administración si está logueado
        }
    }, [loggedIn, router]);

    const metodos = {
        "email": setEmail,
        "password": setPassword,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(email, password); // Intenta hacer login con Firebase
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
            alert("Credenciales incorrectas");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (metodos[name]) {
            metodos[name](value);
        }
    };

    return (
        <section className="grow grid place-content-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            onChange={handleChange}
                            value={email}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-secondary">Sign in</button>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
