import apiUrl from '../apiConfig'
import axios from 'axios'

export const orderHistory = () => {
    return axios(`${apiUrl}/order`)
}

export const showOrder = (id) => {
    return axios(`${apiUrl}/order/${id}`)
}