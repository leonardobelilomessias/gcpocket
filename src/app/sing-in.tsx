import { Singin } from '@/Screens/AccessScreens/Singin';
import { LoadingAuthRoutes } from '@/Screens/LoadScreens/LoadingAuthRoutes';
import { useDataUser } from '@/context/AuthContext';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function SingIn() {
const {user, token,loadLogin} = useDataUser()
  useEffect(()=>{
     const loading = false
     const tokenAgent = ""

 },[])

if(loadLogin)return(
<LoadingAuthRoutes/>
)
// if(true){
//   return<Redirect href={'/verifyEmail'}/>
  
// }
if(token){
  return<Redirect href={'/(tabs)'}/>
  
}

  return (
          <>
            <StatusBar backgroundColor='black' style='inverted'/>
            <Singin/>
          </>

  );
}