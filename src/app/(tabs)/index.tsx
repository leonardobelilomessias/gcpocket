
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HomeScreen } from '@/Screens/TabRoutesScreens/HomeSreen';
import { testecriarEstruturaAninhada } from '@/utils/functions';
import { Sheet } from '@/components/Sheet';
import { useState } from 'react';

export default function index() {
  const [showMenu, setShowMenu] = useState(false)
  function toggle(){
    setShowMenu((preststate)=>!preststate)
  }
return (
    
    <>
    <Button title='teste' onPress={()=>{setShowMenu(true)}}/>
  
    <HomeScreen/>
    {
      showMenu &&
    <Sheet showMenu={showMenu} setShowMenu={setShowMenu} onClose={toggle}/>
    }
    </>
  );
}




