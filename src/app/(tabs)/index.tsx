import axios from 'axios';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type dataBibletype = {
    number:number
    text:string
  
}[]

export default function TabOneScreen() {
  const [verses,setVerses] = useState([] as dataBibletype)
  async function getBible(){
    const result = await axios.get("https://www.abibliadigital.com.br/api/verses/nvi/sl/1")
    setVerses(result.data.verses)
    console.log(result.data.verses)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TouchableOpacity onPress={()=>{getBible()}} style={{width:120, height:40, backgroundColor:"black", alignItems:'center', justifyContent:"center"}}>
        <Text style={{color:"white"}}>pegar capitulo</Text>
      </TouchableOpacity>
      <FlatList
      data={verses}
      renderItem={({item})=>(
        <Text style={{backgroundColor:item.number%2===0?"white":"#F0F0F0"}}>{item.number} {item.text}</Text>
      )}
      />
      <View style={styles.separator}   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
