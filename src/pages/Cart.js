import React, { Component } from 'react';
import shopContext from '../context/shop-context';
// import { connect } from 'react-redux';
import MainNav from '../components/MainNav';
// import { removeProductFromCart } from '../store/actions';
import './Cart.css';

class CartPage extends Component {

    static contextType = shopContext;

    componentDidMount(){
        console.log(this.context);
    }

    render() {
        return (
            <React.Fragment>
                <MainNav cartItemNumber={this.context.cart.reduce((count, curItem) => count + curItem.quality, 0)} />
                <main className="cart">
                    {!this.context.cart.length && <p>No Item in the Cart!</p>}
                    <ul>
                        {this.context.cart.map(cartItem => 
                            <li key={cartItem.id}>
                                <div>
                                    <strong>{cartItem.title}</strong> - ${cartItem.price} ({cartItem.quality})
                                </div>
                                <div>
                                    <button onClick={this.context.removeProductFromCart.bind(this, cartItem.id)}>
                                        Remove from Cart
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </main> 
            </React.Fragment>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         cartItems: state.cart,
//         cartItemCount: state.cart.reduce((count, curItem) => count + curItem.quality, 0)
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         removeProductFromCart: id => dispatch(removeProductFromCart(id))
//     };
// };

export default CartPage;