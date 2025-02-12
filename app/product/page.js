import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export default async function ProductPage() {
    // Obtener productos desde Firebase
    const productosRef = collection(db, "products");
    const snapshot = await getDocs(productosRef);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return (
        <>
            <PageTitle>Productos</PageTitle>
            <ProductList productos={products} />
        </>
    );
}
