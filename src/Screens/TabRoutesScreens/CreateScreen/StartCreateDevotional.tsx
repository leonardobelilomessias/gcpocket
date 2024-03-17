import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { InputField } from "@/components/Inputs/InputField";
import { ReactElement } from "react";
import { Controller, FieldError, UseFormRegister, useForm } from "react-hook-form";
import { Button, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { router } from "expo-router";
import firestore from '@react-native-firebase/firestore'
import { useDataUser } from "@/context/AuthContext";
import { CreatedDevotional } from "./CreatedDevotional";
import { TextAreaField } from "@/components/Inputs/TextAreaField";
import firestorage from '@react-native-firebase/firestore'
import { devotionalType } from "@/@types/typesRoutes/typesRoutes";
const singSchema= zod.object({
    title:zod.string(),
    text:zod.string()
})
type schemaType = zod.infer<typeof singSchema>

export function StartCreateDevotional({status,setStatus,load,setLoad}:{status:string, setStatus:(data:string)=>void, load:boolean,setLoad:(data:boolean)=>void}){
    const {user} = useDataUser()
    const {control, handleSubmit,formState:{errors}, register} =useForm<schemaType>({resolver:zodResolver(singSchema)})
    function handleForm(data:any){

        setLoad(true)
        setStatus("creating")
        try{
            createDevotional(data)
        }catch(err){
            console.log("houve um erro = ",err) 
            setStatus("erro")
        }finally{
            setLoad(false)

        }
        return 
    }

    async function createDevotional(data:devotionalType){
                try{
            const timestamp = firestore.Timestamp.now()
            const documentReference = await firestore()
            .collection('devotionals')
            .add({
                title:data.title,
                text:data.text,
                create_by_email:user.email,
                reference_book:"isaias",
                reference_chapter:"63",
                reference_verse:"1",
                created_at:timestamp,
                type:"devotional"
            } as devotionalType);
            console.log(documentReference.id)
            if(documentReference.id){
                setStatus("created")
            }
        }catch(err){
            console.log("houve um erro = ",err) 
            setStatus("erro")
        }finally{
            setLoad(false)

        }
    }
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView style={{backgroundColor:"white", flex:1, padding:24, paddingBottom:50}}>
            <Controller name="title" control={control}  render={({field:{onChange, value}})=>(
            <InputField name="Titulo" error={errors?.title}  register={register("title",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value} setElement={onChange}    />
            )} />

            <Controller name="text" control={control}  render={({field:{onChange, value}})=>(
            <TextAreaField name="Digite seu texto aqui" error={errors?.text}  register={register("text",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value} setElement={onChange}    />
            )} />

            <ButtonForm width={"100%"} handleButton={handleSubmit(handleForm)} bg="black" textColor="white" title="Criar"/>
            <ButtonForm width={"100%"} handleButton={()=>{router.back()}} title="voltar"/>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}