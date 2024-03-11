import { Image, Pressable, Text, View } from "react-native";
const graysoft = "#F7F7F7"
import imagegc from '@/assets/gcGoupImage.jpg'
import { router } from "expo-router";
import { linkToGcProfile } from "@/constants/Links";
export function GcUser(){
    return(
        <View style={{backgroundColor:graysoft, width:"90%", height:50, flexDirection:"row", alignItems:'center', borderRadius:8,}}>
        <Text style={{fontWeight:"bold", width:60, alignItems:"center", textAlign:'center',color:'gray'}}>GC</Text>
        <View style={{backgroundColor:"gray", width:1, height:40}}/>
        <Pressable onPress={()=>{router.push({pathname:linkToGcProfile,params:{}} as never) }} style={{flexDirection:'row', marginLeft:20}}>
            <Image style={{width:40, height:40, borderRadius:50}} source={imagegc}/>
            <ProfileGc/>
        </Pressable>
        </View>
    )
}
function ProfileGc(){
    return(
        <View style={{marginLeft:8}} >
            <Text style={{fontWeight:"bold",color:'black'}}>Vine</Text>
            <Text style={{fontWeight:"bold",   color:'gray', fontSize:10}}>
                rua itapetinga 87, Dom 18:00
            </Text>
        </View>
    )
}