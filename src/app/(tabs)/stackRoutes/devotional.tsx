import { DevotionalScreen } from "@/Screens/UserScreens/DevotionalScreen";
import { useLocalSearchParams } from "expo-router";

export default function devotional(){
    const {id_devotional} = useLocalSearchParams()
    
    return(<DevotionalScreen id_devotional={id_devotional as string}/>)
}