import { useEffect, useState } from "react"
import { Button, Card, Container } from "react-bootstrap"
import { useNavigate, Link } from "react-router-dom"
import { getAllOrder } from "../../api/order"
import { getOrdersFailure } from "../shared/AutoDismissAlert/messages"
import messages from '../shared/AutoDismissAlert/messages'
import "./ShowAllOrder.css"

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

const OrderIndex = (props) => {
    const {user, msgAlert} = props
    const [orders, setOrders] = useState(null)
    const [error, setError] = useState(false)

    useEffect(()=>{
        getAllOrder(user)
            .then(res => setOrders(res.data.orders))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting courts',
                    message: messages.getOrdersFailure,
                    variant: 'danger'
                })
                setError(true)
            })
    },[])

    let orderCard

    if (!orders) {
        return ( 
            <h3>No order found.</h3>
        )
    } else {
        const ShowAllOrders = () => {
            orderCard = orders.map(order => {
                return (
                    <>  
                       
                        <Card key={ order._id } style={{ width: '80%', margin: 0 }}>
                            <Card.Header ><h5>{ order.name }</h5></Card.Header>
                            <Card.Body>
                            <Card.Text >
                                Order Date: {order.date}
                            </Card.Text>
                            <Card.Text>
                                Quantity: {order.quantity}
                            </Card.Text>
                            <Card.Text>
                                <Link to={`/order/${order._id}`}>View {order.name}</Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </>
                )
            })
        }
        ShowAllOrders()
    }
    
    return (
        <>
        <Container className="main-container">
            <h1>Show Orders</h1>

            <Button className="m-3" variant="success">
                <Link to="/order/create" style={linkStyle}>Customize T-Shirt</Link>
            </Button>
            <Button variant="success">
                <Link to="/order/create" style={linkStyle}>Customize Jersey</Link>
            </Button>
            {orderCard}
        </Container>
        </>
    )
}

export default OrderIndex