import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ReactElement } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {GestureDetector,Gesture,gestureHandlerRootHOC} from "react-native-gesture-handler"

import Animated,{useSharedValue,withSpring,withTiming,runOnJS,useAnimatedStyle,SlideInDown,SlideOutDown} from "react-native-reanimated";
const shetoverdrag = 20
const shetheight = 300
export function Sheet({onClose,showMenu, setShowMenu}:{setShowMenu:(data:boolean)=>void,showMenu:boolean,onClose:()=>void}){
    function close(){
        offset.value = 0
        onClose()
    
    }
    const offset = useSharedValue(0)
    const pan = Gesture.Pan().onChange((event)=>{ 
        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(-shetoverdrag,offsetDelta)
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    }).onFinalize(()=>{
        console.log(offset.value)
        
        if(offset.value < shetheight / 3){
            offset.value = withSpring(0)
    
        }else{
            offset.value = withTiming(shetheight,{},()=>{
                runOnJS(close)()
            })
        }
    })
    const translatey = useAnimatedStyle(()=>({
        transform:[{translateY:offset.value}]
    }))
    return( 
        <>
            <Pressable onPress={()=>setShowMenu(false)} style={{ flex:1,height:"100%", width:"100%", position:"absolute"}}>

       
             </Pressable>
        <GestureDetector gesture={pan}>
            <Animated.View entering={SlideInDown.springify().damping(15)} exiting={SlideOutDown} style={[{ height:shetheight,position:"absolute",bottom:-shetoverdrag*1.3,  backgroundColor:"white", width:"100%",},translatey]}>
                
                    <View style={{alignContent:"center", alignItems:"center", padding:8,  backgroundColor:"white", borderWidth:0.2, borderColor:"gray"}}>
                        <MaterialCommunityIcons name="drag-horizontal" size={26}/>
                    </View>
                    <OptionMenu icon={<MaterialIcons name="menu-book" size={18} color="black" />} title="Devocional" onpress={()=>console.log("devocional")}/>
                    <OptionMenu icon={<FontAwesome name="slideshare" size={18} color="black" />} title="Momento" onpress={()=>console.log("devocional")}/>
                    <OptionMenu icon={<MaterialCommunityIcons name="window-close" size={18} color="black" />} title="Fechar" onpress={()=>console.log("devocional")}/>
            </Animated.View>
        </GestureDetector>
        </>

    )
}

function OptionMenu({title,onpress,icon}:{title:string,onpress:({}?:any)=>void, icon:ReactElement}){
    return(
        <TouchableOpacity style={{padding:12, flexDirection:"row",alignItems:"center"}}>
            {icon}
            <Text style={{fontWeight:"600", marginHorizontal:8}}>{title}</Text>
        </TouchableOpacity>
    )
}
export function SheetCopy({onClose,showMenu, setShowMenu}:{setShowMenu:(data:boolean)=>void,showMenu:boolean,onClose:()=>void}){
    function close(){
        offset.value = 0
        onClose()
    
    }
    const offset = useSharedValue(0)
    const pan = Gesture.Pan().onChange((event)=>{ 
        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(-shetoverdrag,offsetDelta)
        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    }).onFinalize(()=>{
        console.log(offset.value)
        
        if(offset.value < shetheight / 3){
            offset.value = withSpring(0)
            console.log("ofsset",offset.value)
        }else{
            offset.value = withTiming(shetheight,{},()=>{
                runOnJS(close)()
            })
        }
    })
    const translatey = useAnimatedStyle(()=>({
        transform:[{translateY:offset.value}]
    }))
    return( 
            <>


        <GestureDetector gesture={pan}>
            <Animated.View entering={SlideInDown.springify().damping(15)} exiting={SlideOutDown} style={[{ height:shetheight,position:"absolute",bottom:-shetoverdrag*1.3,  backgroundColor:"white", width:"100%",},translatey]}>
                
                    <View style={{alignContent:"center", alignItems:"center", padding:8,  backgroundColor:"white", borderWidth:0.2, borderColor:"gray"}}>
                        <MaterialCommunityIcons name="drag-horizontal" size={26}/>
                    </View>
                    <OptionMenu icon={<MaterialIcons name="menu-book" size={24} color="black" />} title="Devocional" onpress={()=>console.log("devocional")}/>
                    <OptionMenu icon={<MaterialIcons name="menu-book" size={24} color="black" />} title="Momento" onpress={()=>console.log("devocional")}/>
                    <OptionMenu icon={<MaterialIcons name="menu-book" size={24} color="black" />} title="Cancelar" onpress={()=>console.log("devocional")}/>
            </Animated.View>
        </GestureDetector>

             </>
    )
}

