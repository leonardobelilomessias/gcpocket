import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import ImageLogin from '@/assets/login.png'
import Imagesl  from '@/assets/singup.svg'
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ReactElement, useState } from "react";
import { useDataUser } from "@/context/AuthContext";
import { SvgProps } from "react-native-svg";
import Svg, { SvgUri } from 'react-native-svg';
import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { router } from "expo-router";
import { Controller,useForm} from 'react-hook-form'
import * as zod from 'zod'
import {zodResolver } from '@hookform/resolvers/zod'
import { FormSingup } from "@/components/Forms/FormSingup";

export function Singup(){
  const {singin} = useDataUser()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <ScrollView showsVerticalScrollIndicator={false}>
            <FormSingup/>
            <ButtonForm title="Voltar" handleButton={()=> router.push("/sing-in")}/>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}




