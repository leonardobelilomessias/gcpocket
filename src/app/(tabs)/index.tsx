import axios from 'axios';
import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Camera} from 'expo-camera'
import { useDataBible } from '@/context/ContextBible';
import { Href, router } from 'expo-router';
import { Entypo ,Ionicons, FontAwesome} from '@expo/vector-icons';
import groupGc from '@/assets/gcGoupImage.jpg'
import { SearchScreen } from '@/Screens/TabRoutesScreens/SearchScreen';
import { HomeScreen } from '@/Screens/TabRoutesScreens/HomeSreen';

type dataBibletype = {
    number:number
    text:string
  
}[]

export default function TabOneScreen() {
  return (
    <HomeScreen/>
  );
}
