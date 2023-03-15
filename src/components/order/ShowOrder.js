import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getOneOrder } from '../../api/order'
import { useParams, useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'


const ShowOrder = (props) => {
    const [order, setOrder] = useState(null)
    const { user, msgAlert } = props
    const { id } = useParams()
    
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

    if(!order){
        return ( <h1>Order Details</h1> )
    } else {
    return (
        <>

        <h1>Order Details</h1>
        <Container className="">
                <Row>
                <Col>
                <Card style={{ height: '100%'}}>
                <Card.Header style={{ backgroundColor: '#FC9047'}}><h5>{ order.name }</h5></Card.Header>

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
                    </Card>
                </Col>
                </Row>
        </Container>
        </>
    )
}
}
export default ShowOrder