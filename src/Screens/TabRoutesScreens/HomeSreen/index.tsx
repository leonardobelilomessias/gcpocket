import { LessonCard } from "@/components/Cards/LessonCard";
import { HeaderPublication } from "@/components/HeaderPublication";
import { Text, View } from "react-native";

export function HomeScreen(){
    return(
        <View style={{ flex:1, padding:8}}>
            <Text>Home</Text>
            <LessonPublication/>
            <LessonPublication/>

        </View>
    )
}

function LessonPublication(){
    return(
        <View style={{backgroundColor:"white", padding:8, marginBottom:4}}>  
            <HeaderPublication/>
            <LessonCard creator="iaamm"  id_lesson="2455" reference="Isaias 42:10" resume="a resume about out lesson today. Was a great day. thaks good" title="Great experience"/>
        </View>
    )
}



