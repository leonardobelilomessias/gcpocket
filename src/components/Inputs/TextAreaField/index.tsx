import { ReactElement } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { View, TextInput, Text } from "react-native";

type RegisterType = ReturnType<UseFormRegister<any>>; 

type errorType = FieldError |undefined
export function TextAreaField({error,register,nameRegister, name, icon, element,type, setElement}:{error?:errorType,nameRegister?:"email",register?:RegisterType,type?:"emailAddress"| "password",name:string,element?:string,setElement?:(element:string)=>void, icon?:ReactElement}){
  
    return(
        <View style={{flexDirection:"row",alignItems:"center",width:"100%", backgroundColor:"#EAECEE", padding:12,  borderRadius:8, marginVertical:8, borderWidth:error?.message ?0.5:0, borderColor:"red"}}>
        
            <Text style={{color:"red",fontSize:12, position:"absolute", bottom:-16}}>{error?.message}</Text>
            
            <TextInput multiline={true} numberOfLines={18} textAlignVertical='top'   {...register} textContentType={type} autoCapitalize="sentences" onChangeText={setElement}  placeholder={name} value={element} style={{height:300,fontSize:18, marginLeft:16, fontWeight:"500", width:"100%"}} placeholderTextColor={"#808B96"} />
        </View>
    )
}
