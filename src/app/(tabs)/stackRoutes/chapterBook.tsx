import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type versesProps = {
    number:number
    text:string
}[]
export default function chapterBook(){
    const {chapter, book,abbrev} = useLocalSearchParams()
    const[versicles,setVersicles] = useState([] as versesProps)
    useEffect(()=>{
        axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/ex/2`).then((resp)=>{setVersicles(resp.data.verses)}).catch((er)=>console.log(er))
    },[])
  
    return(
        <View>
            {
                versicles.map((verse)=>(
                    <Text>{verse?.text}</Text>
                ))
            }
        </View>
    )
}