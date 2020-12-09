import React, { useState } from "react";
import { Table, tbody, tr, th, Button } from "reactstrap";
import Food from "./Food";

const AllFood = () => {
    const [food, setFood]= useState([
        {id:"1", item:"frys", calories:"200.1", proteins:"20gm", carbs:"50gm"},
        {id:"2", item:"milk", calories:"301.1", proteins:"6gm", carbs:"20gm"},
        {id:"3", item:"sandwitch", calories:"20.1", proteins:"20gm", carbs:"50gm"},
        {id:"4", item:"pork", calories:"200.1", proteins:"20gm", carbs:"50gm"},
        {id:"5", item:"dal", calories:"200.1", proteins:"20gm", carbs:"50gm"},
        
    ])
    return(
        <div>
            {
                food.length>0
                ? food.map((it) => <Food food={it} />)
                : "no food selected"
            }
        </div>

    );
}

export default AllFood;