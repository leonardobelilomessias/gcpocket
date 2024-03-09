import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ReactSVG, ReactSVGElement } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Href, HrefObject, router } from "expo-router";
import { linkToLessons } from "@/constants/Links";

export function IconsOptions({id_gc, gc_name}:{id_gc:string, gc_name:string}){
    return(
        <View style={styles.container}>
            <Item  link={linkToLessons} gc_name={gc_name} id_gc="0565"color="#ABEBC6" title="Liçoes" icon={<MaterialIcons name="menu-book" size={24} color="white" /> }/>
            <Item  link="/(tabs)/stackRoutes/lessons" gc_name={gc_name} id_gc="0565"color="#85C1E9"title="Qeubra-Gelo" icon={<FontAwesome5 name="cubes" size={24} color="white" /> }/>
            <Item  link="/(tabs)/stackRoutes/lessons" gc_name={gc_name} id_gc="0565"color="pink"title="Membros" icon={<FontAwesome6 name="people-group" size={24} color="white" /> }/>
        </View>
    )
}
 type ItemProsps={
    title:string
    icon:any,
    color:string
    id_gc:string
    gc_name:string,
    link:string
 }
function Item({ icon,title,color,id_gc, gc_name, link}:ItemProsps){
    return(
        <TouchableOpacity onPress={()=> router.push({pathname:link,params:{id:id_gc,gc_name:gc_name}} as never)} style={[styles.item,{backgroundColor:color, borderRadius:8}]}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    item:{
        width:50,
        height:54, 
        margin:8, 
        alignItems:'center',
        justifyContent:"center",
        borderRadius:8, 
        
    },
    title: {
        fontSize: 8,
        fontWeight: '500',
        color: "white"
    },
})