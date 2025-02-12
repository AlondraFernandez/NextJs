import { getProductByIdFromServer } from "@/actions/getProductByIdFromServer";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export default async function ProductDetailsPage({ params }) {
    console.log("🔍 Parámetros recibidos en la página del producto:", params);

    if (!params || !params.id) {
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>❌ No se ha recibido un ID válido.</p>
                <Link href="/product" className="text-blue-500 underline">Volver a productos</Link>
            </>
        );
    }

    const { id } = params;
    console.log("🔹 Buscando producto con ID:", id);

    const { payload: producto, error } = await getProductByIdFromServer(id);

    if (error || !producto) {
        return (
            <>
                <PageTitle>Producto no encontrado</PageTitle>
                <p>⚠️ El producto con ID {id} no existe. Inténtalo de nuevo.</p>
                <Link href="/product" className="text-blue-500 underline">Volver a productos</Link>
            </>
        );
    }

    console.log("✅ Producto encontrado:", producto);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    
                    {/* Imagen del producto */}
                    <div className="lg:w-1/2 w-full">
                        <img
                            alt={producto.name || "Imagen del producto"}
                            className="lg:h-auto h-64 w-full object-cover object-center rounded"
                            src={producto.image || "/placeholder.jpg"}
                        />
                    </div>

                    {/* Información del producto */}
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                            {producto.type || "Sin categoría"}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {producto.name || "Producto sin nombre"}
                        </h1>
                        <p className="leading-relaxed">
                            {producto.description || "No hay descripción disponible."}
                        </p>

                        {/* Opciones de color */}
                        {producto.colors?.length > 0 && (
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <span className="mr-3">Color</span>
                                {producto.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                                        style={{ backgroundColor: color }}
                                    ></button>
                                ))}
                            </div>
                        )}

                        {/* Precio y botón de agregar al carrito */}
                        <div className="flex items-center justify-between mt-4">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                ${producto.price?.toFixed(2) || "0.00"}
                            </span>
                            <AddToCartButton producto={producto} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

