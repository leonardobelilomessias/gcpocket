import { ActivityIndicator, Text, View } from "react-native";

export function LoadingAuthRoutes(){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Carregando</Text>
        </View>
    )
}