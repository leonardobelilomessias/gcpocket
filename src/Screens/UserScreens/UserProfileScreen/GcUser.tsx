import { Text, View } from "react-native";
const graysoft = "#F7F7F7"
export function GcUser(){
    return(
        <View style={{backgroundColor:graysoft, width:"90%", height:50, flexDirection:"row", alignItems:'center', borderRadius:8,}}>
        <Text style={{fontWeight:"bold", width:60, alignItems:"center", textAlign:'center',color:'gray'}}>GC</Text>
        <View style={{backgroundColor:"gray", width:1, height:40}}/>
        <View >
            <Text style={{fontWeight:"bold", width:100, alignItems:"center", textAlign:'center',color:'black'}}>Vine</Text>
        </View>
        </View>
    )
}