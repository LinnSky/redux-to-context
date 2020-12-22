import React from 'react';
import ShopContext from './shop-context';

class GlobalState extends React.Component {
    
    state = {
        products: [
          { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
          { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
          { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
          { id: 'p4', title: 'Half-dried plant', price: 2.99 }
        ],
        cart: []
      };
    
      addProductToCart = product => {
        console.log('Add product', product);
        const cart = [...this.state.cart];
        const index = cart.findIndex(item => item.id === product.id);
    
        if(index < 0) {
            cart.push({...product, quality: 1});
        } else {
            const updatedItem = {
                ...cart[index]
            };
            updatedItem.quality++;
            cart[index] = updatedItem;
        }
        this.setState({cart});
      };
    
      removeProductFromCart = id => {
        console.log('remove product with id' + id);
        const cart = [...this.state.cart];
        const index = cart.findIndex(item => item.id === id);
        const updatedItem = {
            ...cart[index]
        };
    
        updatedItem.quality--;
        if(updatedItem.quality <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index] = updatedItem;
        }
    
        this.setState({cart});
      };

    render() {
        return <ShopContext.Provider value={{
            products: this.state.products, 
            cart: this.state.cart, 
            addProductToCart: this.addProductToCart,
            removeProductFromCart: this.removeProductFromCart
            }}>
                {this.props.children}
            </ShopContext.Provider>;
    }
}

export default GlobalState;
