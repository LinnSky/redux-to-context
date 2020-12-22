import React, { Component } from 'react';
import ShopContext from '../context/shop-context';
// import { connect } from 'react-redux';
import MainNav from '../components/MainNav';
// import { addProductToCart } from '../store/actions';
import './Products.css';

class ProductsPage extends Component {
    render() { 
        return (
            <ShopContext.Consumer>
                {context => (
                    <React.Fragment>
                        <MainNav cartItemNumber={context.cart.reduce((count, curItem) => {
                                    return count + curItem.quality;
                                }, 0)} />
                        <main className="products">
                            <ul>
                                {context.products.map(product => 
                                    <li key={product.id}>
                                        <div>
                                            <strong>{product.title}</strong> - ${product.price}
                                        </div>
                                        <div>
                                            <button onClick={context.addProductToCart.bind(this, product)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </main>
                    </React.Fragment>
                )}                
            </ShopContext.Consumer>            
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         products: state.products,
//         cartItemCount: state.cart.reduce((count, curItem) => {
//             return count + curItem.quality;
//         }, 0)
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         addProductToCart: product => dispatch(addProductToCart(product))
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductsPage);

export default ProductsPage;