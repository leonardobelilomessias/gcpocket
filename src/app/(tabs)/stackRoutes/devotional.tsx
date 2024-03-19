import { DevotionalScreen } from "@/Screens/UserScreens/DevotionalScreen";
import { useLocalSearchParams } from "expo-router";
import firestore from "@react-native-firebase/firestore"
import { string } from "zod";
import { useEffect, useState } from "react";
import { devotionalType } from "@/@types/typesRoutes/typesRoutes";
import { LoadingAuthRoutes } from "@/Screens/LoadScreens/LoadingAuthRoutes";
export default function devotional(){
    const [load,setLoad] = useState(false)
    const {id_devotional} = useLocalSearchParams()
    const [devotional,setDevotional] = useState({} as devotionalType)
    async function getDevotional(){
        setLoad(true)
        try {
            const idDocumento = id_devotional as string;
            const documentSnapshot = await firestore().collection('devotionals').doc(idDocumento).get();
            if (documentSnapshot.exists) {
              const data = documentSnapshot.data() as devotionalType;
              console.log('Dados do documento:', data);
              setDevotional(data)
            } else {
              console.log('Não foi encontrado nenhum documento com o ID:', idDocumento);
            }
          } catch (error) {
            alert(`houve um erro = ${error}`)
            console.error('Erro ao buscar documento: ', error);
          }finally{
            setLoad(false)
          }
          
    }
    useEffect(()=>{
        
        try{
            getDevotional()
        }catch(err){
  
        }finally{
        }
    },[])
    if(load){
       return  <LoadingAuthRoutes/>
    }else{
        return(<DevotionalScreen  book={devotional.book} reference={devotional.reference} create_by_email={devotional.create_by_email} created_at={devotional.created_at} reference_book={devotional.reference_book} 
        reference_verse={devotional.reference_verse} text={devotional.text} title={devotional.title} type={devotional.type}  reference_chapter={devotional.reference_chapter}/>)
    }
}