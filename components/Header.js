import { ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <header className="px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-gray-800 shadow-md text-white">
            <h1 className="font-bold text-xl mb-4 md:mb-0">De todo un poco</h1>
            <nav className="flex flex-col md:flex-row gap-4">
                <Link href="/" className="hover:text-gray-400 transition-colors duration-200">Home</Link>
                <Link href="/product" className="hover:text-gray-400 transition-colors duration-200">Productos</Link>
                <Link href="/admin" className="hover:text-gray-400 transition-colors duration-200">Admin</Link>
                <Link href="/contacto" className="hover:text-gray-400 transition-colors duration-200">Contacto</Link>
                <Link href="/carrito" className="hover:text-gray-400 transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5" />
                </Link>
            </nav>
        </header>
    )
}
export default Header