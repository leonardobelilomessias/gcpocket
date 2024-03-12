import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

export function ButtonForm({handleButton,title,bg="white",bordeColor="black",borderWidth=1,sizeText=18,textColor="black"}:{bg?:string,textColor?:string,borderWidth?:number,bordeColor?:string, sizeText?:number,title:string,handleButton:(data?:any)=>void}){
    return(
      <TouchableOpacity onPress={handleButton} style={{borderWidth:borderWidth,alignSelf:"center", backgroundColor:bg, width:"90%", alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, borderColor:bordeColor}}>
        <Text style={{fontSize:sizeText, fontWeight:"500", color:textColor, textAlign:"center"}}>{title}</Text>
      </TouchableOpacity>
    )
}