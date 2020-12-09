import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Badge, Row, th, Table, Button } from "reactstrap";

const Food = () => {
    return(
        <Table bordered className = "bg-success">
            <thead>
            <tr>
                <th sm="3">
                FOOD
                </th>
                <th sm="2">
                Calories
                </th>
                <th sm="2">
                Proteins
                </th>
                
                <th sm="2">
                Carbs
                </th>
                
                {/* <th sm="2">
                <h3><Badge>Fats</Badge></h3>
                </th> */}
                
            </tr>
        
            
            </thead>
        </Table>

    );

}

export default Food;