import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const firebaseGetDoc = async (path) => {
    try {
        let dataList = []
        const docRef = collection(db, path);
        //console.log(docRef, 'docRef')
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        dataList = [...dataList,doc.data()];
        });
        //console.log(dataList, 'Data bajada de cloud')
        return dataList
    } catch (e) {
        console.error("Error getting document:", e);
    }
}