import React from 'react'
import './card.css'
import CardReactFormContainer from 'card-react';

export default function Payment() {
    return (
        <div>
            <CardReactFormContainer

                // the id of the container element where you want to render the card element.
                // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
                container="card-wrapper" // required

                // an object contain the form inputs names.
                // every input must have a unique name prop.
                formInputsNames={
                {
                    number: 'CCnumber', // optional — default "number"
                    expiry: 'CCexpiry',// optional — default "expiry"
                    cvc: 'CCcvc', // optional — default "cvc"
                    name: 'CCname' // optional - default "name"
                }
                }

                // initial values to render in the card element
                initialValues= {
                {
                    number: '4242424242424242', // optional — default •••• •••• •••• ••••
                    cvc: '123', // optional — default •••
                    expiry: '16/12', // optional — default ••/••
                    name: 'Random Name' // optional — default FULL NAME
                }
                }

                // the class name attribute to add to the input field and the corresponding part of the card element,
                // when the input is valid/invalid.
                classes={
                {
                    valid: 'valid-input', // optional — default 'jp-card-valid'
                    invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                }
                }

                // specify whether you want to format the form inputs or not
                formatting={true} // optional - default true
                >
                <div id="card-wrapper"></div>

                <form>
                <input placeholder="Full name" type="text" name="CCname" />
                <input placeholder="Card number" type="text" name="CCnumber" />
                <input placeholder="MM/YY" type="text" name="CCexpiry" />
                <input placeholder="CVC" type="text" name="CCcvc" />
                <button className='waves-effect waves-light btn'>Submit</button>
                </form>

                </CardReactFormContainer>

        </div>
    )
}
