"use client"

import Button from "@/components/Button"
import PageTitle from "@/components/PageTitle"
import { CartContext } from "@/providers/CartProvider"
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"

function CarritoPage() {
    const { cart, handleRemoveFromCart } = useContext(CartContext)

    // ✅ Calcular total dinámicamente
    const totalAmount = cart.reduce((total, producto) => total + (producto.price * producto.quantity), 0).toFixed(2)

    return (
        <>
            <PageTitle>Mi Carrito</PageTitle>
            {cart.length > 0 ? (
                <div className="flex flex-col p-6 space-y-4 sm:p-10 bg-gray-100 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800">Tu carrito</h2>
                    <ul className="flex flex-col divide-y divide-gray-300">
                        {cart.map((producto) => (
                            <li key={producto.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-4">
                                    {/* Imagen del producto */}
                                    <div className="relative w-24 h-24 sm:w-36 sm:h-36">
                                        <Image
                                            src={producto.image}
                                            alt={producto.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    {/* Información del producto */}
                                    <div className="flex flex-col justify-between w-full">
                                        <div className="flex justify-between w-full pb-2">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-700">{producto.name}</h3>
                                                <p className="text-sm text-gray-600">{producto.type}</p>
                                                <p className="text-sm text-gray-600">Cantidad: {producto.quantity}</p>
                                            </div>
                                            <p className="text-xl font-semibold text-gray-800">${(producto.price * producto.quantity).toFixed(2)}</p>
                                        </div>
                                        {/* Botón para eliminar producto */}
                                        <button 
                                            type="button" 
                                            className="flex items-center text-red-600 hover:text-red-800"
                                            onClick={() => handleRemoveFromCart(producto.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                            </svg>
                                            <span className="ml-1">Remover</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* Mostrar total correctamente */}
                    <div className="text-right">
                        <p className="text-xl font-semibold text-gray-800">Total: <span className="font-bold">${totalAmount}</span></p>
                        <p className="text-sm text-gray-600">No incluye impuestos ni envío</p>
                    </div>
                    {/* Botones de acción */}
                    <div className="flex justify-end space-x-4">
                        <Link href="/products" passHref>
                            <button className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
                                Volver a la tienda
                            </button>
                        </Link>
                        <Link href="/checkout" passHref>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Proceder al pago
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <Link href="/products" passHref>
                        <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                            Por favor selecciona un producto
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default CarritoPage;
