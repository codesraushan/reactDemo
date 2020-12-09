import React from "react";
import { Table } from "reactstrap";

const Food = ({food}) => {
    return(

        <Table bordered>
            <tbody>
            <tr>
                <th sm="4">
                {food.item}
                </th>
                <th sm="2">
                {food.calories}
                </th>
                <th sm="2">
                {food.proteins}
                </th>
                <th sm="2">
                {food.carbs}
                </th>
                
            </tr>
          
          
            </tbody>
        </Table>

    );

}

export default Food;