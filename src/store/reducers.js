import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
    products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: []
};

const shopReducer = (state=initialState, action) => {
    let cart, index;
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            cart = [...state.cart];
            index = cart.findIndex(item => item.id === action.payload.id);

            if(index < 0) {
                cart.push({...action.payload, quality: 1});
            } else {
                const updatedItem = {
                    ...cart[index]
                };
                updatedItem.quality++;
                cart[index] = updatedItem;
            }
            return { ...state, cart};
        
        case REMOVE_PRODUCT_FROM_CART:
            cart = [...state.cart];
            index = cart.findIndex(item => item.id === action.payload);
            const updatedItem = {
                ...cart[index]
            };

            

            updatedItem.quality--;
            if(updatedItem.quality <= 0) {
                cart.splice(index, 1);
            } else {
                cart[index] = updatedItem;
            }
            return { ...state, cart}
        default:
            return state;
    }
};

export default shopReducer;