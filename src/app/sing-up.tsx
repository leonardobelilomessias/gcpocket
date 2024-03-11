import { Singin } from '@/Screens/AccessScreens/Singin';
import { Singup } from '@/Screens/AccessScreens/Singup';
import { LoadingAuthRoutes } from '@/Screens/LoadScreens/LoadingAuthRoutes';
import { useDataUser } from '@/context/AuthContext';
import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function singUp() {


  return (

          <Singup/>

  );
}