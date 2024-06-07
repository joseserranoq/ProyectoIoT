import { collection, query, where,getDocs,updateDoc,doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const findIdQuery = async (id,path) => {    
    var dataList = []
    var idList = []
    const ref = collection(db, path);
    const q = query(ref, where("id", "==", id));
    const queryData = await getDocs(q)
    queryData.forEach((doc) => {
        dataList = [...dataList,doc.data()];
        idList = [...idList,doc.id];
        //console.log(doc.id, " => ", doc.data());
    });
    const option = dataList[0].availability == 0 ? 1 : 0
    const ref2 = doc(db, `${path}/${idList[0]}`)
    const response = await updateDoc(ref2,{availability: option})    
}