import Image from "next/image";
import Link from "next/link";

function ProductList({ productos }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productos.map((producto, index) => {
                // Aseguramos que la clave sea única, combinando el id con el índice
                const uniqueKey = `${producto.id}-${index}`; 

                const precio = producto.price ? producto.price.toLocaleString() : "0.00";

                return (
                    <article className="p-2 shadow-md rounded-md relative aspect-[1/1.15] overflow-hidden group" key={uniqueKey}>
                        <div className="relative w-full h-full">
                            <Image
                                src={producto.image1 || "/placeholder.jpg"} // Usa el primer enlace de imagen si está disponible
                                alt={producto.name ? `Imagen de ${producto.name}` : "Producto sin nombre"}
                                fill
                                className="group-hover:scale-125 transition-all object-cover"
                                priority
                            />
                        </div>
                        
                        <div className="z-10 absolute bottom-0 bg-secondary/20 backdrop-blur-xl left-0 w-full p-2">
                            <div className="flex justify-between">
                                <h2 className="font-bold text-xl max-w-[180px] truncate">{producto.name || "Sin nombre"}</h2>
                                <p>$ {precio}</p>
                            </div>
                            <Link href={`/product/${producto.id}`} className="text-blue-500 underline">
    Ver más
</Link>


                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default ProductList;

