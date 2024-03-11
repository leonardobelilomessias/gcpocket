import { useDataUser } from "@/context/AuthContext"
import { Text, TouchableOpacity } from "react-native"

export function ButtonLogin({handlesubmit}:{handlesubmit:(data:any)=>void,email?:string, password?:string}){
    const {singin} = useDataUser()
    
      return(
          <TouchableOpacity onPress={()=>handlesubmit(singin)} style={{backgroundColor:"black", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
           <Text  style={{fontSize:18, fontWeight:"500", color:"white", textAlign:"center"}}>Entrar</Text>
          </TouchableOpacity>
      )
  }