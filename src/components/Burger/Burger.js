import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
 
const burger = (props) => {
    // Only pass the string no the numbers in Object.key
    // Keys return an array
    // Transform object into Array:
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    // transformed array into something else
    // takes finction as argument
    // this function takes two arguments (previous value, current value)
    // returning somwthing --> loop through all elements and add them to the initial value step by step
    // concat (el) take the given element we are looping and add it to the array
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please, Start Adding Ingredients!</p>
    }
    console.log(transformedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;