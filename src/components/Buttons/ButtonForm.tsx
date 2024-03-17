import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

export function ButtonForm({width="90%",handleButton,title,bg="white",bordeColor="black",borderWidth=1,sizeText=18,textColor="black"}:{width?:"90%"|"100%"|number,bg?:string,textColor?:string,borderWidth?:number,bordeColor?:string, sizeText?:number,title:string,handleButton:(data?:any)=>void}){
    return(
      <TouchableOpacity onPress={handleButton} style={{borderWidth:borderWidth,alignSelf:"center", backgroundColor:bg, width:width, alignContent:"center",justifyContent:"center", padding:12, borderRadius:8, marginTop:8, borderColor:bordeColor}}>
        <Text style={{fontSize:sizeText, fontWeight:"500", color:textColor, textAlign:"center"}}>{title}</Text>
      </TouchableOpacity>
    )
}