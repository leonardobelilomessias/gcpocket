import { DynamicCard } from '@/components/Cards/DynamicCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function DynamicsScreen({id_gc, gc_name}:{id_gc:string, gc_name:string}){
    const [test,setTest] = useState(true)
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea natus quod consequuntur et! Perferendis assumenda nulla, voluptatibus natus aperiam quae praesentium provident. Atque maxime unde, inventore neque sunt eum accusamus?"


return(    

        <View style={{padding:8, backgroundColor:"white", flex:1}}>
            <DynamicCard creator='@user_name' id_dynamic='0566' reference='isaias 42:10' resume={text} title='Title dynamic'/>
        </View>

    )
}