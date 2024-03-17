import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import imageprofile from '@/assets/exampleuserimage.png'
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
export function HeaderUserProfile({name, id_user,url_image}:{url_image:string|null |undefined,name:string | null, id_user:string}){

    return(
        <>
        <View style={{width:120, height:120,}}>
        <ImageAvatar  url_image={url_image}/>
        </View>
        <Text style={styles.title}>{name}</Text>
        <ButtonsHeaderProfile id_user={id_user}/>
         </>
    )
}
function ImageAvatar({url_image}:{url_image:string| null| undefined}){
   
  return(
      <>
      {
         url_image && <Image source={{uri:url_image}} style={{width:120,height:120, borderRadius:120}}/>
      }
      {
        !url_image && <FontAwesome name="user-circle-o" size={120} color="black" />
      }
      </>
  )
}

function ButtonsHeaderProfile({id_user}:{id_user:string}){
    const [isFolower,setIsFolower]=useState(false)
    return(
        <View style={{flexDirection:'row'}}>
            <Pressable onPress={()=>setIsFolower(!isFolower)} style={{margin:4, minWidth:100,height:32, backgroundColor:(isFolower?"gray":"black"), alignContent:'center', justifyContent:"center", alignItems:"center", borderRadius:45}}>
            <Text style={{color:"white"}}>{isFolower?"seguindo":"seguir"}</Text>
            </Pressable>
            <Pressable  style={{margin:4, minWidth:100,height:32, backgroundColor:"white", borderWidth:1,borderColor:"black",alignContent:'center', justifyContent:"center", alignItems:"center", borderRadius:45}}>
            <Text style={{color:"black"}}>mensagem</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:"white"
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color:"black"
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });