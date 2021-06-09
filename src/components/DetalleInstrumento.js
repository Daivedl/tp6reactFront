import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class DetalleInstrumento extends Component {

    constructor() {
        super();
        this.state = ({ 
            instrumento:[],
        });
    }
    componentDidMount(){
        this._isMounted = true;
        this.getInstrumento();
    }
    async getInstrumento(){
        const parametroId = this.props.match.params.id;
        fetch('http://localhost:3001/api/instrumento/'+parametroId)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({instrumento: responseJson});
        })  
    }
    

    render() {

        const instrumentoEncontrado = this.state.instrumento;
        if(Object.keys(instrumentoEncontrado).length === 0){
            return ("");
        }
        console.log(instrumentoEncontrado);

        console.log(this.props.params);
        const nav = instrumentoEncontrado.costoEnvio;
        console.log(nav);
        let texto;
        if (nav === "G") {
            texto = <p style={{ color: 'green' }}>Envío gratis</p>
        } else {
            texto = <p style={{ color: 'orange' }}>Costo de Envío Interior de Argentina: ${nav}</p>
        }
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <img className="minAltoImg" src={require(`../assets/images/${instrumentoEncontrado.imagen}`).default} alt="d" />
                                </Col>
                            </Row>
                            <Col>
                                <p></p>
                                <p>Descripción:</p>

                                <p>{instrumentoEncontrado.descripcion}</p>
                            </Col>
                        </Col>
                        <Col>
                            <Row>
                                <Col><h5>{instrumentoEncontrado.cantidadVendida} Vendidos</h5></Col>
                            </Row>
                            <Row>
                                <Col><h1>{instrumentoEncontrado.instrumento}</h1></Col>
                            </Row>
                            <Row>
                                <Col><h2>${instrumentoEncontrado.precio}</h2></Col>
                            </Row>
                            <Row>
                                <Col><p>Marca: {instrumentoEncontrado.marca}</p></Col>
                            </Row>
                            <Row>
                                <Col><p>Modelo: {instrumentoEncontrado.modelo}</p></Col>
                            </Row>
                            
                            <Row>
                                <Col nav={nav}>{texto}</Col>
                            </Row>
                            <Row>
                                <Col><Button variant="outline-primary">Agregar al carrito</Button></Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row>
                        <Col><Button variant="primary" href="/products">Volver</Button></Col>
                    </Row>
                </Container>
            </React.Fragment>

        );

    }
}

export default DetalleInstrumento;