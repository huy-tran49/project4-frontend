import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllOrder = (user) => {
    return axios({
        url: `${apiUrl}/order`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}

export const getOneOrder = (user, id) => {
    return axios({
        url: `${apiUrl}/order/${id}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
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

