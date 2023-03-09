import apiUrl from '../apiConfig'
import axios from 'axios'

export const orderHistory = () => {
    return axios(`${apiUrl}/order`)
}

export const showOrder = (id) => {
    return axios(`${apiUrl}/order/${id}`)
}

export const updateOrder = (user, updatedOrder) => {
    return axios({
        url: `${apiUrl}/order/${updatedOrder._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { order: updatedOrder }
    })
}