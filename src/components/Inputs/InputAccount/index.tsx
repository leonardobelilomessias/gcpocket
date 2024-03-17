import { ReactElement, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import {UseFormRegister, FieldError}from 'react-hook-form'
import { FontAwesome } from '@expo/vector-icons';
type RegisterType = ReturnType<UseFormRegister<any>>; 

type errorType = FieldError |undefined

export function InputAccount({error,register,nameRegister, name, icon, element,type, setElement}:{error:errorType,nameRegister?:"email",register:RegisterType,type?:"emailAddress"| "password",name:string,element?:string,setElement:(element:string)=>void, icon:ReactElement}){
    const [showPassword,setShowPassword] = useState(false)
    return(
        <View style={{flexDirection:"row",alignItems:"center",width:"100%", backgroundColor:"#EAECEE", padding:12,  borderRadius:8, marginVertical:8, borderWidth:error?.message ?0.5:0, borderColor:"red"}}>
            <Text style={{color:"red",fontSize:12, position:"absolute", bottom:-16}}>{error?.message}</Text>
            {icon}
            <TextInput {...register} textContentType={type} autoCapitalize={(type=="emailAddress"|| type==="password")?"none":"sentences"} onChangeText={setElement}  secureTextEntry={((name==="Senha"||name=="Confirmar Senha" )&&!showPassword)?true:false} placeholder={name} value={element} style={{fontSize:18, marginLeft:16, fontWeight:"500", width:"100%"}} placeholderTextColor={"#808B96"} />
            <Pressable onPress={()=>{setShowPassword(!showPassword)}} style={{position:"absolute", right:0, padding:12}}>
                {((name==="Senha"||name==="Confirmar Senha")&& showPassword)&& <FontAwesome name="eye" size={24} color="gray" />}
                {((name==="Senha" ||name ==="Confirmar Senha" )&& !showPassword)&& <FontAwesome name="eye-slash" size={24} color="gray" />}

            </Pressable>
        </View>
    )
}