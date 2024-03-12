import { getTokenStorage, saveTokenStorage } from "@/storage/storageToken";
import { getUserStorage, saveUserStorage } from "@/storage/storageUser";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import { handleAuthError } from "@/utils/handleAuthError";
import { router } from "expo-router";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,AuthError,AuthErrorCodes, Auth, sendEmailVerification, UserCredential,} from "firebase/auth";
import { ReactElement, createContext, useContext, useEffect, useState } from "react";

type dataUserAuthProps = {
    id:string,
    user_name:string
    name:string
    token:string
   
}
type  authProps ={
    singin:(data:any)=>void
    singup:(data:any)=>void
    user:User |null
    socialSingin:()=> void
    singout:()=>void
    token:string
    dataUser:dataUserAuthProps
    loadLogin:boolean
    setLoadLogin:(data :boolean)=>void
}
const AuthContext = createContext({} as authProps)

function AuthProvide({children}:{children:ReactElement}){
    const [token,setToken] = useState("")
    const [user,setUser] = useState<User| null>(null)
    const [dataUser,setDatauser] = useState({} as dataUserAuthProps) 
    const [loadLogin, setLoadLogin] = useState(false)
    const auth = FIREBASE_AUTH
    const as=auth.currentUser
    async function singin({email,password}:{email:string, password:string}){
        setLoadLogin(true)
        try{
            
            const response = await signInWithEmailAndPassword(auth,email, password)
             await saveUserStorage(response.user)
             await saveTokenStorage(response.user.refreshToken)
             const tokensaved = await getTokenStorage()
             const usersaved = await getUserStorage()
             setToken(tokensaved)
            setUser(usersaved)
        }catch(err: any){
            if(typeof AuthErrorCodes){
                handleAuthError(err)
            }
            else{
                alert("Houve um erro indesejado. Tente novamente mais tarde ou entre em contato com a equipe de suporte\n"+err)
            }
            
        }
        finally{
            setLoadLogin(false)
        }

    }
    function singout(){
        setUser(null)
        setToken("")
        router.push("/sing-in")
    }
    function socialSingin(){
    }
    async function singup({email,password}:{email:string, password:string}){
        setLoadLogin(true)
        try{
            const response = await createUserWithEmailAndPassword(auth,email, password)
            sendEmailVerification(response.user)
            await saveUserStorage(response.user)
            await saveTokenStorage(response.user.refreshToken)
            const tokensaved = await getTokenStorage()
            const usersaved = await getUserStorage()
            setToken(tokensaved)
            setUser(usersaved)
        }catch(err:any){
            if(typeof AuthErrorCodes){
                handleAuthError(err)
            }else{
                alert("Houve um erro indesejado. Tente novamente mais tarde ou entre em contato com a equipe de  suporte\n"+err)
            }
        }finally{
            setLoadLogin(false)
        }
    }
        onAuthStateChanged(auth,()=>{
            
            console.log("user", user?.uid, user?.email, user?.emailVerified)

            
        })
   

    async function fetchuserStorage(){
        setLoadLogin(true)
        try{
            const user = await getUserStorage()
            const token = await getTokenStorage()
            setToken(token)
            setUser(user)
        }catch(err){
            console.log("houve um erro inesperado",err)
        }finally{
            setLoadLogin(false)
        }
    }
    useEffect(()=>{
        fetchuserStorage()
    },[])
    return(
        <AuthContext.Provider value={{singin, singout,singup,socialSingin,setLoadLogin,dataUser, user, token,loadLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export function AuthDataProvider({children}:{children:ReactElement}){
    return(
        <AuthProvide>
            {children}
        </AuthProvide>
    )
}
export const useDataUser= ()=> useContext(AuthContext)