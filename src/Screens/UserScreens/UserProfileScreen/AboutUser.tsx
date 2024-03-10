import { Text, View } from "react-native";

export function AboutUser(){
    return(
        <View style={{width:"90%", marginVertical:8}}>
        <Text style={{fontWeight:'bold'}}>
          Sobre
        </Text>
        <Text>
        Empreendedor social  a 5 anos na área de desenvolvimento social. Com 2 projetos em curso e mais de 2 mil jovens alcançados.
        </Text>
      </View>
    )
}