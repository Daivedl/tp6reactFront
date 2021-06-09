import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Editar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instrumentos: [],
            id: this.props.match.params.id,
            instrumento: '',
            marca: '',
            modelo: '',
            imagen: '',
            imagenReal: '',
            precio: '',
            costoEnvio: '',
            cantidadVendida: '',
            descripcion: ''
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.getInstrumento();
    }

    getInstrumento() {
        const parametroId = this.props.match.params.id;
        console.log(this.state.id);
        fetch('http://localhost:3001/api/instrumento/' + parametroId)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ instrumentos: responseJson });
            })
    }

    myChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    enviarDatos = e => {

        const { instrumento,
            marca,
            modelo,
            imagen,
            imagenReal,
            precio,
            costoEnvio,
            cantidadVendida,
            descripcion } = this.state;
        console.log({
            instrumento,
            marca,
            modelo,
            imagen,
            imagenReal,
            precio,
            costoEnvio,
            cantidadVendida,
            descripcion
        });
        e.preventDefault();
        
        axios.put(
            `http://localhost:3001/api/instrumento/edit/${this.state.id}`,
            {
                instrumento,
                marca,
                modelo,
                imagen,
                imagenReal,
                precio,
                costoEnvio,
                cantidadVendida,
                descripcion
            }
        ).then((result) => {
            console.log(result);
            this.props.history.push('/crud');
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        const instrumentoEncontrado = this.state.instrumentos;
        const { instrumento,
            marca,
            modelo,
            imagen,
            imagenReal,
            precio,
            costoEnvio,
            cantidadVendida,
            descripcion } = this.state;
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Form className="col-6" onSubmit={this.enviarDatos}>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Instrumento</Form.Label>
                        <Form.Control name="instrumento" type="text" defaultValue={instrumentoEncontrado.instrumento} value={instrumento} placeholder={instrumentoEncontrado.instrumento}
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control name="marca" type="text" value={marca} placeholder={instrumentoEncontrado.marca} defaultValue={instrumentoEncontrado.marca}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control name="modelo" type="text" value={modelo} placeholder={instrumentoEncontrado.modelo} defaultValue={instrumentoEncontrado.modelo}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Imagen string</Form.Label>
                        <Form.Control name="imagen" type="text" value={imagen} placeholder={instrumentoEncontrado.imagen} defaultValue={instrumentoEncontrado.imagen}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control name="precio" type="number" value={precio} placeholder={instrumentoEncontrado.precio} defaultValue={instrumentoEncontrado.precio}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Costo de envío</Form.Label>
                        <Form.Control name="costoEnvio" type="text" value={costoEnvio} placeholder={instrumentoEncontrado.costoEnvio} defaultValue={instrumentoEncontrado.costoEnvio}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Cantidad vendida</Form.Label>
                        <Form.Control name="cantidadVendida" type="number" value={cantidadVendida} placeholder={instrumentoEncontrado.cantidadVendida} defaultValue={instrumentoEncontrado.cantidadVendida}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control name="descripcion" type="text" value={descripcion} placeholder={instrumentoEncontrado.descripcion} defaultValue={instrumentoEncontrado.descripcion}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.File id="imagenReal" label="Imagen file" type="file" name="imagenReal" value={imagenReal} defaultValue={instrumentoEncontrado.imagenReal}
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Editar
                     </Button>
                    <Button href="/crud" variant="info">
                        Volver
                    </Button>
                </Form>
            </React.Fragment>

        )

    }
}

export default Editar;