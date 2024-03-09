import axios from 'axios';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { useDataBible } from '@/context/ContextBible';
import { Href, router } from 'expo-router';


type dataBibletype = {
    number:number
    text:string
    abbrev:string
  
}[]

export default function bible() {
  const {booksBible,setBooksBible}= useDataBible()
  const [verses,setVerses] = useState([] as dataBibletype)
  const [chapter,setchapter] = useState("1")
  async function getBible(){
    
  
  }
  return (
    
    <View style={styles.container}>

      <FlatList
      data={booksBible}
      style={{width:"100%", padding:8}}
      extraData={booksBible}
      renderItem={({item})=>(
        
        <TouchableOpacity onPress={()=>{router.push({pathname:"/(tabs)/stackRoutes/chaptersBible", params:{name:item.name,number:item.chapters, abbrev:item.abbrev.pt}})}}>
        <View style={{width:"100%", backgroundColor:"#F7F7F7", padding:12, margin:4}}>
        <Text style={{ width:"100%", fontWeight:'600'}}>{item.name}</Text>
        </View>
        </TouchableOpacity>
       
      )}
      />

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
