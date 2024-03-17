import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/exampleuserimage.png'
import { useLocalSearchParams } from 'expo-router';
import { UserProfileScreen } from '@/Screens/UserScreens/UserProfileScreen';


export default function profileUser() {
    const {id_user,name} = useLocalSearchParams()
  const graysoft = "#F7F7F7"
  return (
    <UserProfileScreen   />
  );
}

