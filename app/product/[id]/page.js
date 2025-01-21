import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
    const { id } = params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const productDetail = await response.json();

    if (response.status !== 200) {
        return (
            <>
                <PageTitle>Producto no encontrado</PageTitle>
                <p>El producto con id {id} no existe, intentalo de nuevo</p>
                <Link href="/product">Volver a productos</Link>
            </>
        );
    }

    return (
        <>
            <PageTitle>Detalle del producto {id}</PageTitle>
            <p>{productDetail.title}</p>
            <p>{productDetail.description}</p>
            <Link href="/product">Volver a productos</Link>
        </>
    );
}