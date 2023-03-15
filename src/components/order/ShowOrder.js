import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getOneOrder } from '../../api/order'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { deleteOrder } from '../../api/order'

const ShowOrder = (props) => {
    const [order, setOrder] = useState(null)
    const { user, msgAlert } = props
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneOrder(user, id)
            .then(res => {
                setOrder(res.data.order)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting courts',
                    message: messages.getOrdersFailure,
                    variant: 'danger'
                })
            })
    },[])


    const destroyOrder = () => {
        deleteOrder(user, id)
            .then(res => { navigate(`/order`)})
            .then(() => {
                msgAlert({
                    heading: 'Order Deleted',
                    message: 'Bye Bye!',
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
        
    }

    if(!order){
        return ( <h1>Order Details</h1> )
    } else {
    return (
        <>

        <h1>Order Details</h1>
        <Container className="">
                
                <Card style={{ height: '100%'}}>
                <Card.Header><h5>{ order.name }</h5></Card.Header>

                    <Card.Body>
                            <Row> 
                                <Card.Text>
                                    <div>
                                        <small>
                                            Name: { order.name }
                                        </small>
                                    </div>
                                    <div>
                                        <small>
                                            Order Date: { order.date }
                                        </small>
                                    </div>
                                    <div>
                                        <small>
                                            Quantity: { order.quantity }
                                        </small>
                                    </div>
                                    <div>
                                        <small>
                                            Front Design: { order.designFront }
                                        </small>
                                    </div>
                                    <div>
                                        <small>
                                            Design: { order.pictures }
                                        </small>
                                    </div>
                                    
                                </Card.Text>
                            </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Button 
                            onClick={() => destroyOrder()} 
                            variant="danger"
                            className="m-2"
                        >
                            Delete Order
                        </Button>
                    </Card.Footer>
                    </Card>
                
        </Container>
        </>
    )
}
}
export default ShowOrder