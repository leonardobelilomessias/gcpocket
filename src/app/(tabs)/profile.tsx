import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/exampleuserimage.png'


export default function TabTwoScreen() {
  const graysoft = "#F7F7F7"
  return (
    <View style={styles.container}>
          <View style={{width:120, height:120,}}>
            <Image source={imageprofile} resizeMode='cover' style={{width:120 , height:120}}  />
          </View>
          <Text style={styles.title}>My name</Text>
        <View style={{flexDirection:'row'}}>
            <Pressable style={{margin:4, minWidth:100,height:32, backgroundColor:"blue", alignContent:'center', justifyContent:"center", alignItems:"center", borderRadius:45}}>
              <Text style={{color:"white"}}>seguir</Text>
            </Pressable>
            <Pressable style={{margin:4, minWidth:100,height:32, backgroundColor:"white", borderWidth:1,borderColor:"blue",alignContent:'center', justifyContent:"center", alignItems:"center", borderRadius:45}}>
              <Text style={{color:"blue"}}>mensagem</Text>
            </Pressable>
        </View>
        <View style={{width:300, marginVertical:8}}>
          <Text style={{fontWeight:'bold'}}>
            Sobre
          </Text>
          <Text>
          Empreendedor social  a 5 anos na área de desenvolvimento social. Com 2 projetos em curso e mais de 2 mil jovens alcançados.
          </Text>
        </View>
        <View style={{backgroundColor:graysoft, width:300, height:50, flexDirection:"row", alignItems:'center', borderRadius:8}}>
         <Text style={{fontWeight:"bold", width:60, alignItems:"center", textAlign:'center',color:'gray'}}>GC</Text>
         <View style={{backgroundColor:"gray", width:1, height:40}}/>
         <Text style={{fontWeight:"bold", width:100, alignItems:"center", textAlign:'center',color:'black'}}>Vine</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"white"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"black"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
