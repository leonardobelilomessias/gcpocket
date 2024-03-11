import axios from 'axios';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { useDataBible } from '@/context/ContextBible';
import { Href, router } from 'expo-router';
import { Entypo ,Ionicons, FontAwesome} from '@expo/vector-icons';
import groupGc from '@/assets/gcGoupImage.jpg'
import { CardGc } from '@/components/Cards/GcCard';

type dataBibletype = {
    number:number
    text:string
  
}[]

export  function SearchScreen() {
  return (
    
    <View style={styles.container}>
     <View style={{backgroundColor:'white',  padding:8, flex:1}}>
      
      <View style={styles.inputFindContainer}>
      <FontAwesome style={styles.inputFindIcon} name="search" size={20} color="black" />
      <TextInput style={styles.inputFindText} placeholder='Buscar'/>
      </View>
      <CardGc day='Domingo' id='0055' leader='Henriqe' local='Rua itapetinga 87' name='Vine' time='18:00' type='Jovens'/>
      <CardGc day='Domingo' id='0055055' leader='Gabriel' local='Rua itapetinga 87' name='Refugio' time='18:00' type='Jovens'/>
      <CardGc day='Domingo' id='005asd5' leader='Henriqe' local='Rua itapetinga 87' name='Vine' time='18:00' type='Jovens'/>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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
  inputFindContainer:{
    flexDirection:"row",
    borderWidth:1,
    borderColor:'gray',
    borderRadius:8,
    padding:8,
    alignItems:"center", 
    marginVertical:8
  },
  inputFindIcon:{
    marginRight:12
  },
  inputFindText:{
    fontSize:18,
    width:"100%"
  }
});
