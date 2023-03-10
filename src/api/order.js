import apiUrl from '../apiConfig'
import axios from 'axios'

export const showAllOrder = () => {
    return axios(`${apiUrl}/order`)
}

export const showOneOrder = (id) => {
    return axios(`${apiUrl}/order/${id}`)
}

export const createOrder = (user, newOrder) => {
    return axios({
        url: `${apiUrl}/order`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { order: newOrder }
    })
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

