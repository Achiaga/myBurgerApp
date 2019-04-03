import React from 'react';
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
 
const burger = (props) => {
    // Only pass the string no the numbers in Object.key
    // Keys return an array
    const transformedIngredents = Object.keys(props.ingridients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredents}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
 
export default burger;