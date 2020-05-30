import React from 'react';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li><span>{igKey} : {props.ingredients[igKey]}</span></li>
        });

    return (
        <>
            <h1>Your Delicious Order</h1>
            <h2>Enjoy the meal</h2>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
            <p>Continue to checkout</p>
        </>
    );
}

export default orderSummary;