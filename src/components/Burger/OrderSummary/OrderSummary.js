import React, {Component} from 'react';
import Aux from "../../../hoc/Aux/Aux"
import Button from "../../UI/Button/Button"


class OrderSummery extends Component{
    // This could be a functional component. Doen't have to be a class


    render(){
        const ingredientSummery = Object.keys(this.props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>)
    });

        return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue To Chekout?</p>
            <p><strong>Total Price: ${this.props.price.toFixed(2)} </strong></p>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        </Aux>
        )
    }
}

export default OrderSummery;