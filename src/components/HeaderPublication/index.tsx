import { Image, Pressable, Text, View } from "react-native";
import imageprofile from '@/assets/exampleuserimage.png'
import { router } from "expo-router";
import { linkToProfileUser } from "@/constants/Links";
export function HeaderPublication(){
    return(
        <Pressable onPress={()=>{router.push({pathname:linkToProfileUser, params:{id_user:"n65464 ",name:"name"}})}} style={{flexDirection:"row", alignItems:"center", marginBottom:8}}>
            <Image source={imageprofile} style={{width:40,height:40, borderRadius:60, marginRight:12}}/>
            <Text style={{fontWeight:"600"}}>My name user</Text>
        </Pressable>
    )
}