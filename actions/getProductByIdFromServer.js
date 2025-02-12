import { db } from "../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export const getProductByIdFromServer = async (id) => {
    try {
        if (!id) {
            throw new Error("ID del producto no proporcionado.");
        }

        const idStr = String(id); // 🔹 Asegura que sea un String

        console.log("Buscando producto con ID:", idStr);

        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, idStr);
        const query = await getDoc(docRef);

        if (!query.exists()) {
            console.warn(`⚠️ Producto con ID ${idStr} no encontrado en Firebase.`);
            return {
                payload: null,
                error: true,
                message: `El producto con ID ${idStr} no existe.`,
            };
        }

        const producto = query.data();
        return {
            payload: { ...producto, id: idStr },
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
