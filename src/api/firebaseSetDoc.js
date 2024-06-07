import {collection,addDoc,doc} from 'firebase/firestore';
import {db} from '../../firebase/firebase';

export const FirebaseSetDoc = async (path, docId, data) => {
    try {
        const docRef = collection(db,path)
        //console.log(docRef, 'docRef')
        const data1 = await addDoc(docRef, data);
        console.log("Document written with ID: ", docId);
        return data1
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}