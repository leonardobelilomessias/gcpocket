import { Image, Text, TouchableOpacity, View } from "react-native";
import imageprofile from '@/assets/exampleuserimage.png'
import { router } from "expo-router";
import { linkToMembersGc, linkToProfileUser } from "@/constants/Links";
export function MembersGcScreen(){
    return(
    <>
        <View style={{backgroundColor:"white", flex:1, padding:8, paddingBottom:20}}>
            <UserGcCard name="example name" id_user="065"/>
            <UserGcCard name="other name" id_user="065"/>
            <UserGcCard name="omre one othe name" id_user="065"/>


     

        </View>
    </>
    )
}
type CardUserProps={
    name:string
    id_user:string
}
function UserGcCard({id_user,name}:CardUserProps){
    return(
        <TouchableOpacity onPress={()=> router.push({pathname:linkToProfileUser,params:{id_user, name}})} style={{flexDirection:"row", alignItems:"center", borderBottomWidth:0.2, borderBottomColor:"#E5E8E8", padding:8}}>
            <Image  style={{width:60, height:60, borderRadius:70, marginRight:12}} source={imageprofile} />
            <Text style={{fontSize:18, fontWeight:"500"}}>{name} </Text>
        </TouchableOpacity>
    )
}