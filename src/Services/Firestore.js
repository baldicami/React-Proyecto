import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyALmehrx17AmpIUnGFPCgBlglPGPW14CNQ",
  authDomain: "react-pfinal.firebaseapp.com",
  projectId: "react-pfinal",
  storageBucket: "react-pfinal.appspot.com",
  messagingSenderId: "217911053281",
  appId: "1:217911053281:web:a88c8230f097ac3ccaa0a0"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default  async function getItems(){
    const collectionProductsRef = collection(DB, "products")
    const documentSnapShot = await getDocs(collectionProductsRef)
    const documentsData = documentSnapShot.docs.map((doc) => {
        return{
            ...doc.data(),
            id : doc.id
        }
    })
    return documentsData;
}

export async function getSingleItem(idParams){
    const docRef = doc(DB, "products", idParams)
    const docSnapShot = await getDoc(docRef)
    return{
        ...docSnapShot.data(),
        id: docSnapShot.id
    }
}

export async function getItemByCategory(categoryParams){
    const collectionRef = collection(DB, "products")
    const qCategory = query(collectionRef, where("category", "==", categoryParams))
    const documentSnapShot = await getDocs(qCategory)
    const documentsData = documentSnapShot.docs.map( (doc) => {
        return{
            ...doc.data(),
            id: doc.id
        }
    })
    return documentsData;
}

export async function createOrder(order){
        const collectionRef = collection(DB, "ordenes")
        const collOrden =  await addDoc(collectionRef, order)
        return (collOrden.id)
}



