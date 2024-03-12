import { MaterialIcons } from "@expo/vector-icons"
import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import ImageForm from '@/assets/singup.svg'
import { InputAccount } from "../Inputs/InputAccount"
import { ButtonSingup } from "../Buttons/ButtonSingup"
import * as zod from 'zod'
import {zodResolver } from '@hookform/resolvers/zod'
import { Controller,useForm} from 'react-hook-form'
import { useDataUser } from "@/context/AuthContext"

const singupSchema= zod.object({
    email:zod.string().email("Digite um email valido"),
    password:zod.string().min(6, "Senha de no minimo 6 caracteres"),
    passwordConfirm:zod.string().min(6, "Senha de no minimo 6 caracteres"),
}).refine(
    (values) => {
      return values.password === values.passwordConfirm;
    },
    {
      message: "As senhas devem ser iguais!",
      path: ["passwordConfirm"],
    }
  );
type schemaType = zod.infer<typeof singupSchema>

export  function FormSingup(){
    const {singup} = useDataUser()
   const {control,register,handleSubmit,formState:{errors}} = useForm<schemaType>({resolver:zodResolver(singupSchema)})
    return(
        <View style={{flex:1, backgroundColor:"white", alignItems:'center', paddingBottom:50}}>
        <View style={{flexDirection:'row',maxHeight:40}}>
         <Text style={{fontSize:36, fontWeight:"bold"}}>Gc</Text>
         <Text style={{fontSize:10, fontWeight:"bold",lineHeight:70}}>Pocket</Text>
        </View>
         <ImageForm   width={"90%"} height={270} />
         <View style={{width:"90%"}}>
            <Controller

            control={control}
            name="email" 
            render={
                ({field:{onChange, value}})=> (<InputAccount error={errors?.email}  register={register("email",{required:{message:"helo",value:true}})}  type="emailAddress" element={value} setElement={onChange}  name="Email" icon={<MaterialIcons name="mail-outline" size={24} color={errors.email?.message?"red":"#808B96"} />}/>)
                
                }
            
            />
                <Controller name="password" defaultValue="" control={control}   render={
                ({field:{onChange, value}})=> (<InputAccount error={errors?.password} register={register("password",{required:{message:"helo",value:true}})} element={value} setElement={onChange} name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color={errors.password?.message?"red":"#808B96"} />}/>)
                }/>
                <Controller name="passwordConfirm" defaultValue="" control={control}   render={
                ({field:{onChange, value}})=> (<InputAccount error={errors?.passwordConfirm} register={register("passwordConfirm",{required:{message:"helo",value:true}})} element={value} setElement={onChange} name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color={errors.password?.message?"red":"#808B96"} />}/>)
                }/>
            {/* <Button title="teste" onPress={handleSubmit(singup)} /> */}
             <ButtonSingup handlesubmit={handleSubmit(singup)}/>
         </View>
     </View>
    )
}