import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import ImageLogin from '@/assets/login.png'
import Imagesl  from '@/assets/singup.svg'
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ReactElement, useState } from "react";
import { useDataUser } from "@/context/AuthContext";
import { SvgProps } from "react-native-svg";
import Svg, { SvgUri } from 'react-native-svg';


export function Singup(){
  const {singin} = useDataUser()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <ScrollView showsVerticalScrollIndicator={false}>
            <HeroLogin/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
function ButtonLogin({email, password}:{email:string, password:string}){
  const {singup} = useDataUser()
  
    return(
        <TouchableOpacity onPress={()=> singup({email: email, password:password})} style={{backgroundColor:"black", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
         <Text style={{fontSize:18, fontWeight:"500", color:"white", textAlign:"center"}}>Criar Conta</Text>
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
         <Imagesl   width={"90%"} height={270} />
         <View style={{width:"90%"}}>
             <InputField type="emailAddress" element={email} setElement={setEmail}  name="Email" icon={<MaterialIcons name="mail-outline" size={24} color="#808B96" />}/>
             <InputField  element={password} setElement={setPassword} name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color="#808B96" />}/>
             <ButtonLogin email={email} password={password}/>
         </View>
     </View>
    )
}

function ButtonSocialLogin(){
    const {socialSingin} = useDataUser()
      return(
        <TouchableOpacity onPress={()=>socialSingin()} style={{borderWidth:1, backgroundColor:"white", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, flexDirection:"row"}}>
        <Image source={require("@/assets/singup.svg")} style={{width:24, height:24, marginRight:24}}/>
         <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Entrar com Google</Text>
         </TouchableOpacity>
      )
  }

function InputField({name, icon, element,type, setElement}:{type?:"emailAddress"| "password",name:string,element?:string,setElement:(element:string)=>void, icon:ReactElement}){
    return(
        <View style={{flexDirection:"row",alignItems:"center",width:"100%", backgroundColor:"#EAECEE", padding:12,  borderRadius:8, marginVertical:8}}>
            {icon}
            <TextInput  textContentType={type} onChangeText={setElement}  secureTextEntry={name==='Senha'?true:false} placeholder={name} value={element} style={{fontSize:18, marginLeft:16, fontWeight:"500", width:"100%"}} placeholderTextColor={"#808B96"} />
        </View>
    )
}
