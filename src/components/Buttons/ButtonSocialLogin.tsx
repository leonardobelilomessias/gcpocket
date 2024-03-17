import { useDataUser } from "@/context/AuthContext"
import { GoogleSignin,GoogleSigninButton,statusCodes } from "@react-native-google-signin/google-signin"
import { useState } from "react"
import { ActivityIndicator, Button, Image, Text, TouchableOpacity } from "react-native"
GoogleSignin.configure(
  {
    webClientId:"659075767234-mpj2et7qddcqb91sf129ge8k5lo4i75t.apps.googleusercontent.com"
  }
)


export function ButtonSocialLogin(){
  const {setToken,user,socialSingin}  = useDataUser()
 const [loading,setLoad] = useState(false)
  async function onGoogleButonPress(){
    try{
      setLoad(true)
      await socialSingin()
    }catch(err){
      console.log(err)
    }finally{
      setLoad(false)
    }
  }
      return(
        <>
        <TouchableOpacity onPress={()=>onGoogleButonPress()} style={{borderWidth:1, backgroundColor:"white", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, flexDirection:"row"}}>
        {loading &&<ActivityIndicator style={{position:"absolute",left:30,alignSelf:"center"}}/>}
        <Image source={require("@/assets/iconGoogle.png")} style={{width:24, height:24, marginRight:24}}/>
         <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Entrar com Google</Text>
         </TouchableOpacity>
        <Text>{JSON.stringify(user)}</Text>

        </>
      )
  }
