import Link from "next/link"

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-2xl font-semibold text-gray-800">Pagina no encontrada</p>
      <Link href="/">Volver al inicio
      </Link>
    </div>
  )
}
export default NotFoundPage