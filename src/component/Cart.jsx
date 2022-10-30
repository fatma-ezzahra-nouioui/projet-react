import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addCart } from "../redux/action";
//import { readConfigFile } from "typescript";
//import CartItem from "./Cartitem";
import {ShowProduct} from "./Product";
const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()


    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>

                    </div>

                </div>
            </div>
        );

    };
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
                <i className="fa fa-shopping-cart me-1 "></i> Cart({state.length})
            </NavLink>
            
        </>
    )
};

export default Cart;