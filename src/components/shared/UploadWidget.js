import { useEffect,useRef, useState } from "react"
import { Button } from "react-bootstrap"
import messages from "./AutoDismissAlert/messages"


const UploadWidget = (props) => {
    const {user, msgAlert} = props
    const [pictureURL, setPictureURL] = useState(null)
    const [state, setState] = useState(false)
    const [uploadPicture, setUploadPicture] = useState(null)

    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
        }, (error, result) => {
            console.log('this is result', result)
            
            if (result.event === 'success') {
                setPictureURL(result.info.secure_url)
                console.log('this is pictureURL in if loop',pictureURL)
                setState(true)
            } 
        })
        
    })
  

    return (
        <>
        <Button className="m-2" onClick={()=> {widgetRef.current.open()}}>
            Upload Picture
        </Button>
        
       </>
    )
}

export default UploadWidget