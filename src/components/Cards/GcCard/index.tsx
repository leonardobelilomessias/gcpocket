import axios from 'axios';
import { useState } from 'react';
import {  Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { Entypo ,Ionicons, FontAwesome} from '@expo/vector-icons';
import groupGc from '@/assets/gcGoupImage.jpg'

type CardGcProps={
    id:string
    name:string
    type:string
    day:string
    time:string
    local:string
    leader:string
}
export function CardGc({day,id,local,name,time,type,leader}:CardGcProps){
    return(
      <View  style={styles2.cardContainer}>
        <View style={styles2.boxAvatar} >
            <View style={styles2.imageCard}>
              <Image alt='image' source={groupGc} resizeMode='cover' style={{width:60, height:60, borderRadius:60}}  width={50} height={50}/>
            </View>
            <View>
                <Text style={styles2.titleCard}>{name}</Text>
                <Text style={styles2.descriptionCard}>{type}</Text>
                <Text style={styles2.descriptionCard}>Lider: {leader}</Text>
            </View>
        </View>
        <View style={styles2.footerInfo}>
          <Entypo name="location-pin" size={12} color="black" />
          <Text style={styles2.footerInfoText}>{local} </Text>
           
          <Ionicons name="alarm" size={12} color="black" />
          <Text style={styles2.footerInfoText}>{day} às {time}</Text>
        </View>
      </View>
    )
  }


const styles2 = StyleSheet.create({
    cardContainer:{
      borderBottomWidth:1,
      borderColor:"gray",
      padding:8,
      borderRadius:8,
      backgroundColor:'white',
      
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