import React from 'react';
import classes from "./BuildControl.module.css"
 
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        {/* name of ingredient I want to add */}
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
);
 
 
export default buildControl;