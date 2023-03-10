import { useNavigate } from "react-router-dom"
import CreateOrder from "./CreateOrder"

const OrderIndex = (props) => {
    const {user, msgAlert} = props

    return (
        <>
            <h1>Show Order</h1>
            <CreateOrder msgAlert={msgAlert} user={user} />
        </>
    )
}

export default OrderIndex