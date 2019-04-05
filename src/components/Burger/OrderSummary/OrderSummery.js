import React from 'react';
import Aux from "../../../hoc/Aux"



const orderSummery = (props) => {
    // ingredietns are in a object format and not in an array --> Problem
    const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue To Chekout?</p>
        </Aux>
    );
};
 
export default orderSummery;