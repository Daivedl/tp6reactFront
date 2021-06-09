import React, { Component } from 'react';
import NavBar from './NavBar';
import Instrumento from './Instrumento';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Productos extends Component {
    _isMounted = false;
    constructor (){
        super();
        this.state = ({
            db:[]
        });
    }
    
    getInstrumentos(){
        axios.get(`http://localhost:3001/api/instrumento`)
        .then(res => {
            console.log(res);
            this.setState({ db: res.data });
            //console.log(res.data[0].imagen);
        });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getInstrumentos();
    }
    render(){
        const instrumentosObtenidos = this.state.db.map (( instrumento, index ) => {
            return (
                <Instrumento key={instrumento.id}
                id={instrumento.id}
                instrumento={instrumento.instrumento}
                imagen={instrumento.imagen} 
                precio={instrumento.precio}
                costoEnvio={instrumento.costoEnvio}
                cantidadVendida={instrumento.cantidadVendida}
                >
                </Instrumento>
            );
        });
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container fluid="md">
                    <Row>
                        {instrumentosObtenidos}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Productos;