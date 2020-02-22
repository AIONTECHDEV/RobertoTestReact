import React from 'react'
import {agruparDatos, obtenerUsuario} from "../General/FuncionesGenerales";
import {Card, CardHeader, CardBody, CardFooter} from 'react-simple-card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ImageHeader} from "react-simple-card/dist";
// @ts-ignore
import {LineChart, PieChart} from 'react-chartkick'
import 'chart.js'



export class Home extends React.Component {

    state = {
        datos: {}
    }
    componentDidMount(): void {
        const historial =localStorage.getItem('history');
        if (historial != null) {
            console.log('h: ', agruparDatos(JSON.parse(historial)))
            this.setState({datos: agruparDatos(JSON.parse(historial))})
        }
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:'center'}}>Welcome to your online banking {obtenerUsuario()}</h3>
                <Row>
                    <Col>
                        <Card>
                            <CardBody><PieChart data={this.state.datos}/></CardBody>
                            <CardFooter>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen
                                book.</CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <ImageHeader imageSrc="http://via.placeholder.com/600x250"/>
                            <CardBody><h3>Main expences</h3></CardBody>
                            <CardFooter><h6>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>Current balance</CardBody>
                            <CardBody>Body</CardBody>
                        </Card>
                    </Col>
                </Row>


            </div>

        )
    }

}