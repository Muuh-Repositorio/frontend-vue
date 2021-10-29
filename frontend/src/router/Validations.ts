import { baseApiUrl, userKey } from "@/global";
import store from "@/store";
import axios from "axios";

const userStorage: any = localStorage.getItem(userKey)
const userData = JSON.parse(userStorage)

export async function validToken(): Promise<boolean> {
    store.dispatch("setUser", null)

    const url = `${ baseApiUrl }/auth/validateToken`
    const response = await axios.post(url, userData)

    if (response.data) {
        store.dispatch("setUser", userData)
        return true
    } else {
        localStorage.removeItem(userKey)
        return false
    }
}