import { Form, Button, Container } from 'react-bootstrap'

const OrderForm = () => {
    return (
        <div>
            <Container className="form-container">
                <Form onSubmit={}>
                    <Form.Group className="m-2">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control 
                            placeholder="What is the name of the court?"
                            name="name"
                            id="name"
                            value={ court.name }
                            onChange={handleChange}
                            required
                            />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default OrderForm