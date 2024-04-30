import { firestore } from './firebase.js';
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
const userDataContainer = document.getElementById('userDataContainer');



// Obtener el userID del localStorage
const userID = localStorage.getItem('userID');

if (userID) {
    // El userID se ha encontrado en el localStorage
    // Obtener la referencia a la colección de facturas del usuario
    const facturaRef = collection(firestore, 'Factura', userID, 'Factura del usuario');

    // Obtener todas las facturas del usuario
    getDocs(facturaRef)
        .then((querySnapshot) => {
            // Iterar sobre las facturas y mostrar los datos
            querySnapshot.forEach((doc) => {
                const factura = doc.data();
                // Crear elementos HTML para mostrar los campos de la factura
                const facturaHTML = `
                    <div>
                        <p>Cantidad: ${factura.Cantidad}</p>
                        <p>Descuento: ${factura.Descuento}</p>
                        <p>ID_DOCUMENTO: ${factura.ID_DOCUMENTO}</p>
                        <p>Producto: ${factura.producto}</p>
                    </div>
                `;
                // Agregar los elementos HTML al div con id "factura"
                document.getElementById('factura').innerHTML += facturaHTML;
            });
        })
        .catch((error) => {
            console.error("Error al obtener las facturas del usuario:", error);
        });
} else {
    // El userID no se encontró en el localStorage
    console.error("El userID no está almacenado en el localStorage");
}