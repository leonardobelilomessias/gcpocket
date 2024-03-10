import { DevotionaisUserScreen } from "@/Screens/UserScreens/DevotionaisUserScreen.tsx";
import { useLocalSearchParams } from "expo-router";

export default function devotionaisUser(){
    const {id_user,user_name} = useLocalSearchParams()
    return(
        <DevotionaisUserScreen id_user={id_user as string} user_name={ user_name as string}/>
    )
}