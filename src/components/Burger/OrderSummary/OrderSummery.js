import React from 'react';
import Aux from "../../../hoc/Aux"
import Button from "../../UI/Button/Button"


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
            <p><strong>Total Price: ${props.price.toFixed(2)} </strong></p>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>
    );
};
 
export default orderSummery;