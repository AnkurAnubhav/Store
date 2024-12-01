
export const addToCart = (inventoryItem) => {
    return {
        type: "cartSlice/addToCart",
        payload: inventoryItem, 
    };
};


export const changeItemQuantity = (name, newQuantity) => {
    return {
        type: "cartSlice/changeItemQuantity",
        payload: {
            name: name,
            newQuantity: newQuantity
        },
    };
};

const initialState = {};

export const cartReducer = (cart = initialState, action) => {
    switch(action.type){
        case "cartSlice/addToCart":{
            const {name, price} = action.payload;

            const quantity = cart[name] ? cart[name].quantity + 1: 1;
            const newItem = {price, quantity};

            return {...cart, [name]: newItem};
        }
        case "cartSlice/changeItemQuantity": {
            const {name, newQuantity} = action.payload;

            const itemToUpdate = cart[name];

            const updatedItem = {
                ...itemToUpdate,
                quantity: newQuantity,
            }

            return{
                ...cart, 
                [name]: updatedItem, 
            };
        }
        default:{
            return cart;
        }
    }
}