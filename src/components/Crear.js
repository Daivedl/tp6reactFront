import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class Editar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
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
        
        axios.post(
            `http://localhost:3001/api/instrumento/create`,
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
                        <Form.Control name="instrumento" type="text"  value={instrumento} placeholder="Nombre del instrumento"
                            onChange={this.myChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control name="marca" type="text" value={marca} placeholder="Nombre de la marca"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control name="modelo" type="text" value={modelo} placeholder="Nombre del modelo"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Imagen string</Form.Label>
                        <Form.Control name="imagen" type="text" value={imagen} placeholder="Nombre de la imagen"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control name="precio" type="number" value={precio} placeholder="Precio"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Costo de envío</Form.Label>
                        <Form.Control name="costoEnvio" type="text" value={costoEnvio} placeholder="Costo de envío"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Cantidad vendida</Form.Label>
                        <Form.Control name="cantidadVendida" type="number" value={cantidadVendida} placeholder="Cantidad vendida"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control name="descripcion" type="text" value={descripcion} placeholder="Descripción"
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNro1">
                        <Form.File id="imagenReal" label="Imagen file" type="file" name="imagenReal" value={imagenReal} 
                            onChange={this.myChangeHandler} />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Crear
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