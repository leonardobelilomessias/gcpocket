import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function DynamicScreen({id_dynamic}:{id_dynamic:string}){

    return(
        <View style={{alignItems:"center", padding:8, backgroundColor:"white", flex:1}}>
            <FontAwesome5 name="cubes" size={28} color="black" />
            <Text style={{fontWeight:"500", fontSize:10}}>Lição</Text>
            <Text style={{fontSize:24, textAlign:'center', fontWeight:"500"}}>Title dynamic Screen {id_dynamic}</Text>
            <Text style={{fontWeight:"500",backgroundColor:"#F7F7F7", fontStyle:"italic", padding:8, color:'gray'}}>Isaias 42:10</Text>
            <Text style={{}}>
                {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem natus possimus sintquo 
reprehenderit perspiciatis tenetur necessitatibus a vitae, cum ut iusto illum, optio nostrum dolor. Accusantium, saepe reiciendis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem natus possimus sintquo 
reprehenderit perspiciatis tenetur necessitatibus a vitae, cum ut iusto illum, optio nostrum dolor.

`}
{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem natus possimus sintquo 
reprehenderit perspiciatis tenetur necessitatibus a vitae, cum ut iusto illum, optio nostrum dolor. Accusantium, saepe reiciendis.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem natus possimus sintquo 
reprehenderit perspiciatis tenetur necessitatibus a vitae, cum ut iusto illum, optio nostrum dolor. 
                `}

            </Text>
        </View>
    )
}