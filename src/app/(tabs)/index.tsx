
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HomeScreen } from '@/Screens/TabRoutesScreens/HomeSreen';
import { testecriarEstruturaAninhada } from '@/utils/functions';

export default function index() {
return (
    
    <>
    <Button title='teste' onPress={()=>{testecriarEstruturaAninhada()}}/>
    <HomeScreen/>
    </>
  );
}




