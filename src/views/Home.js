// import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import background from "../resources/wireframe first draft/Backdrop/grass and sky.png";

export default function Home() {
    const backdrop = {
        height: '100vh',
        // marginTop: '-70px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("${background}")`,
    }
    const sky = {
        height: '60vh',
    }
    return (
        // <Container >
        <div id="home-background" style={backdrop}>
            <Row className="justify-content-md-center" style={sky}>
                
            </Row>
            <Row>
                <h1>test</h1>
            </Row>
        </div>
        // </Container>
    );
}