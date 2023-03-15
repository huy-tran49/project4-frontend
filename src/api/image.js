import apiUrl from '../apiConfig'
import axios from 'axios'

export const addImage = (user, newImage) => {
    return axios({
        url: `${apiUrl}/image`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { image: newImage }
    })
}