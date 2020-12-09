import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () =>{
    return (
        <ListGroup>
            <ListGroupItem tag ="a" href= "/" action >
                Home
            </ListGroupItem>
            <ListGroupItem tag ="a" href= "/food" action>
                BreakFast
            </ListGroupItem>
            <ListGroupItem tag ="a" href= "/food" action>
                Lunch
            </ListGroupItem>
            <ListGroupItem tag ="a" href= "/food" action>
                Snacks
            </ListGroupItem>
            
            <ListGroupItem tag ="a" href= "/food" action>
                Dinner
            </ListGroupItem>
        </ListGroup>

    );
}

export default Menu;