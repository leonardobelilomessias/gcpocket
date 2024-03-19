import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import firestore from '@react-native-firebase/firestore'
import { devotionalType } from "@/@types/typesRoutes/typesRoutes";
import devotional from "@/app/(tabs)/stackRoutes/devotional";
import { useState } from "react";

export function DevotionalScreen({text, title,created_at,reference_verse,reference_book,create_by_email,reference_chapter, book, reference}:devotionalType){
   
  
    return(
        <View style={{alignItems:"center", padding:8, backgroundColor:"white", flex:1}}>
            <MaterialCommunityIcons name="book-open-variant" size={28} color="black" />
            <Text style={{fontWeight:"500", fontSize:10}}>Devocional</Text>
            <Text style={{fontSize:24, textAlign:'center', fontWeight:"500"}}>{title}</Text>
            <Text style={{fontWeight:"500",backgroundColor:"#F7F7F7", fontStyle:"italic", padding:8, color:'gray'}}>{book} {reference}</Text>
            <Text style={{}}>
                {text}

            </Text>
        </View>
    )
}