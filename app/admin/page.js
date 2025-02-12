"use client";
import { createNewProduct } from "@/actions/createNewProduct";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import { useAuth } from "@/providers/AuthProvider"; // Cambiar a useAuth()
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminPage() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const { loggedIn } = useAuth(); // Usamos el hook personalizado en lugar de useContext
    const router = useRouter();

    const metodos = {
        name: setNombre,
        price: setPrecio,
    };

    useEffect(() => {
        if (!loggedIn) {
            router.push("/login");
        }
    }, [loggedIn, router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewProduct(nombre, precio);
        toast("Producto creado con éxito", { type: "success" });
        setNombre("");
        setPrecio("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (metodos[name]) {
            metodos[name](value);
        }
    };

    return (
        <>
            <PageTitle>Admin Panel</PageTitle>
            <form noValidate className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                <fieldset className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">Carga de producto</p>
                        <p className="text-sm text-gray-500">Nuevo producto</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de producto</label>
                            <input 
                                name="name" 
                                id="name" 
                                type="text" 
                                placeholder="Ej.: Monitor de pantalla" 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                onChange={handleChange} 
                                value={nombre}
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio (en pesos)</label>
                            <input 
                                name="price" 
                                id="price" 
                                type="text" 
                                placeholder="Ej.: $100" 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                onChange={handleChange} 
                                value={precio}
                            />
                        </div>
                        <Button className="w-full py-2 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">Crear producto</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default AdminPage;
