import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

export function ButtonCreateAccount(){
    return(
      <TouchableOpacity onPress={()=>{router.push("/sing-up")}} style={{borderWidth:1,alignSelf:"center", backgroundColor:"white", width:"90%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
        <Text style={{fontSize:18, fontWeight:"500", color:"black", textAlign:"center"}}>Criar conta</Text>
      </TouchableOpacity>
    )
}