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
      <SafeAreaView style={styles.container}>
        <AuthDataProvider>
        <BibleContex>
          <Slot  />
        </BibleContex>
        </AuthDataProvider>
  
      </SafeAreaView>
    </View>
    </GestureHandlerRootView>

  );
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
