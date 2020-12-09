import React from "react";
import { ListGroup,  } from "reactstrap";
import { Link  } from "react-router-dom";

const Menu = () =>{
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/" action >
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/food" action>
                BreakFast
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/food" action>
                Lunch
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/food" action>
                Snacks
            </Link>
            
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/food" action>
                Dinner
            </Link>
        </ListGroup>

    );
}

export default Menu;