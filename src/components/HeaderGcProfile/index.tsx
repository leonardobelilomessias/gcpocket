import { View, ScrollView, Pressable, Text, Image, ScrollViewBase, StyleSheet } from "react-native";
import imageprofile from '@/assets/gcGoupImage.jpg'
import MapView, { Marker } from 'react-native-maps';
import iconLocal from '@/assets/localicon.png'
import { IconsOptions } from "./iconsOptions";

type HeaderGcProfileProps={
    id:string
    name:string,
    image_profile:string| null| undefined
}
export function HeaderGcProfile({ id,image_profile,name}:HeaderGcProfileProps){
    return(
        <View style={styles.container}>
                <View style={{ width: 128, height: 128, }}>
                    <Image source={imageprofile} resizeMode='cover' style={{ width: 128, height: 128, borderRadius: 120 }} />
                </View>
            <View style={{flexDirection:"column"}}>
                <Text style={styles.title}>{name}</Text>
                <IconsOptions id_gc={id} gc_name={name}/>
                <ButtonsHeader/>
            </View>

        </View>
    )
}

// liçoes, quebragelo,mebros

function ButtonsHeader(){
    return(
        <View style={{ flexDirection: 'row', }}>
            <Pressable style={{ margin: 4, minWidth: 100, height: 32, backgroundColor: "black", alignContent: 'center', justifyContent: "center", alignItems: "center", borderRadius: 45 }}>
                <Text style={{ color: "white" }}>seguir</Text>
            </Pressable>
            <Pressable style={{ margin: 4, minWidth: 100, height: 32, backgroundColor: "white", borderWidth: 1, borderColor: "black", alignContent: 'center', justifyContent: "center", alignItems: "center", borderRadius: 45 }}>
                <Text style={{ color: "black" }}>Ser membro</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "black"
    },
})