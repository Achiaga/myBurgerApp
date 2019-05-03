import React, { Component } from 'react';
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummery from "../../components/Burger/OrderSummary/OrderSummery"
import Background from "../../components/UI/Background/Background"
import axios from "../../axios-orders"
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import Spinner from "../../components/UI/Spinner/Spinner"
import { connect } from "react-redux"

import * as actionTypes from "../../store/actions"

class BurgerBuilder extends Component {
    // contructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        // ingredients: null,  WE ARE NOT USING THE LOCAL STATE FOR INGREDIENTS ANYMORE
        // totalPrice: 4,
        purchasable: false,
        purchasing: false,
        error: false
    }

    componentDidMount () {
        // console.log(this.props)
        // axios.get("https://react-burger-app-maker.firebaseio.com/ingredients.json")
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //     })
        //     .catch(error => {
        //         this.setState({error: true})
        //     })
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // alert("You are continuing!")
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price=" +this.state.totalPrice)
        const queryString = queryParams.join("&")
        this.props.history.push({
            pathname: "/checkout",
            search: "?" + queryString,
        })
     }

    render() {
        const disabledInfo = {
            ...this.props.ings
            // props.ing es por redux
        }
        for ( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if(this.props.ings) {
            burger = (
                <Aux>
                <Burger ingredients={this.props.ings}/>
                <Background >
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                    ingredientDeleted={this.props.onIngredientRemoved}
                    disabled ={disabledInfo}
                    ordered={this.purchaseHandler}
                    price={this.props.price}
                    purchasable={this.state.purchasable} />
                </Background>
                </Aux> 
            );

            orderSummary = <OrderSummery 
                ingredients={this.props.ings} 
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price} />
        }

        if (this.state.loading){
            orderSummary = <Spinner />
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ignName) =>dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ignName}),
        onIngredientRemoved: (ignName) =>dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ignName}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));