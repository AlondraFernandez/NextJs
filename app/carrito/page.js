import PageTitle from "@/components/PageTitle"

function CarritoPage(){
    return (
        <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 bg-white text-gray-800">
            <h2 className="text-2xl font-semibold">Pedir artículos</h2>
            <ul className="flex flex-col pt-4 space-y-2">
                <li className="flex items-start justify-between">
                    <h3>
                        Taco duro de pollo{" "}
                        <span className="text-sm text-violet-600">x3</span>
                    </h3>
                    <div className="text-right">
                        <span className="block">$7,50</span>
                        <span className="text-sm text-gray-600">A $2,50</span>
                    </div>
                </li>
                <li className="flex items-start justify-between">
                    <h3>
                        Taco duro de res{" "}
                        <span className="text-sm text-violet-600">x3</span>
                    </h3>
                    <div className="text-right">
                        <span className="block">$8,25</span>
                        <span className="text-sm text-gray-600">A $2,75</span>
                    </div>
                </li>
                <li className="flex items-start justify-between">
                    <h3>
                        Papas fritas rizadas{" "}
                        <span className="text-sm text-violet-600">x1</span>
                    </h3>
                    <div className="text-right">
                        <span className="block">$1,75</span>
                        <span className="text-sm text-gray-600">A $1,75</span>
                    </div>
                </li>
                <li className="flex items-start justify-between">
                    <h3>
                        Refresco grande{" "}
                        <span className="text-sm text-violet-600">x2</span>
                    </h3>
                    <div className="text-right">
                        <span className="block">$4.00</span>
                        <span className="text-sm text-gray-600">A $2.00</span>
                    </div>
                </li>
            </ul>
            <div className="pt-4 space-y-2">
                <div>
                    <div className="flex justify-between">
                        <span>Total parcial</span>
                        <span>$21,50</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-600"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5a1 1 0 11-2 0v-5a1 1 0 112 0v5zm-1-7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-600">Incluye impuestos</span>
                </div>
            </div>
            <div className="pt-4">
                <button className="w-full px-4 py-2 font-semibold text-white bg-violet-600 rounded-md">
                    Confirmar pedido
                </button>
            </div>
            </div>
        </div>
    );
}

export default CarritoPage