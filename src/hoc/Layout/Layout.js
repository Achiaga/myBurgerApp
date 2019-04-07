import React, {Component} from 'react';
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
// We need to creat an Aux or array or in a div or something bc we can not use jsx elements in js
class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return(
            <Aux>
                <Toolbar toggleMenu={this.SideDrawerToggleHandler} />
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.SideDrawerCloseHandler}
                 />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>             
        )  
    }
}

export default Layout;