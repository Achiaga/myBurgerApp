import React from 'react';
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
// We need to creat an Aux or array or in a div or something bc we can not use jsx elements in js
const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;