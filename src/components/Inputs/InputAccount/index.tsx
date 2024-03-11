import { ReactElement } from "react";
import { TextInput, View } from "react-native";

export function InputAccount({name, icon, element,type, setElement}:{type?:"emailAddress"| "password",name:string,element?:string,setElement:(element:string)=>void, icon:ReactElement}){
    return(
        <View style={{flexDirection:"row",alignItems:"center",width:"100%", backgroundColor:"#EAECEE", padding:12,  borderRadius:8, marginVertical:8}}>
            {icon}
            <TextInput  textContentType={type} onChangeText={setElement}  secureTextEntry={name==='Senha'?true:false} placeholder={name} value={element} style={{fontSize:18, marginLeft:16, fontWeight:"500", width:"100%"}} placeholderTextColor={"#808B96"} />
        </View>
    )
}