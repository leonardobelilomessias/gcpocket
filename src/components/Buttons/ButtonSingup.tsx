import { useDataUser } from "@/context/AuthContext"
import { Text, TouchableOpacity } from "react-native"

export function ButtonSingup({handlesubmit}:{handlesubmit:(data:any)=>void}){
    const {singup} = useDataUser()
    
      return(
          <TouchableOpacity onPress={handlesubmit} style={{backgroundColor:"black", width:"100%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8}}>
           <Text style={{fontSize:18, fontWeight:"500", color:"white", textAlign:"center"}}>Criar Conta</Text>
          </TouchableOpacity>
      )
  }