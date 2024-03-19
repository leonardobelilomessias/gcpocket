import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { InputField } from "@/components/Inputs/InputField";
import { ReactElement, useCallback, useLayoutEffect } from "react";
import { Controller, FieldError, UseFormRegister, useForm } from "react-hook-form";
import { Button, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { router, useFocusEffect } from "expo-router";
import firestore from '@react-native-firebase/firestore'
import { useDataUser } from "@/context/AuthContext";
import { CreatedDevotional } from "./CreatedDevotional";
import { TextAreaField } from "@/components/Inputs/TextAreaField";
import firestorage from '@react-native-firebase/firestore'
import { devotionalType } from "@/@types/typesRoutes/typesRoutes";
const singSchema= zod.object({
    title:zod.string().refine((val) => ( val ===null || val ===undefined) || val.trim(),{
        message: "O titulo não pode estar vazio.",
      }),
    text:zod.string().refine((val) => ( val ===null || val ===undefined) || val.trim(),{
        message: "O Texto não pode estar vazio",
      }),
    book:zod.string().refine((val) => ( val ===null || val ===undefined) || val.trim(),{
        message: "Digite um livro",
      }),
    reference:zod.string().refine((val) => ( val ===null || val ===undefined) || val.trim(),{
        message: "Digite a referência.",
      }),
    
})
type schemaType = zod.infer<typeof singSchema>

export function StartCreateDevotional({status,setStatus,load,setLoad, setIdDevotionalCreated}:{status:string, setStatus:(data:string)=>void,setIdDevotionalCreated:(data:string)=>void,  load:boolean,setLoad:(data:boolean)=>void}){
    const {user} = useDataUser()
    const {control, handleSubmit,formState:{errors}, register, reset} =useForm<schemaType>({resolver:zodResolver(singSchema)})
   
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
            const colection_ref = firestore().collection('devotionals');
            const documentReference = await firestore().collection('devotionals').add({
                title:data.title,
                text:data.text,
                create_by_email:user.email,
                book:"isaias",
                reference:"63",
                created_at:timestamp,
                type:"devotional"
            } as devotionalType)
            
            console.log(documentReference.id)
            if(documentReference.id){
                setStatus("created")
                setIdDevotionalCreated(documentReference.id)
            }
        }catch(err){
            console.log("houve um erro = ",err) 
            setStatus("erro")
        }finally{
            setLoad(false)

        }
    }
    useFocusEffect(useCallback(()=>{
        reset()
    },[]))
    return(
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView style={{backgroundColor:"white", flex:1, padding:24, paddingBottom:50}}>
            <Controller name="title" defaultValue="" control={control} rules={{required:"required",value:"required",}}  render={({field:{onChange, value}})=>(
            <InputField name="Titulo" error={errors?.title}  register={register("title",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value} setElement={onChange}    />
            )} />
            <View style={{flexDirection:"row",alignContent:"space-between",alignItems:"flex-end", justifyContent:"space-between"}}>
                <Controller defaultValue="" rules={{required:"coloca",value:"value"}} name="book" control={control}  render={({field:{onChange, value}})=>(
                <InputField width={"50%"}  name="Livro" error={errors?.book}  register={register("book",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value.trim()} setElement={onChange}    />
                )} />
                <Controller name="reference" defaultValue="" control={control}  render={({field:{onChange, value}})=>(
                <InputField width={"45%"} name="Referência" error={errors?.reference}  register={register("reference",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value} setElement={onChange}    />
            )} />
            </View>
            

            <Controller defaultValue="" name="text" control={control} rules={{required:"required", value:"required"}}  render={({field:{onChange, value}})=>(
            <TextAreaField  name="Digite seu texto aqui" error={errors?.text}  register={register("text",{required:{message:"Campo não pode estar vazio",value:true}})}  type="emailAddress" element={value} setElement={onChange}    />
            )} />

            <ButtonForm width={"100%"} handleButton={handleSubmit(handleForm)} bg="black" textColor="white" title="Criar"/>
            <ButtonForm width={"100%"} handleButton={()=>{router.back()}} title="Voltar"/>

        </ScrollView>
        </KeyboardAvoidingView>
    )
}