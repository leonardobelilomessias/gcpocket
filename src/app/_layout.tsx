import { AuthDataProvider, useDataUser } from '@/context/AuthContext';
import { BibleContex } from '@/context/ContextBible';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import {   Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export {ErrorBoundary,} from 'expo-router';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {GestureDetector,Gesture} from "react-native-gesture-handler"
import Animated,{useSharedValue,withSpring,withTiming,runOnJS,useAnimatedStyle} from "react-native-reanimated";
export const unstable_settings = {
  initialRouteName: '(tabs)',
};
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [showMenu,setShowMenu] = useState(false)


  return (
    <GestureHandlerRootView style={{flex:1}}>
      
    <View style={styles.containerApp}>
      <Button title='show menu' color={"black"} onPress={()=>setShowMenu(!showMenu)}/>
      <SafeAreaView style={styles.container}>
        <AuthDataProvider>
        <BibleContex>
          <Slot  />
        </BibleContex>
        </AuthDataProvider>
        {
          showMenu&&
        <Sheet onclose={()=>{}}/>
        }
      </SafeAreaView>
    </View>
    </GestureHandlerRootView>

  );
}
export function Sheet({onclose}:{onclose:()=>void}){
  function close(){
      offset.value = 0
      onclose()

  }
  const shetoverdrag = 10
  const shetheight = 200
  const offset = useSharedValue(0)
  const pan = Gesture.Pan().onChange((event)=>{ 
      const offsetDelta = event.changeY +offset.value
      const clamp = Math.max(-shetoverdrag,offsetDelta)
      offset.value = offsetDelta >0?offsetDelta:withSpring(clamp)
  }).onFinalize(()=>{
      if(offset.value<shetheight/3){
          offset.value = withSpring(0)
      }else{
          offset.value = withTiming(shetheight,{},()=>{
              runOnJS( close)()
          })
      }
  })
  const translatey = useAnimatedStyle(()=>({
      transform:[{translateY:offset.value}]
  }))
  return( 
      <GestureDetector gesture={pan}>

      <Animated.View style={[{ height:200,position:"absolute",bottom:50,  backgroundColor:"white", width:"100%",},translatey]}>
          <View style={{alignContent:"center", alignItems:"center", padding:8}}>

          <MaterialCommunityIcons name="drag-horizontal" size={26}/>
          </View>
         <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>
         <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>

         <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>

      </Animated.View>
      </GestureDetector>
  )
}

function OptionMenu({title,onpress}:{title:string,onpress:({}?:any)=>void}){
  return(
      <TouchableOpacity style={{padding:12}}>
          <Text>title</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  containerApp:{
    flex: 1,
    backgroundColor: 'white',
  }
});
