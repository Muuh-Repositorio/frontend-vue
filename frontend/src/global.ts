export const userKey = '___muuh_user'
export const farmKey = '___muuh_farm'
export const baseApiUrl = 'http://localhost:3000/api'

import { error } from './config/toasted'

export function showError(e: any) {
    if(e && e.response && e.response.data) {
        const status: any = String(e.response.data.statusCode);
        const message: any = e.response.data.message
        
        if (typeof message === 'object') {
            error(message[0], status);

        } else {
            error(message, status[0]);
        }
    } else {
        error('Erro de conexão com o servidor!', '500')
    } 
}