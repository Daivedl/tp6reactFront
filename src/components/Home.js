import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
class Home extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container fluid="md">
                    <h1>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia.</h1>
                    <Carousel className="margen carro w-50">
                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/nro5.jpg`).default}
                                alt="First slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/nro4.jpg`).default}
                                alt="Second slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/nro6.jpg`).default}
                                alt="Third slide"
                            />

                          
                        </Carousel.Item>
                    </Carousel>
                    <h3>Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</h3>
                </Container>
            </React.Fragment>
        )
    }
}

export default Home;