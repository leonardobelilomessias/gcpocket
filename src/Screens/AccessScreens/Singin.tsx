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
import { ButtonCreateAccount } from "@/components/Buttons/ButtonCreateAccount";
import { ButtonLogin } from "@/components/Buttons/ButtonLogin";
import { FormLogin } from "@/components/Forms/FormLogin";

const singSchema= zod.object({
    email:zod.string().email(),
    password:zod.string()
})
type schemaType = zod.infer<typeof singSchema>

export function Singin(){
  const {singin} = useDataUser()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <ScrollView showsVerticalScrollIndicator={false}>
            <FormLogin/>
            <ButtonCreateAccount/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}




