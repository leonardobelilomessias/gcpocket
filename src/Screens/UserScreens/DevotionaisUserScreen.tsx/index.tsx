import { DevotionalCard } from '@/components/Cards/DevotionalCard';
import { LessonCard } from '@/components/Cards/LessonCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function DevotionaisUserScreen({id_user, user_name}:{id_user:string, user_name:string}){
    const [test,setTest] = useState(true)
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea natus quod consequuntur et! Perferendis assumenda nulla, voluptatibus natus aperiam quae praesentium provident. Atque maxime unde, inventore neque sunt eum accusamus?"


return(    

        <View style={{padding:8, backgroundColor:"white", flex:1}}>
            <DevotionalCard creator='@user_name' id_devotional='0566' reference='isaias 42:10' resume={text} title='Title Devotional'/>


        </View>

    )
}