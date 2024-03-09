import { Button, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/gcGoupImage.jpg'
import MapView, { Marker } from 'react-native-maps';
import iconLocal from '@/assets/localicon.png'
import { HeaderGcProfile } from '@/components/HeaderGcProfile';
import {Entypo,Ionicons} from "@expo/vector-icons"
export function GcProfileScreen() {
    const graysoft = "#F7F7F7"
    return (

            <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor:'white', flex:1, paddingHorizontal:12}}>
            <HeaderGcProfile  name='Vine' id='0245' image_profile={null}/>
            <View style={{  marginVertical: 8 , backgroundColor:'white'}}>
                <Text style={{ fontWeight: 'bold' }}>Sobre</Text>
                <Text>Empreendedor social  a 5 anos na área de desenvolvimento social. Com 2 projetos em curso e mais de 2 mil jovens alcançados.</Text>
            </View>

            <View style={{ backgroundColor: graysoft, height: 50, flexDirection: "row", alignItems: 'center', borderRadius: 8, }}>
                <Text style={{ fontWeight: "bold", width: 60, alignItems: "center", textAlign: 'center', color: 'gray' }}>Lider</Text>
                <View style={{ backgroundColor: "gray", width: 1, height: 40 }} />
                <View style={{ flexDirection: "row", width: 100, marginLeft: 8, alignItems: "center" }}>
                    <View >
                        <Image style={{ width: 30, height: 30, backgroundColor: "gray", borderRadius: 50, marginRight: 8 }} />
                    </View>
                    <Text style={{ fontWeight: "bold", textAlign: 'center', color: 'black' }}>Henrique</Text>
                </View>
            </View>
                <CardStaff/>
                <GcMap/>
                <ListDevotional/>
        </View>
            </ScrollView>
    );
}

function CardStaff() {
    const graysoft = "#F7F7F7"
    return (
        <View style={{  marginVertical: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Staffs</Text>
            <View style={{ backgroundColor: graysoft, height: 50, flexDirection: "row", alignItems: 'center', borderRadius: 8, }}>
                <View style={{ backgroundColor: "gray", width: 1, height: 40 }} />
                <View style={{ flexDirection: "row", width: 100, marginLeft: 8, alignItems: "center" }}>
                    <View >
                        <Image style={{ width: 30, height: 30, backgroundColor: "gray", borderRadius: 50, marginRight: 8 }} />
                    </View>
                    <Text style={{ fontWeight: "bold", textAlign: 'center', color: 'black' }}>Bruno</Text>
                </View>
            </View>
        </View>
    )
}
 function GcMap() {
    const latitude= -19.89807660612404
    const longitude= -43.945802421100396
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return (
        
        <>
        <View style={{ flexDirection:'row', alignItems:"center", marginVertical:8}}>
          <Entypo name="location-pin" size={18} color="black" />
          <Text style={{fontWeight:"500"}}>rua itapetinga 87 </Text>
           
          <Ionicons name="alarm" size={18} color="black" />
          <Text style={{fontWeight:'500'}}>domingo às 18:00</Text>
        </View>
       <MapView style={stylesmap.map}    initialRegion={{
           latitude: -19.89807660612404,
           longitude: -43.945802421100396,
           latitudeDelta: 0.01,
           longitudeDelta: 0.01,
           
      }}>

        <Marker
        icon={4}
        style={{width:1, height:1}}
          coordinate={{
            latitude: -19.89807660612404, // latitude da rua Itapetinga 87, Belo Horizonte
            longitude: -43.945802421100396, // longitude da rua Itapetinga 87, Belo Horizonte
        }}
        title="Rua Itapetinga 87"
        description="Belo Horizonte"
        image={iconLocal}
        
        />
            
        </MapView>
        <Button title='Abrir no maps' onPress={()=> Linking.openURL(url)}/>
        </>
    );
  }

function ListDevotional(){
    return(
    <View style={{padding:8, borderWidth:1,borderColor:"#EAEDED", marginVertical:8}}>
        <View style={{flexDirection:"row", alignItems:'center'}}>
            <View style={{width:30, height:30, borderRadius:30, marginRight:8}}>
                <Image style={{width:30, height:30, borderRadius:30}} source={imageprofile}/>
            </View>
            <Text style={{fontWeight:'500'}}>Name user</Text>
        </View>
        <Text style={{fontWeight:"bold", fontSize:18}}>Title devotional</Text>
        <View style={{backgroundColor:"#EAEDED"}}>
            <Text>isaias 41:10</Text>
        </View>
        <Text>Body contant devotional user Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, expedita hic eos perferendis nemo illo totam harum quae corrupti consequatur debitis deserunt quia ut tenetur doloribus reprehenderit! Cum, quisquam eligendi!</Text>        
    </View>
    )

}

  const stylesmap = StyleSheet.create({
    container: {
      flex: 1,
      padding:100,
      backgroundColor:'red'
    },
    map: {
      width: '100%',
      height: 100,
    },
  });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white", 
        paddingBottom:20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "black"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
