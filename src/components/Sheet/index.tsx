import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {GestureDetector,Gesture} from "react-native-gesture-handler"
import Animated,{useSharedValue,withSpring,withTiming,runOnJS,useAnimatedStyle} from "react-native-reanimated";
export function Sheet({onclose}:{onclose:()=>void}){
    function close(){
        offset.value = 0
        onclose()

    }
    const shetoverdrag = 20
    const shetheight = 200
    const offset = useSharedValue(0)
    const pan = Gesture.Pan().onChange((event)=>{ 
        const offsetDelta = event.changeY +offset.value
        const clamp = Math.max(-shetoverdrag,offsetDelta)
        offset.value = offsetDelta >0?offsetDelta:withSpring(clamp)
    }).onFinalize(()=>{
        if(offset.value<shetheight/3){
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(shetheight,{},()=>{
                runOnJS( close)()
            })
        }
    })
    const translatey = useAnimatedStyle(()=>({
        transform:[{translateY:offset.value}]
    }))
    return( 
        <GestureDetector gesture={pan}>

        <Animated.View style={[{ height:200,position:"absolute",bottom:50,  backgroundColor:"white", width:"100%",},translatey]}>
            <View style={{alignContent:"center", alignItems:"center", padding:8}}>

            <MaterialCommunityIcons name="drag-horizontal" size={26}/>
            </View>
           <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>
           <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>

           <OptionMenu title="Devocional" onpress={()=>console.log("devocional")}/>

        </Animated.View>
        </GestureDetector>
    )
}

function OptionMenu({title,onpress}:{title:string,onpress:({}?:any)=>void}){
    return(
        <TouchableOpacity style={{padding:12}}>
            <Text>title</Text>
        </TouchableOpacity>
    )
}