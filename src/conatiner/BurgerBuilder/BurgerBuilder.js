import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/OrderSummary/OrderSummary';

const INGREDIENT_PRICE =
{
    salad: 3,
    meat: 4,
    cheese: 2,
    bacon: 4
}

class BurgerBuilder extends Component {

    state =
        {
            ingredients: {
                salad: 0,
                meat: 0,
                cheese: 0,
                bacon: 0,
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }

    updatePurchaseState = (ingredientscopy) => {

        let sum = Object.keys(ingredientscopy)
            .map(igKey => {
                return ingredientscopy[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        this.setState({ purchasable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState(
            {
                purchasing: true
            }
        );
    }
    addIngredientHandler = (type) => {
        let count = this.state.ingredients[type] + 1;
        const updatedIngredient =
        {
            ...this.state.ingredients
        }

        updatedIngredient[type] = count;
        let price = INGREDIENT_PRICE[type];
        price = price + this.state.totalPrice;
        this.setState(
            {
                ingredients: updatedIngredient,
                totalPrice: price
            }
        );
        this.updatePurchaseState(updatedIngredient);
    }

    purchaseCancel = () => {
        this.setState(
            {
                purchasing: false
            }
        );
    }

    purchaseContinueHandler = () => {
        alert('Succesful Purchase');
    }
    removeIngredientHandler = (type) => {
        let count = this.state.ingredients[type] - 1;
        const updatedIngredient =
        {
            ...this.state.ingredients
        }

        updatedIngredient[type] = count;
        let price = INGREDIENT_PRICE[type];
        price = this.state.totalPrice - price;
        this.setState(
            {
                ingredients: updatedIngredient,
                totalPrice: price
            }
        );
        this.updatePurchaseState(updatedIngredient);
    }
    render() {
        let disabledinfo =
        {
            ...this.state.ingredients
        }

        for (let key in disabledinfo) {
            disabledinfo[key] = disabledinfo[key] <= 0;
        }

        return (
            <>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancel}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancel}
                        purchaseContinue={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledinfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder;