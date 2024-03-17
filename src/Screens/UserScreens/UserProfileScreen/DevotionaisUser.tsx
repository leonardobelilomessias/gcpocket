import { linkTodevotionaisUser, linkTodevotional } from "@/constants/Links"
import { router } from "expo-router"
import { View, Button, Text, TouchableOpacity } from "react-native"

export function DevotionaisUser(){
    return(
        <View style={{width:"90%"}}>
            <Text style={{fontWeight:"bold", fontSize:16}}>Devocionais</Text>
            <DevotionaisUserItem/>
            <DevotionaisUserItem/>
            <DevotionaisUserItem/>
            <TouchableOpacity onPress={()=> router.push({pathname:linkTodevotionaisUser,params:{id_user:"02"}})} style={{backgroundColor:"black", borderRadius:8, alignContent:"center", justifyContent:"center", padding:8}}>
                <Text style={{textAlign:"center", color:"white", fontSize:18,fontWeight:"600"}}>ver todos devocionais</Text>
            </TouchableOpacity>
         
        </View>
    )
}
function DevotionaisUserItem(){
    return(
            <TouchableOpacity onPress={()=> router.push({pathname:linkTodevotional,params:{id_devotional:"02"}})} style={{padding:8,marginBottom:8, borderBottomWidth:0.5, borderBottomColor:'gray'}}>
                <Text style={{fontStyle:"italic", fontWeight:"500"}}>Title Devotional</Text>
                <Text style={{fontWeight:"500", fontSize:10, backgroundColor:'#CCD1D1', }}>Isaias 42:10</Text>
                <Text style={{color:"gray"}}>Description Teste da gravação  tudo vamos ver se funcional.</Text>
            </TouchableOpacity>
    )
}