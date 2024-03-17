import firestore from "@react-native-firebase/firestore"
import axios from "axios"

type chapterType={
    book: {
      abbrev:{pt:string,en:string},
      name:string
      author:string
      group:string
      version:string
    },
    chapter: {
      number:1,
      verses:number
    },
    verses: [
      {number: number,text:string},
    ]
  }
  type verseType = {
    book: {
    abbrev: {
    pt:string,
    en: string
    },
    name: string,
    author: string,
    group: string,
    version: string
    },
    chapter: number,
    number: number,
    text: string
    }
    type books = {
        abbrev: {pt:string,en:string},
        author:string
        chapters:number,
        group:string,
        name:string,
        testament:string
      }
      const tokenbible = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJTYXQgTWFyIDE2IDIwMjQgMTE6MjU6NTUgR01UKzAwMDAubGVvbmFyZG9iZWxpbG9Ab3V0bG9vay5jb20iLCJpYXQiOjE3MTA1ODgzNTV9.Op3xTAIfcB9mhk3art4b1-cSsCqrjA8ZLeWOWjErenE"
      const config = {
        headers: {
          Authorization: `Bearer ${tokenbible}`
        }
      };
      
export async function testecriarEstruturaAninhada() {
    try{
  
      const livrosRef = firestore().collection('bible_books3');
      
      // Obtenha todos os livros
      const livrosSnapshot = await livrosRef.get();
      livrosSnapshot.forEach(async(livroDoc)=>{
        const livroId = livroDoc.id;
        const bookinfo = livroDoc.data() as books
        console.log("Criando => ",bookinfo.name)
        const capitulosRef = livrosRef.doc(livroId).collection('chapters');
        for (let i = 1; i <= bookinfo.chapters; i++) {
          const chapters:chapterType =  (await axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/${bookinfo.abbrev.pt}/${i}`,config)).data
          const capituloDocRef = capitulosRef.doc(String(i));
          console.log(chapters)
          // Crie documento para o capítulo
          await capituloDocRef.set(chapters);
          
          const versiculosRef = capituloDocRef.collection('verses');
          
          // Crie subcoleção de versículos para o capítulo
          for (let j = 1; j <= chapters.chapter.verses; j++) {
            // Crie documento para o versículo
            const verses:verseType =  (await axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/${chapters.book.abbrev.pt}/${i}/${j}`,config)).data
            await versiculosRef.doc(String(j)).set(verses);
          }
        }
        console.log("Finalizado")
      })
    }catch(error){
  console.log(error)
    }
      
    }

   export async function createBooksFirestorage(){
        const colecaoRef = firestore().collection('bible_books2');
        try{
          const books:books[]= await (await axios.get("https://www.abibliadigital.com.br/api/books",config)).data
          books.forEach( async(book,key)=>{
           console.log("iniciado",book.name)
             
            const timestamp = firestore.Timestamp.now()
            await colecaoRef.doc(book.name).set({...book, timestamp:timestamp,id:key});
            
           console.log("finalizado",book.name)
          })
        }catch(err){
          console.log(err)
        }
    
     }
    export  async function createUserApiBible(){
        const user = {
          name: "leonardobelilo",
          email: "leonardobelilo@outlook.com",
          password: "leo175033", // minimum size 6 digits
          notifications: false // receive update emails from www.abibliadigital.com.br
        }
      
        const resultuser = await axios.post("https://www.abibliadigital.com.br/api/users",user)
        console.log(resultuser.data)
       }