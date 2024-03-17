import { Singin } from '@/Screens/AccessScreens/Singin';
import { Singup } from '@/Screens/AccessScreens/Singup';
import { LoadingAuthRoutes } from '@/Screens/LoadScreens/LoadingAuthRoutes';
import { useDataUser } from '@/context/AuthContext';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function singUp() {
const {user,token,loadLogin} = useDataUser()


if(loadLogin){
  return<LoadingAuthRoutes/>
  
}
  if(token){
    return<Redirect href={'/(tabs)'}/>
    
  }
  return (
    <>
       <StatusBar backgroundColor='black' style='inverted'/>
       <Singup/>
    </>

  );
}