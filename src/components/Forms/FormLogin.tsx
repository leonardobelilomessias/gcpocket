import { Button, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import imageLogin from '@/assets/login.png'
import imagesl  from '@/assets/login.svg'
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ReactElement, useState } from "react";
import { useDataUser } from "@/context/AuthContext";
import { router } from "expo-router";
import { InputAccount } from "@/components/Inputs/InputAccount";
import { useForm, Controller} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ButtonSocialLogin } from "@/components/Buttons/ButtonSocialLogin";
import { ButtonLogin } from "@/components/Buttons/ButtonLogin";


const singSchema= zod.object({
    email:zod.string().email("Digite um email valido"),
    password:zod.string().min(6,  "Senha de no minimo 6 caracteres"),
})
type schemaType = zod.infer<typeof singSchema>
export function FormLogin(){
    const {control, handleSubmit,formState:{errors}, register} =useForm<schemaType>({resolver:zodResolver(singSchema)})
    const {singin} = useDataUser()
        return(
            <View style={{flex:1, backgroundColor:"white", alignItems:'center', paddingBottom:50}}>
            <View style={{flexDirection:'row',maxHeight:40}}>
             <Text style={{fontSize:36, fontWeight:"bold"}}>Gc</Text>
             <Text style={{fontSize:10, fontWeight:"bold",lineHeight:70}}>Pocket</Text>
            </View>
             <Image source={imageLogin} style={{width:"85%", height:270}}/>
             <View style={{width:"90%"}}>
                <Controller  defaultValue="" rules={{required:{message:"nececitamos", value:true}}} name="email" control={control}   render={
                ({field:{onChange, value}})=> (<InputAccount  error={errors?.email}  register={register("email",{required:{message:"helo",value:true}})}  type="emailAddress" element={value} setElement={onChange}  name="Email" icon={<MaterialIcons name="mail-outline" size={24} color={errors.email?.message?"red":"#808B96"} />}/>)
                
                }/>
                <Controller name="password" defaultValue="" control={control}   render={
                ({field:{onChange, value}})=> (<InputAccount error={errors?.password} register={register("password",{required:{message:"helo",value:true}})} element={value} setElement={onChange} name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color={errors.password?.message?"red":"#808B96"} />}/>)
                }/>
                 <ButtonLogin handlesubmit={handleSubmit(singin)} />
                 <ButtonSocialLogin/>
             </View>


         </View>
        )
    }