import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/exampleuserimage.png'
import { useLocalSearchParams } from 'expo-router';
import { HeaderUserProfile } from './HeaderUserProfile';
import { AboutUser } from './AboutUser';
import { GcUser } from './GcUser';
import { DevotionaisUser } from './DevotionaisUser';


export  function UserProfileScreen({name,id_user}:{name:string, id_user:string}) {
    console.log(id_user)
  const graysoft = "#F7F7F7"
  return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                    <HeaderUserProfile id_user={id_user} name={name} />
                    <AboutUser/>
                    <GcUser/>
                    <DevotionaisUser/>
            </View>
        </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"white", padding:8,
    paddingBottom:20
  },
});
