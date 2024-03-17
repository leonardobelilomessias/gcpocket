import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { Text, View } from "react-native";
import ImageCreated from '@/assets/devotiona-created.svg'
import { useRoute } from "@react-navigation/native";
import { router, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React from "react";
export function CreatedDevotional(){
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    React.useLayoutEffect(() => {
        navigation.setOptions({title:"" });
      }, [navigation, params]);
    return(
        <View style={{alignContent:"center", justifyContent:"center", alignItems:"center", flex:1, backgroundColor:"white", padding:20}}>
                <ImageCreated style={{width:"90%", height:250}} />
                <Text style={{fontSize:24, fontWeight:"600", marginBottom:8, textAlign:"center"}}>Devocional criado con sucesso!</Text>
                <Text style={{fontSize:18, fontWeight:"400", marginBottom:20, textAlign:"center"}}>Você pode clicar em ver devocional para conferir sua publicação, ou clicar em voltar ao inicio para ir para pagina inicial.</Text>

                <ButtonForm bg="black" textColor="white"  handleButton={()=>{router.push("/stackRoutes/devotional")}} title="Ver Devocional"/>
                <ButtonForm  handleButton={()=>{router.push("/")}} title="Voltar ao inicio"/>


        </View>
    )
}
