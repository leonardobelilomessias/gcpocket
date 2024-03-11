import { Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import imageLogin from '@/assets/login.png'
import imagesl  from '@/assets/login.svg'
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { useDataUser } from "@/context/AuthContext";

export function Singin(){
  const {singin} = useDataUser()

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <ScrollView showsVerticalScrollIndicator={false}>
            <HeroLogin/>
            <ButtonCreateAccount/>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
function ButtonLogin(){
  const {singin} = useDataUser()
    return(
        <TouchableOpacity onPress={()=> singin({email: "", password:""})} style={{backgroundColor:"black", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
         <Text style={{fontSize:18, fontWeight:"500", color:"white", textAlign:"center"}}>Entrar</Text>
        </TouchableOpacity>
    )
}
function ButtonCreateAccount(){
    const {singin} = useDataUser()
      return(
        <TouchableOpacity style={{borderWidth:1,alignSelf:"center", backgroundColor:"white", width:"90%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
          <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Criar conta</Text>
        </TouchableOpacity>
      )
  }
function HeroLogin(){
    return(
        <View style={{flex:1, backgroundColor:"white", alignItems:'center', paddingBottom:50}}>
        <View style={{flexDirection:'row',maxHeight:40}}>
         <Text style={{fontSize:36, fontWeight:"bold"}}>Gc</Text>
         <Text style={{fontSize:10, fontWeight:"bold",lineHeight:70}}>Pocket</Text>
        </View>
         <Image source={imageLogin} style={{width:"85%", height:270}}/>
         <View style={{width:"90%"}}>
             <InputField name="Email" icon={<MaterialIcons name="mail-outline" size={24} color="#808B96" />}/>
             <InputField name="Senha" icon={<MaterialIcons name="lock-outline" size={24} color="#808B96" />}/>
             <ButtonLogin/>
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

function InputField({name, icon}:{name:string, icon:ReactElement}){
    return(
        <View style={{flexDirection:"row",alignItems:"center",width:"100%", backgroundColor:"#EAECEE", padding:12,  borderRadius:8, marginVertical:8}}>
            {icon}
            <TextInput placeholder={name} style={{fontSize:18, marginLeft:16, fontWeight:"500", width:"100%"}} placeholderTextColor={"#808B96"} />
        </View>
    )
}
