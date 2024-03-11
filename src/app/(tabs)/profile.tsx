import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/exampleuserimage.png'
import { GcProfileScreen } from '@/Screens/GcScreens/GcProfileScreen';
import { UserProfileScreen } from '@/Screens/UserScreens/UserProfileScreen';


export default function profile() {
  const name = "my name"
  const id="5556596"
  return (
    <UserProfileScreen  name={name}  id_user={id}/>
  );
}

