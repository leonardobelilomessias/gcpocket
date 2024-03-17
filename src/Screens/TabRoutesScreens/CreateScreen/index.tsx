import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { InputField } from "@/components/Inputs/InputField";
import React, { ReactElement, useState } from "react";
import { Controller, FieldError, UseFormRegister, useForm } from "react-hook-form";
import { ActivityIndicator, Button, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import firestore from '@react-native-firebase/firestore'
import { useDataUser } from "@/context/AuthContext";
import { CreatedDevotional } from "./CreatedDevotional";
import { StartCreateDevotional } from "./StartCreateDevotional";


export function CreateScreen(){
const [status, setStatus] = useState("start")
const [load,setLoad] = useState(false)
const navigation = useNavigation();
const params = useLocalSearchParams();

 switch (status) {
    case 'start':
        return(<StartCreateDevotional load={load} setLoad={setLoad} setStatus={setStatus} status={status}/>)
    case'creating':
        return(<CreatingDevotional/>)
    case"created":
        return <CreatedDevotional/>
    default:
        return(<StartCreateDevotional load={load} setLoad={setLoad} setStatus={setStatus} status={status}/>)

 }
}


function CreatingDevotional(){
    return(
    <View style={{flex:1, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
        <ActivityIndicator size={"large"} color={"blue"}/>
    </View>
    )
}


