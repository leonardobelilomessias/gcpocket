import { LessonScreen } from "@/Screens/GcScreens/LessonScreen"
import { useLocalSearchParams } from "expo-router"

export default function Lesson(){
    const {id_lesson} = useLocalSearchParams()
    return(
        <LessonScreen id_lesson={id_lesson as string}/>
    )
}