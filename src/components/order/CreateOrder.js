import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createOrderSuccess, createOrderFailure } from "../shared/AutoDismissAlert/messages"
import './CreateOrder.css'
import { createOrder } from "../../api/order"
// import TShirt from "../apparel/TShirt"
import { Container, Form, Button} from "react-bootstrap"
import html2canvas from "html2canvas"

import UploadWidget from "../shared/UploadWidget"
import { CloudinaryUploadImage, FetchURL } from "../../api/cloudinary"

const CreateOrder = (props) => {
    const {user, msgAlert} = props
    const currentDate = new Date()
    const navigate = useNavigate()

    const [order, setOrder] = useState({
        name:'',
        date: currentDate,
        designFront:'',
        designBack:'',
        pictures:[]
    })

    const onChange = (e) => {
        e.persist()
        
        setOrder(prevOrder => {
            
            const updatedName = e.target.name
            let updatedValue = e.target.value

            console.log('this is the input type', e.target.type)

            // to handle a number, we look at the type, and parse a string to an integer
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
      
            const updatedOrder = {
                [updatedName] : updatedValue
            }
            
            console.log('the order', updatedOrder)

            return {
                ...prevOrder, ...updatedOrder
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createOrder(user, order)
            // first we'll nav to the show page
            .then(res => { navigate(`/order`)})
            // we'll also send a success message
            .then(() => {
                msgAlert({
                    heading: 'Yahoo!',
                    message: createOrderSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Ruh Roh!',
                    message: createOrderFailure,
                    variant: 'danger'
                })
            })
    }

    const imageCapture = async () => {
        const input = document.getElementById("divForCapture")
        let image
        await html2canvas(input)
            .then(canvas => {
            image = canvas.toDataURL('image/png')
        })
        //upload image to cloudinary after screen capture
        await CloudinaryUploadImage(image)
        
    }

        
    return(
        <>
            <Container className= "form-container">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="m-2">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control 
                            placeholder="Enter a name for the order"
                            name="name"
                            id="name"
                            value={ order.name }
                            onChange={onChange}
                            required
                            />
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control 
                            placeholder="Enter a quantity for the order"
                            name="quantity"
                            id="quantity"
                            value={ order.quantity }
                            onChange={onChange}
                            required
                            />
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Label>Front Design:</Form.Label>
                        <Form.Control 
                            // placeholder="Enter a quantity for the order"
                            name="designFront"
                            id="designFront"
                            value={ order.designFront }
                            // onChange={handleChange}
                            />
                    </Form.Group>
                   
                    <Button className="m-2" type="submit">Submit</Button>
                </Form>
            </Container>
            <Container className="image-form-container">
                <UploadWidget user={user} msgAlert={msgAlert}/>
                
                <Button className="m-2" onClick={imageCapture}>Save Design</Button>
            </Container>
          
        </>
    )
}

export default CreateOrder