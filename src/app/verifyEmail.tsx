import { ButtonForm } from "@/components/Buttons/ButtonForm";
import { useDataUser } from "@/context/AuthContext";
import { FIREBASE_ADMIN_APP } from "@/utils/adimin-firebaseConfig ";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import { router } from "expo-router";
import { auth } from "firebase-admin";

import { User, getAuth, onAuthStateChanged, sendEmailVerification, updateCurrentUser, onIdTokenChanged, updateProfile, updateEmail,  } from "firebase/auth";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function verifyEmail(){
  const currentUser = getAuth().currentUser
    const {user, singout} = useDataUser()
    useEffect(()=>{
      
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH,(user) => {
            if (user) {
                if (user.emailVerified) {
                  console.log('O e-mail do usuário foi verificado. ');
                  // Aqui você pode redirecionar o usuário para a tela principal do aplicativo ou fazer qualquer outra ação necessária.
                } else {
                  console.log('O e-mail do usuário ainda não foi verificado.');
                  // Se desejar, você pode notificar o usuário de que seu e-mail ainda não foi verificado.
                }
              }
        })
        return unsubscribe;
    }, []);
    
    function reSendEmail(user:User ){
        sendEmailVerification(user)
    }
    const app = FIREBASE_AUTH
    async function reloadApp(){
      router.push("/sing-in")
    }
  
    return(
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:24, fontWeight:"500"}}>Verificação de email</Text>

            <Text style={{fontSize:18, textAlign:"justify", width:"90%"}}>Enviamos um link de confirmação para o seu email. Verifique em sua lixeira ou caixa de span. 
            Após a confirmação clique no botão recarregar o app. Caso não tenha recebido clique no botão para reenviar um novo link de verificação.
            </Text>
            <ButtonForm bg="black" textColor="white" handleButton={()=>reSendEmail(currentUser as User)} title="Não recebi. Reenviar Email"/>
            <ButtonForm bg="white" textColor="black" handleButton={()=>reloadApp()} title="Recarregar App"/>
            <View style={{position:"absolute", bottom:20, width:"100%"}}>
            <ButtonForm handleButton={singout} title="Sair"/>
            </View>
        </View>
    )
}