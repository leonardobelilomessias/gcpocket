import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ReactElement, createContext, useContext, useEffect, useState } from "react";

type dataUserAuthProps = {
    id:string,
    user_name:string
    name:string
    token:string
   
}

type  authProps ={
    singin:(data:any)=>void
    singup:({email,password}:{email:string, password:string})=>void
    user:User |null
    socialSingin:()=> void
    singout:()=>void
    dataUser:dataUserAuthProps
}
const AuthContext = createContext({} as authProps)

function AuthProvide({children}:{children:ReactElement}){
    const [user,setUser] = useState<User| null>(null)
    const [dataUser,setDatauser] = useState({} as dataUserAuthProps) 
    const [load, setLoad] = useState(false)
    const auth = FIREBASE_AUTH
    async function singin({email,password}:{email:string, password:string}){
        setLoad(true)
        try{
            console.log('teste handle submit', email, password)
            const response = await signInWithEmailAndPassword(auth,email, password)
            alert('Ckeck you email')
            setUser(response.user)
        }catch(err: any){
            console.log(err)
            alert("sing in failed "+ err.message)
        }
        finally{
            setLoad(false)
        }

    }
    function singout(){

    }
    function socialSingin(){
        console.log('singin social')
    }
    async function singup({email,password}:{email:string, password:string}){
        setLoad(true)
        try{
            const response = await createUserWithEmailAndPassword(auth,email, password)
            alert('Ckeck you email')
            console.log(response.user)
            setUser(response.user)
        }catch(err:any){
            console.log(err)
            alert("sing in failed "+ err.message)
        }finally{
            setLoad(false)
        }
    }
 
        onAuthStateChanged(auth,()=>{
            console.log("user", user)
            
        })
   


    return(
        <AuthContext.Provider value={{singin, singout,singup,socialSingin,dataUser, user}}>
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