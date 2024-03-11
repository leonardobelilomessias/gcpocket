import { ReactElement, createContext, useContext, useState } from "react";

type dataUserAuthProps = {
    id:string,
    user_name:string
    name:string
    token:string
}

type  authProps ={
    singin:({email,password}:{email:string, password:string})=>void
    socialSingin:()=> void
    singout:()=>void
    dataUser:dataUserAuthProps
}
const AuthContext = createContext({} as authProps)

function AuthProvide({children}:{children:ReactElement}){
    const [dataUser,setDatauser] = useState({} as dataUserAuthProps) 

    function singin({email,password}:{email:string, password:string}){
        console.log('singin', email, password)
    }
    function singout(){

    }
    function socialSingin(){
        console.log('singin social')
    }
    return(
        <AuthContext.Provider value={{singin, singout,socialSingin,dataUser}}>
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