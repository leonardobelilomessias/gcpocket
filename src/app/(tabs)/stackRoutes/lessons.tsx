import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from "expo-router";
import { LessonsScreen } from "@/Screens/GcScreens/LessonsScreen";

type paramsLesson={
    gc_name:string
    id_gc:string
}
export default function Lessons(){
    const{gc_name, id_gc} = useLocalSearchParams<paramsLesson>()
    return(
        <LessonsScreen gc_name={gc_name} id_gc={id_gc}/>
    )
}

