import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router"

function Error() {
    return (
        <section>
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className="text-center">
                            <h1 style={{ fontSize: '6rem', color: '#0d6efd' }}>404</h1>
                            <h2 className="mb-3" style={{ color: '#343a40' }}>Page Not Found</h2>
                            <p className="mb-4" style={{ color: '#6c757d' }}>
                                Sorry, the page you're looking for doesn't exist or has been moved.
                            </p>
                            <Button as={Link} to="/" variant="primary">Go Home</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Error
