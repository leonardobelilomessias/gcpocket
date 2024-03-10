import { linkToDynamic } from "@/constants/Links";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

type DynamicProps = {
    id_dynamic:string
    title:string
    resume:string
    reference:string
    creator:string
}
export function DynamicCard({id_dynamic,creator,reference,resume,title}:DynamicProps){

    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea natus quod consequuntur et! Perferendis assumenda nulla, voluptatibus natus aperiam quae praesentium provident. Atque maxime unde, inventore neque sunt eum accusamus?"
    return(
        <TouchableOpacity onPress={()=> router.push({pathname:linkToDynamic,params:{id_dynamic:id_dynamic}})} style={{height:110, borderWidth:1, borderColor:"gray", flexDirection:"row", backgroundColor:'white', borderRadius:4, alignItems:"center", marginBottom:4}}>
            <View style={{width:82, height:80, alignItems:"center", justifyContent:"center", borderRightWidth:1, margin:8}}>
                <FontAwesome5 name="cubes" size={52} color="black" />
                <Text style={{fontWeight:"500",fontSize:10, backgroundColor:"#F7F7F7"}}>{reference}</Text>
            </View>
            <View style={{flex:1, maxHeight:94}}>
                <Text style={{fontWeight:"600", fontSize:18}}>{title}</Text>
                <Text style={{color:"gray"}}>{resume.slice(0,100)}</Text>
                <Text style={{fontWeight:"bold", fontSize:10, color:"gray"}}>criado por @{creator}</Text>
            </View>

        </TouchableOpacity>
    )
}