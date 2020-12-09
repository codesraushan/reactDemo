import React from "react";
import { Table, tbody, tr, th, Button } from "reactstrap";

const AllFood = () => {
    return(
        <Table bordered>
            <tbody>
            <tr>
                <th sm="4">
                Food
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

               
                
                {/* <th>
                Fats
                </th> */}
                
            </tr>
          
            </tbody>
        </Table>

    );

}

export default AllFood;