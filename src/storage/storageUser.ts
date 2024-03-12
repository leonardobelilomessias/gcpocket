import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storageConfig";
import { User } from "firebase/auth";

async function saveUserStorage(user:User){
    const userSaved = await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
    return userSaved
} 

async function deleteUserStorage() {
    await AsyncStorage.removeItem(USER_STORAGE)
    return
}

async function getUserStorage() {
    const storage = await AsyncStorage.getItem(USER_STORAGE)
    const usersaved = storage?JSON.parse(storage):[{}]
    return usersaved;
}

export{ deleteUserStorage,saveUserStorage,getUserStorage }
