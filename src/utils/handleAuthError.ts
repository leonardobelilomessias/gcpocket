import {AuthError, AuthErrorCodes} from "firebase/auth"
import { Alert } from "react-native";

type ErroAuth = typeof AuthErrorCodes
function handleAuthError(err:AuthError){
    switch (err.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
            alert("Usuário ou senha inválido. Tente novamente ! \n" )
            break;
        case "auth/wrong-password":
            alert("Usuário ou senha inválido. Tente novamente 2! ")
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            alert("Usuário ou senha inválido. Tente novamente 3! ")
            break;
        case "auth/user-not-found":
            alert("Usuário ou senha inválido. Tente novamente 4!\n"+err.code,)
            break;
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            alert("O Acesso a sua conta foi temporariamente desabilitado, pois houve muitas tentativas de login fracassadas. Você pode imediatamente restaurar sua conta resetando sua senha, ou tentatar novamente mais tarde!\nCodigo de Erro:"+err.code)
            break;
        
        default:
            alert("Houve um erro indesejado. Tente novamente mais tarde ou entre em contato com a equipe de suporte\n"+err.code,)
            break;
    }
}

export{handleAuthError}