import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Badge, Row, Col } from "reactstrap";

const Food = () => {
    return(
        <Card>
            <Row>
                <Col sm="5">
                <h1><Badge style = {{width: 200}}>Food</Badge></h1>
                </Col>
                <Col sm="2">
                <h3><Badge>Calories</Badge></h3>
                </Col>
                <Col sm="2">
                <h3><Badge>Proteins</Badge></h3>
                </Col>
                
                <Col sm="2">
                <h3><Badge>Carbs</Badge></h3>
                </Col>
                
                <Col>
                <h3><Badge>Fats</Badge></h3>
                </Col>
                
            </Row>
            
         
        </Card>

    );

}

export default Food;