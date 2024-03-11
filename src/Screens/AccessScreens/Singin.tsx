import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import imageLogin from '@/assets/login.png'
import imagesl  from '@/assets/login.svg'
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ReactElement, useState } from "react";
import { useDataUser } from "@/context/AuthContext";
import { router } from "expo-router";
import { InputAccount } from "@/components/Inputs/InputAccount";
import { useForm, Controller} from 'react-hook-form'

const {control} =useForm()

export function Singin(){
  const {singin} = useDataUser()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <ScrollView showsVerticalScrollIndicator={false}>
            <HeroLogin/>
            <ButtonCreateAccount/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
function ButtonLogin({email, password}:{email:string, password:string}){
  const {singin} = useDataUser()
  
    return(
        <TouchableOpacity onPress={()=> singin({email: email, password:password})} style={{backgroundColor:"black", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
         <Text style={{fontSize:18, fontWeight:"500", color:"white", textAlign:"center"}}>Entrar</Text>
        </TouchableOpacity>
    )
}
function ButtonCreateAccount(){
    const {singin} = useDataUser()
      return(
        <TouchableOpacity onPress={()=>{router.push("/sing-up")}} style={{borderWidth:1,alignSelf:"center", backgroundColor:"white", width:"90%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
          <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Criar conta</Text>
        </TouchableOpacity>
      )
  }
function HeroLogin(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return(
        <View style={{flex:1, backgroundColor:"white", alignItems:'center', paddingBottom:50}}>
        <View style={{flexDirection:'row',maxHeight:40}}>
         <Text style={{fontSize:36, fontWeight:"bold"}}>Gc</Text>
         <Text style={{fontSize:10, fontWeight:"bold",lineHeight:70}}>Pocket</Text>
        </View>
         <Image source={imageLogin} style={{width:"85%", height:270}}/>
         <View style={{width:"90%"}}>
            <Controller name="email" control={control}   render={
            ({field:{onChange, value}})=> (<InputAccount type="emailAddress" element={value} setElement={onChange}  name="Email" icon={<MaterialIcons name="mail-outline" size={24} color="#808B96" />}/>)
            }/>
             <InputAccount  element={password} setElement={setPassword} name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color="#808B96" />}/>
             <ButtonLogin email={email} password={password}/>
             <ButtonSocialLogin/>
         </View>
     </View>
    )
}

function ButtonSocialLogin(){
    const {socialSingin} = useDataUser()
      return(
        <TouchableOpacity onPress={()=>socialSingin()} style={{borderWidth:1, backgroundColor:"white", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, flexDirection:"row"}}>
        <Image source={require("@/assets/iconGoogle.png")} style={{width:24, height:24, marginRight:24}}/>
         <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Entrar com Google</Text>
         </TouchableOpacity>
      )
  }

