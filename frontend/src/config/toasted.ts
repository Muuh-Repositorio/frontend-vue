import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export const success = () => {
    createToast(
        {
            title: 'Sucesso!',
            description: 'Operação efetuada com sucesso'
        },
        {
            showIcon: true,
            type: 'success',
            transition: 'slide'
        }
    )
}

export const error = (message: any, status: any) => {
    const type = status[0] === '4' ? 'warning' : 'danger';
    const title = status[0] === '4' ? 'Atenção!' : 'Error!'

    createToast(
        {
            title: title,
            description: message
        },
        {
            showIcon: true,
            type: type,
            transition: 'slide'
        }
    )
}