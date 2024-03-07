import AsyncStorage from "@react-native-async-storage/async-storage";
import { BOOKS_STORAGE } from "./storageConfig";

type BookBlibleType={
    abbrev: {pt:string,en:string},
    author:string
    chapters:number
    group:string
    name:string
    testament:string
}[]
export async function storageBooksSave(books:BookBlibleType) {
    await AsyncStorage.setItem(BOOKS_STORAGE,JSON.stringify(books))
}
export async function storageBooksGet() { 
    const storage = await AsyncStorage.getItem(BOOKS_STORAGE)
    const books:BookBlibleType = storage?JSON.parse(storage):[{}]
    return books;
}
export async function storageBooksRemove() {
    await AsyncStorage.removeItem(BOOKS_STORAGE)
}