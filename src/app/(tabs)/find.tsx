import axios from 'axios';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { useDataBible } from '@/context/ContextBible';
import { Href, router } from 'expo-router';


type dataBibletype = {
    number:number
    text:string
  
}[]

export default function find() {
  const {booksBible,setBooksBible}= useDataBible()
  const [verses,setVerses] = useState([] as dataBibletype)
  const [chapter,setchapter] = useState("1")
  async function getBible(){
    
  
  }
  return (
    
    <View style={styles.container}>
     <View style={{backgroundColor:'white', height:200, margin:8, padding:8}}>
      
      <Text>Buscar</Text>
      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


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
