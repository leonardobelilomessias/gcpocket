import { deleteTokenStorage, getTokenStorage, saveTokenStorage } from "@/storage/storageToken";
import { getUserStorage, saveUserStorage } from "@/storage/storageUser";
import { FIREBASE_AUTH, FIRESTORAGE_DB } from "@/utils/firebaseConfig";
import { handleAuthError } from "@/utils/handleAuthError";
import firestore from "@react-native-firebase/firestore";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,AuthError,AuthErrorCodes, Auth, sendEmailVerification, UserCredential,} from "firebase/auth";
import { Firestore, addDoc, collection, getDoc, getDocs, where , } from "firebase/firestore";
import { ReactElement, createContext, useContext, useEffect, useState } from "react";
GoogleSignin.configure(
    {
      webClientId:"659075767234-mpj2et7qddcqb91sf129ge8k5lo4i75t.apps.googleusercontent.com"
    }
  )
export type UserAuthProps = {
    id:string,
    email:string
    user_name:string
    image_profile:string|null|undefined
    name:string|null
    emailVerified:boolean
}
type  authProps ={
    singin:(data:any)=>void
    singup:(data:any)=>void
    user:UserAuthProps
    socialSingin:()=> Promise<null>
    singout:()=>void
    token:string
    dataUser:UserAuthProps
    loadLogin:boolean
    setLoadLogin:(data :boolean)=>void
    setToken:(data:string)=>void
    isOpenMenu:boolean
    setToogleMenu:()=>void
}
const AuthContext = createContext({} as authProps)

function AuthProvide({children}:{children:ReactElement}){
    const [token,setToken] = useState("")
    const [user,setUser] = useState({} as UserAuthProps)
    const [dataUser,setDatauser] = useState({} as UserAuthProps) 
    const [loadLogin, setLoadLogin] = useState(false)
    const[isOpenMenu,setIsOpenMenu] = useState(false)
    function setToogleMenu(){

        console.log("abre",isOpenMenu)
        setIsOpenMenu(!isOpenMenu)
    }
    
    const auth = FIREBASE_AUTH
    async function singin({email,password}:{email:string, password:string}){
        setLoadLogin(true)
        try{
            const {user} = await signInWithEmailAndPassword(auth,email, password)
            if(user.email){
                await saveUserStorage({name:user?.displayName,email:user.email,id:user.uid,image_profile:user.photoURL,user_name:"",emailVerified:user.emailVerified})
                await createUserFirestore({name:user?.displayName,email:user.email,id:user.uid,image_profile:user.photoURL,user_name:"",emailVerified:user.emailVerified})
                await saveTokenStorage(user.refreshToken)
                const tokensaved = await getTokenStorage()
                const usersaved = await getUserStorage()
                setToken(tokensaved)
               setUser(usersaved)
            } 
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
    async function singout(){
        try{
            setLoadLogin(true)
            setUser({} as UserAuthProps)
            setToken("")
            await deleteTokenStorage()
            router.push("/sing-in")
        }catch(error){ 
            console.log(error)
        }finally{
            setLoadLogin(false)
        }
    }
async function  socialSingin(){
   try {
     await GoogleSignin.hasPlayServices();
     const {user,idToken} = await GoogleSignin.signIn();

     setUser({name:user.name,email:user.email,id:user.id,image_profile:user.photo,user_name:"",emailVerified:true})
     if(!!idToken){
        createUserFirestore({name:user?.name,email:user.email,id:user.id,image_profile:user.photo,user_name:"",emailVerified:true})
        await saveUserStorage({name:user.name,email:user.email,id:user.id,image_profile:user.photo,user_name:"",emailVerified:true})
       setToken(idToken) 
       await saveTokenStorage(idToken)
     }

   } catch (error:any) {
     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
       // user cancelled the login flow 
       console.log(error)
     } else if (error.code === statusCodes.IN_PROGRESS) {
       // operation (e.g. sign in) is in progress already
       console.log(error)
     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
       // play services not available or outdated
       console.log(error)
     } else {
       // some other error happened
       console.log(error)
     }
   }finally{
   }
   return null
 
    }
    async function singup({email,password}:{email:string, password:string}){
        setLoadLogin(true)
        try{
            const {user} = await createUserWithEmailAndPassword(auth,email, password)
            sendEmailVerification(user)
            if(user.email){
                await createUserFirestore({name:user?.displayName,email:user.email,id:user.uid,image_profile:user.photoURL,user_name:"",emailVerified:user.emailVerified})
                await saveUserStorage({name:user?.displayName,email:user.email,id:user.uid,image_profile:user.photoURL,user_name:"",emailVerified:user.emailVerified})
                await saveTokenStorage(user.refreshToken)
                const tokensaved = await getTokenStorage()
                const usersaved = await getUserStorage()
                setToken(tokensaved)
                setUser(usersaved)
            }
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
        <AuthContext.Provider value={{singin, singout,singup,socialSingin,setLoadLogin,setToken,setToogleMenu,isOpenMenu,dataUser, user, token,loadLogin}}>
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

async function createUserFirestore(user:UserAuthProps){
    const usersCollection = await firestore().collection('users').where('email', '==', user?.email).get();
    try{

        if (usersCollection.empty){
            const usersref = firestore().collection('users');
            await usersref.doc(user.id).set(user);
        }
    }catch(err){
        console.log("houve um erro = ",err)
    }
  }
