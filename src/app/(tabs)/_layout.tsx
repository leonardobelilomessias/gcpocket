import React from 'react';
import{ FontAwesome, FontAwesome5, FontAwesome6} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome | typeof  FontAwesome >['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <>
    <StatusBar backgroundColor='red' style='dark' translucent={false}/>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerStyle:{ height:50}, headerStatusBarHeight:0, headerTitleContainerStyle:{padding:0, height:50}
      }}>
      <Tabs.Screen name="index" options={{headerTitle:()=>null,title: 'Home',tabBarIcon: ({ color }) => <Entypo name="home" size={28} color={color} />,
      headerRight: () => (
              <Pressable>
                {({ pressed }) => (<FontAwesome name="info-circle"size={25}color={"gray"}style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>)}
              </Pressable>),
            headerLeft:()=>
            <View style={{padding:8, flexDirection:"row", alignItems:'flex-end', }}>
            <Text style={{fontSize:24,fontWeight:"bold"}}>Gc</Text>
            <Text style={{fontSize:8,lineHeight:24}}> pocket</Text>  
            </View>
            }}
        />
      <Tabs.Screen name="bible"options={{title: 'Biblia',tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,}}/>
      <Tabs.Screen name="find"options={{title: 'Buscar',tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />, }}/>
      <Tabs.Screen name="profile"options={{title: 'Profile',tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />, }}/>

      <Tabs.Screen name="stackRoutes"options={{ headerShown:true, headerStatusBarHeight:0, headerStyle:false, headerTitle:()=>null,header:()=>null,tabBarButton:()=>null }}/>
    </Tabs>
  </>
  );
}
