import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Instrumento extends Component {
    render() {
        const nOv = this.props.costoEnvio;
        let texto;
        if (nOv === 'G') {
            texto = <p style={{ color: 'green' }}>Envío gratis a todo el país</p>
        } else {
            texto = <p style={{ color: 'orange' }}>Costo de Envío Interior de Argentina: ${this.props.costoEnvio}</p>
        }
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../assets/images/${this.props.imagen}`).default} height={200} width={200}/>
            <Card.Body>
                <Card.Title>{this.props.instrumento}</Card.Title>
                <Card.Text>
                    <p>${this.props.precio}</p>
                    <p>{texto}</p>
                    <p>{this.props.cantidadVendida} vendidos</p>
                </Card.Text>
                <Button href={`products/${this.props.id}`} variant="primary">Más info</Button>
            </Card.Body>
        </Card>
        )
        
    }

}

export default Instrumento;