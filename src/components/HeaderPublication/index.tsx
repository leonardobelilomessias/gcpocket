import { Image, Pressable, Text, View } from "react-native";
import imageprofile from '@/assets/exampleuserimage.png'
import { router } from "expo-router";
import { linkToProfileUser } from "@/constants/Links";
import { useDataUser } from "@/context/AuthContext";
export function HeaderPublication(){
    const {user} = useDataUser()
    return(
        <Pressable onPress={()=>{router.push({pathname:linkToProfileUser, params:{id_user:"n65464 ",name:"name"}})}} style={{flexDirection:"row", alignItems:"center", marginBottom:8}}>
           <ImageAvatar  url_image={user?.image_profile}  />
            <Text style={{fontWeight:"600"}}>My name user</Text>
        </Pressable>
    )
}

 function ImageAvatar({url_image}:{url_image:string| null| undefined}){
   
    return(
        <>
        {
           url_image && <Image source={{uri:url_image}} style={{width:40,height:40, borderRadius:60, marginRight:12}}/>
        }

        </>
    )
}