import { storageBooksGet, storageBooksSave } from "@/storage/storageBooks";
import axios from "axios";
import { ReactElement, createContext, useContext, useEffect, useState } from "react";

type BookBlibleType={
    abbrev: {pt:string,en:string},
    author:string
    chapters:number
    group:string
    name:string
    testament:string
}[]
const ContextBible = createContext({} as ContextProps)
const example=[  {
    abbrev: {pt:"gn",en:"gn"},
    author:"Moisés",
    chapters:50,
    group:"Pentateuco",
    name:"Gênesis",
    testament:"VT"
  },
  {
    abbrev: {pt:"ex",en:"ex"},
    author:"Moisés",
    chapters:40,
    group:"Pentateuco",
    name:"Êxodo",
    testament:"VT"
  },]

type ContextProps ={
    setBooksBible:(array:BookBlibleType)=> void
    booksBible:BookBlibleType
}
export function ProvideBibleContext({children:children}:{children?:ReactElement}){
    const [booksBible,setBooksBible] = useState(example as BookBlibleType)
    async function getBooks(){
        try{

            const books = await storageBooksGet()
            if (books){
                //const result = await  axios.get("https://www.abibliadigital.com.br/api/books")
               setBooksBible(books)

            }
            if(!!books){
               const  result = await  axios.get("https://www.abibliadigital.com.br/api/books")
               storageBooksSave(result.data)
               
            }

        }
        catch{
            console.log("error books")
        }
    }
   useEffect(()=>{
    getBooks()
   },[])
    return(
        <ContextBible.Provider value={{ booksBible,setBooksBible}}>
            {children}
        </ContextBible.Provider>
    )

}

export function BibleContex({children:children}:{children?:ReactElement}){
    return(
        <ProvideBibleContext>
        {children}
        </ProvideBibleContext>
        )
}

export const useDataBible=()=>useContext(ContextBible)