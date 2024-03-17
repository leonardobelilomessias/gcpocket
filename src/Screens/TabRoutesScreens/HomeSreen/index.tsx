import { DevotionalCard } from "@/components/Cards/DevotionalCard";
import { DynamicCard } from "@/components/Cards/DynamicCard";
import { LessonCard } from "@/components/Cards/LessonCard";
import { HeaderPublication } from "@/components/HeaderPublication";
import { FIRESTORAGE_DB } from "@/utils/firebaseConfig";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { ReactElement } from "react";
import { ScrollView, Text, View } from "react-native";

export function HomeScreen() {
    async function getBooks() {
        const books = await axios.get("https://www.abibliadigital.com.br/api/books")
        console.log(books)
        //addDoc(collection(FIRESTORAGE_DB,"books"),user)

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, padding: 8, backgroundColor: "#F7F7F7" }}>
                <LessonPublication />
                <LessonPublication />
                <DynamicPublication />
                <DevotinalPublication />

            </View>
        </ScrollView>
    )
}

function LessonPublication() {
    return (
        <BoxPublication type="lesson">
            <LessonCard creator="iaamm" id_lesson="2455" reference="Isaias 42:10" resume="a resume about out lesson today. Was a great day. thaks good" title="Great experience" />
        </BoxPublication>
    )
}

function DynamicPublication() {
    return (
        <BoxPublication  type="dynamic">
            <DynamicCard creator="iaamm" id_dynamic="2455" reference="Isaias 42:10" resume="a resume about out lesson today. Was a great day. thaks good" title="Great experience" />
        </BoxPublication>
    )
}

function DevotinalPublication() {
    return (
        <BoxPublication type="devotional">
            <DevotionalCard creator="iaamm" id_devotional="2455" reference="Isaias 42:10" resume="a resume about out lesson today. Was a great day. thaks good" title="Great experience" />
        </BoxPublication>
    )
}

function BoxPublication({ children,type }: {type:|"lesson"|"dynamic"|"devotional", children?: ReactElement }) {
    return (
        <View style={{ backgroundColor: "white", padding: 8, marginBottom: 4 }}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",alignContent:"center"}}>
            <HeaderPublication />
            <LabelPublication nameLabel="Devocional" type={type}/>            
            </View>
            {children}
        </View>
    )
}
function LabelPublication({ type }: { type: string, nameLabel: string }) {
    function pickColor(type:string) {

        switch (type) {
            case "dynamic":
                return{nameLabel:"Dinamica" ,color:"blue"}
            case "lesson":
                return{nameLabel:"Lição" ,color:"green"}
            case "devotional":
                return {nameLabel:"Devocional" ,color:"pink"}
        };
        return {}
    }
    const {color,nameLabel} = pickColor(type)
    return (
        <View style={{minWidth:70, backgroundColor: "white", padding:4, alignItems:"center",justifyContent:"center", borderRadius:8, borderColor:color, borderWidth:1  }}>
            <Text style={{color:color, fontSize:12, fontWeight:"600"}}>
                {nameLabel}
            </Text>
        </View>
    )
}