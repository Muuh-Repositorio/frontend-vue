import { baseApiUrl, farmKey, userKey } from "@/global";
import store from "@/store";
import axios from "axios";

export const validations: any = {
    requiresLogin: async () => {
        const isValid = await validToken()
        return isValid ? undefined : { path: '/login' }
    },
    requiresFarm: () => {
        const farmSelected = farmValidation()
        return farmSelected ? undefined : { path: '/farms' }
    }
}

async function validToken(): Promise<boolean> {
    const userStorage: any = localStorage.getItem(userKey)
    const userData = JSON.parse(userStorage)

    store.dispatch("setUser", null)

    const url = `${ baseApiUrl }/auth/validateToken`
    const response = await axios.post(url, userData)

    if (response.data) {
        store.dispatch("setUser", userData)
        return true
    } else {
        localStorage.clear()
        return false
    }
}

function farmValidation(): boolean {
    const idt_farm = localStorage.getItem(farmKey)
    if (idt_farm) {
        store.dispatch('setFarm', idt_farm)
        return true
    } else {
        return false
    }
}