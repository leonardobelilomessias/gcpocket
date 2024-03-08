import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default  function chaptersBible(){
    const {number,name} = useLocalSearchParams()
    const elemet = []
    for (let i = 1;i  <= Number(number); i++) {
        elemet.push(i)
        
    }
   
    console.log(elemet)
    console.log(number)
    return(
        <View>
            <Text style={{fontWeight:"bold", fontSize:24, textAlign:"center"}}>{name}</Text>

            <Text style={{fontWeight:"bold"}}> Capitulos</Text>
            <View style={{ flexDirection:"row",flexWrap:'wrap',alignItems:"center", alignContent:'center', }}>

            {elemet.map((number)=>(
                <View key={number} style={{backgroundColor:"white", width:50, height:50, alignItems:"center", alignContent:'center', margin:4, justifyContent:"center"}}>
                <Text  >{number}</Text>
                </View>
                ))}
            </View>
        </View>
    )
}