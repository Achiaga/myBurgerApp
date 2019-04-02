import React from 'react';
import Aux from "../../hoc/Aux";
// We need to creat an Aux or array or in a div or something bc we can not use jsx elements in js
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;