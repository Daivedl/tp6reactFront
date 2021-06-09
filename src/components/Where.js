import React, { Component } from 'react';
import NavBar from './NavBar';
import Iframe from 'react-iframe';


class Where extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <h1 style={{marginLeft:10}}>Nos encontramos aquí</h1>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4482396834587!2d-68.84046638468246!3d-32.886315176166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1619300466349!5m2!1ses!2sar"
                    width="900px"
                    height="400px"
                    id="myId"
                    className="myClassname ifa"
                    display="initial"
                    position="relative" />
            </React.Fragment>
        );
    }
}
export default Where;