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
            <Button title='ver todos devocionais' color={"black"}onPress={()=> router.push({pathname:linkTodevotionaisUser,params:{id_user:"02"}})} />
        </View>
    )
}
function DevotionaisUserItem(){
    return(
            <TouchableOpacity onPress={()=> router.push({pathname:linkTodevotional,params:{id_devotional:"02"}})} style={{marginBottom:4}}>
                <Text style={{fontStyle:"italic", fontWeight:"500"}}>Title Devotional</Text>
                <Text style={{fontWeight:"500", fontSize:10, backgroundColor:'#CCD1D1', }}>Isaias 42:10</Text>
                <Text style={{color:"gray"}}>Description Teste da gravação  tudo vamos ver se funcional.</Text>
            </TouchableOpacity>
    )
}