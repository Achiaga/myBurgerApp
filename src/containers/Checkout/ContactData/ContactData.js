import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button"
import classes from "./ContactData.module.css"
 
class ContactData extends Component {
    state = {
        name: "",
        email: "",
        adress: {
            street: "",
            postalCode: ""
        }
    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="potal" placeholder="Potal Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }

}
 
export default ContactData;