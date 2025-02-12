import { db } from "../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export const getProductByIdFromServer = async (id) => {
    try {
        if (!id) {
            throw new Error("ID del producto no proporcionado.");
        }

        console.log("Buscando producto con ID:", id);

        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, id);  // Usa el id tal cual como string

        const query = await getDoc(docRef);

        if (!query.exists()) {
            console.warn(`⚠️ Producto con ID ${id} no encontrado en Firebase.`);
            return {
                payload: null,
                error: true,
                message: `El producto con ID ${id} no existe.`,
            };
        }

        const producto = query.data();
        return {
            payload: { ...producto, id },
            error: false,
            message: "Producto obtenido correctamente!",
        };

    } catch (error) {
        console.error("Error obteniendo producto:", error);
        return {
            payload: null,
            error: true,
            message: "Hubo un error al obtener el producto.",
        };
    }
};


