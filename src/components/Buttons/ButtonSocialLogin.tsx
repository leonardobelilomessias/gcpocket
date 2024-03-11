import { useDataUser } from "@/context/AuthContext"
import { Image, Text, TouchableOpacity } from "react-native"

export function ButtonSocialLogin(){
    const {socialSingin} = useDataUser()
      return(
        <TouchableOpacity onPress={()=>socialSingin()} style={{borderWidth:1, backgroundColor:"white", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, flexDirection:"row"}}>
        <Image source={require("@/assets/iconGoogle.png")} style={{width:24, height:24, marginRight:24}}/>
         <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Entrar com Google</Text>
         </TouchableOpacity>
      )
  }
