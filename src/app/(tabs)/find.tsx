import axios from 'axios';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function find() {

  return (
    
    <View style={styles.container}>
     <View style={{backgroundColor:'white', height:200, margin:8, padding:8}}>
      
      <Text>Buscar</Text>
      <CardGc/>

      </View>
    </View>
  );
}

function CardGc(){
  return(
    <View style={styles2.containerCard} >
        <View style={styles2.imageCard}>
          <Image alt='image' src=''/>
        </View>
        <View>
            <Text style={styles2.titleCard}>my name</Text>
            <Text style={styles2.descriptionCard}>Local</Text>
        </View>
    </View>
  )
}

const styles2 = StyleSheet.create({
  containerCard: {
    height:70,
    backgroundColor:"white",
    flexDirection:"row",
    borderColor:"gray",
    borderWidth:1,
    width:"100%"
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionCard: {

  },
  imageCard:{
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:"gray",
    marginRight:12
  }
});
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
