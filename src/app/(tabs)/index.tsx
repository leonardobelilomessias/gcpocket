import axios from 'axios';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { useDataBible } from '@/context/ContextBible';
import { Href, router } from 'expo-router';
import { Entypo ,Ionicons, FontAwesome} from '@expo/vector-icons';
import groupGc from '@/assets/gcGoupImage.jpg'
import { SearchScreen } from '@/Screens/SearchScreen';

type dataBibletype = {
    number:number
    text:string
  
}[]

export default function TabOneScreen() {
  const {booksBible,setBooksBible}= useDataBible()
  const [verses,setVerses] = useState([] as dataBibletype)
  const [chapter,setchapter] = useState("1")
  async function getBible(){
    
  
  }
  return (
    <SearchScreen/>
  );
}

function CardGc(){
  return(
    <View  style={styles2.cardContainer}>
      <View style={styles2.boxAvatar} >
          <View style={styles2.imageCard}>
            <Image alt='image' source={groupGc} resizeMode='cover' style={{width:60, height:60, borderRadius:60}}  width={50} height={50}/>
          </View>
          <View>
              <Text style={styles2.titleCard}>Vine</Text>
              <Text style={styles2.descriptionCard}>Jovens</Text>
              <Text style={styles2.descriptionCard}>Lider: Henrique</Text>
          </View>
      </View>
      <View style={styles2.footerInfo}>
        <Entypo name="location-pin" size={12} color="black" />
        <Text style={styles2.footerInfoText}>Avenida amazonas 1155 </Text>
         
        <Ionicons name="alarm" size={12} color="black" />
        <Text style={styles2.footerInfoText}>domingo às 18:00</Text>
      </View>
    </View>
  )
}

const styles2 = StyleSheet.create({
  cardContainer:{
    borderWidth:1,
    borderColor:"gray",
    padding:8,
    borderRadius:8
  },
  boxAvatar: {
    backgroundColor:"white",
    flexDirection:"row",
    width:"100%", 
    borderRadius:8,
    alignItems:"center"
    
  },
  titleCard: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionCard: {
    color:'gray',
    fontSize:12
  },
  imageCard:{
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:"gray",
    marginRight:12
  },
  footerInfo:{
    flexDirection:"row",
    alignItems:"center"
  },
  footerInfoText:{
    fontWeight:"500",
    fontSize:12,
    color:"gray"
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
