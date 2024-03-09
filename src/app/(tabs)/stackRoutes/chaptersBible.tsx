import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default  function chaptersBible(){
    const {number,name,abbrev} = useLocalSearchParams()
    const elemet = []
    for (let i = 1;i  <= Number(number); i++) {
        elemet.push(i)
        
    }
   
    console.log(elemet)
    console.log(number)
    console.log(abbrev)

    return(
        <View>
            <Text style={{fontWeight:"bold", fontSize:24, textAlign:"center"}}>{name}</Text>

            <Text style={{fontWeight:"bold"}}> Capitulos</Text>
            <View style={{ flexDirection:"row",flexWrap:'wrap',alignItems:"center", alignContent:'center', }}>

            {elemet.map((number)=>(
                <TouchableOpacity onPress={()=>router.push({pathname:"/(tabs)/stackRoutes/chapterBook",params:{book:name, chapter:number, abbrev:abbrev}})} key={number} style={{backgroundColor:"white", width:50, height:50, alignItems:"center", alignContent:'center', margin:4, justifyContent:"center"}}>
                <Text  >{number}</Text>
                </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}