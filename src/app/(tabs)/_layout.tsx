import React from 'react';
import{ FontAwesome, FontAwesome5, FontAwesome6} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';


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
      <Tabs.Screen name="index" options={{title: 'Home',tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
      headerRight: () => (
              <Pressable>
                {({ pressed }) => (<FontAwesome name="info-circle"size={25}color={"gray"}style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>)}
              </Pressable>),}}
        />
     
      <Tabs.Screen name="two"options={{title: 'Biblia',tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,}}/>

      <Tabs.Screen name="profile"options={{title: 'Profile',tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />, }}/>
    
    </Tabs>
  </>
  );
}
