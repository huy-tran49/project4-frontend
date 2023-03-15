import { useEffect,useRef, useState } from "react"
import { Button } from "react-bootstrap"
import messages from "./AutoDismissAlert/messages"
import { addImage } from "../../api/image"
import TShirt from "../apparel/TShirt"

const UploadWidget = (props) => {
    const {user, msgAlert} = props
    const [pictureURL, setPictureURL] = useState(null)
    const [state, setState] = useState(false)
    const [pictureHeight, setPictureHeight] = useState(null)
    const [pictureWidth, setPictureWidth] = useState(null)

    const [design, setDesign] = useState({
        url:'',
        height:'',
        width:'',  
    })

    
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
                setPictureHeight(result.info.height)
                setPictureWidth(result.info.width)
                console.log('this is pictureURL in if loop',pictureURL)
                setState(true)
            } 
        })
        
    })
    
    useEffect(()=> {
        if (state === true) { 
            design.url = pictureURL
            design.height = pictureHeight
            design.width = pictureWidth
            console.log(design)
            setState(false)
            addImage(user, design)
                .catch(() => {
                    msgAlert({
                        heading: 'Oh No!',
                        message: messages.addImageFailure,
                        variant: 'danger'
                    })
            })
            
        }
        
    })

    return (
        <>
        <TShirt design={design} />
        <Button className="m-2" onClick={()=> {widgetRef.current.open()}}>
            Upload Picture
        </Button>
        
       </>
    )
}

export default UploadWidget