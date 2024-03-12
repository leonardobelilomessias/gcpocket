import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_STORAGE } from "./storageConfig";


async function saveTokenStorage(token:string){
    const tokensaved = await AsyncStorage.setItem(TOKEN_STORAGE, token)
    return tokensaved
} 

async function deleteTokenStorage() {
    await AsyncStorage.removeItem(TOKEN_STORAGE)
    return
}

async function getTokenStorage() {
    const token = await AsyncStorage.getItem(TOKEN_STORAGE)

    return token as string
}

export{ deleteTokenStorage,saveTokenStorage,getTokenStorage }
