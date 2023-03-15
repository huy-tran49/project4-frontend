import apiUrl from '../apiConfig'
import axios from 'axios'


export const CloudinaryUploadImage = (base64EncodedImage) => {
    return axios ({
        url: `${apiUrl}/api/upload`, 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { data: base64EncodedImage }
    })
}

export const FetchURL = async () => {
    return axios.get(`${apiUrl}/api/upload`)
        .then((res)=> res.data)
}