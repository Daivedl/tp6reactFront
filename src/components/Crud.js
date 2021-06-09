import React, { Component } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



class Crud extends Component {

    constructor() {
        super();
        this.state = {
            db: [],
            instrumento: {
                id: 0,
                instrumento: '',
                marca: '',
                modelo: '',
                imagen: '',
                precio: 0,
                costoEnvio: '',
                cantidadVendida: 0,
                descripcion: ''
            }
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.getInstrumentos();
    }
    getInstrumentos() {
        axios.get(`http://localhost:3001/api/instrumento`)
            .then(res => {
                console.log(res);
                this.setState({ db: res.data });
                console.log(res.data[0].imagen);
            });
    }
    deleteInstrumento(instrumento) {
        axios.delete(`http://localhost:3001/api/instrumento/delete/${instrumento.id}`)
            .then(res => {
                console.log(res.data);
            })
    }
    render() {
        console.log(this.state.db);
        const instrumentos = this.state.db.map((instrumento, i) => {
            return (
                <tr key={i}>
                    <th>{instrumento.id} </th>
                    <th>{instrumento.instrumento} </th>
                    <th>{instrumento.marca} </th>
                    <th>{instrumento.modelo} </th>
                    <th>{instrumento.precio} </th>
                    <th>{instrumento.imagen} </th>
                    <th>{instrumento.imagenReal} </th>
                    <th>{instrumento.costoEnvio} </th>
                    <th>{instrumento.cantidadVendida} </th>
                    <th>{instrumento.descripcion} </th>
                    <th>
                        <Button href={`/editar/${instrumento.id}`} variant="primary">Editar</Button>
                        <Button href={`/crud`} onClick={() => this.deleteInstrumento(instrumento)} variant="danger">Borrar</Button>
                    </th>
                </tr>
            )

        })

        return (
            <React.Fragment>
                <NavBar></NavBar>
                <div className="center">
                    <div className="d-flex justify-content-center">
                        <Button href='/crear' variant="success">Crear</Button>
                    </div>
                     
                    <Table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Instrumento</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">ImagenReal</th>
                                <th scope="col">Costo Envío</th>
                                <th scope="col">Cantidad Vendida</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {instrumentos}
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        )
    }

}

export default Crud;