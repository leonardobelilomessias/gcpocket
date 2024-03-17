import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import imageprofile from '@/assets/exampleuserimage.png'
import { useLocalSearchParams } from 'expo-router';
import { HeaderUserProfile } from './HeaderUserProfile';
import { AboutUser } from './AboutUser';
import { GcUser } from './GcUser';
import { DevotionaisUser } from './DevotionaisUser';
import { useDataUser } from '@/context/AuthContext';


export  function UserProfileScreen() {
  const {user}= useDataUser()
  return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                    <HeaderUserProfile url_image={user.image_profile} id_user={user?.id} name={user?.name} />
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
