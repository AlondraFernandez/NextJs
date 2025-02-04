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
            <form noValidate className="flex flex-col mx-auto space-y-12" onSubmit={handleSubmit}>
                <fieldset className="grid grid-cols-4 gap-6">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Carga de producto</p>
                        <p className="text-xs">Aquí puedes cargar tus productos de manera divertida (?</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">Nombre de producto</label>
                            <input 
                                name="name" 
                                id="name" 
                                type="text" 
                                placeholder="Ej.: Monitor de pantalla" 
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black border-primary/20 border bg-white p-2" 
                                onChange={handleChange} 
                                value={nombre}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="price" className="text-sm">Precio (en pesos)</label>
                            <input 
                                name="price" 
                                id="price" 
                                type="text" 
                                placeholder="Ej.: $100" 
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black border-primary/20 border bg-white p-2" 
                                onChange={handleChange} 
                                value={precio}
                            />
                        </div>
                        <Button className="col-span-full sm:col-span-3">Crear producto</Button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default AdminPage;
