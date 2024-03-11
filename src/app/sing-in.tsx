import { Singin } from '@/Screens/AccessScreens/Singin';
import { LoadingAuthRoutes } from '@/Screens/LoadScreens/LoadingAuthRoutes';
import { useDataUser } from '@/context/AuthContext';
import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function SingIn() {
//const {dataAgent,tokenAgent, loading} = useDataAgent()
 useEffect(()=>{
     const loading = false
     const tokenAgent = ""

 },[])

if(false)return(
<LoadingAuthRoutes/>
)
if(false){
  return<Redirect href={'/'}/>
  
}
  return (

          <Singin/>

  );
}