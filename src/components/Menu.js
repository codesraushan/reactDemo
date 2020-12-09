import React from "react";
import { ListGroup,  } from "reactstrap";
import { Link  } from "react-router-dom";

const Menu = () =>{
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/" action >
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/breakfast" action>
                BreakFast
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/lunch" action>
                Lunch
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/snacks" action>
                Snacks
            </Link>
            
            <Link className="list-group-item list-group-item-action" tag ="a" to= "/dinner" action>
                Dinner
            </Link>
        </ListGroup>

    );
}

export default Menu;