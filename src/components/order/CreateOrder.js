import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateOrder = (props) => {
    const currentDate = new Date()
    console.log(currentDate)
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
            
            console.log('the court', updatedOrder)

            return {
                ...prevOrder, ...updatedOrder
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (court.latitude && court.longitude) {
        createCourt(user, court)
            // first we'll nav to the show page
            .then(res => { navigate(`/courts/${res.data.court._id}`)})
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
        } else {
            msgAlert({
                heading: 'Uh oh!',
                message: "Please choose a valid address",
                variant: 'danger'
            })
        }   
    }

    return(
        <>
            {/* <OrderForm
                handleChange={onChange}
                handleSubmit={onSubmit}
                heading="Add a new order!"
            /> */}
        </>
    )
}

export default CreateOrder