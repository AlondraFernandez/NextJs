import { ShoppingCart } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <header className="px-6 py-4 flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg text-white">
            <h1 className="font-extrabold text-2xl tracking-wide">De todo un productos</h1>
            <nav className="flex gap-6">
                <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
                <Link href="/product" className="hover:text-yellow-300 transition-colors duration-300">productos</Link>
                <Link href="/admin" className="hover:text-yellow-300 transition-colors duration-300">admin</Link>
                <Link href="/contacto" className="hover:text-yellow-300 transition-colors duration-300">contacto</Link>
                <Link href="/carrito" className="hover:text-yellow-300 transition-colors duration-300">
                    <ShoppingCart className="w-6 h-6" />
                </Link>
            </nav>
        </header>
    )
}
export default Header