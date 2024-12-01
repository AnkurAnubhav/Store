import { inventoryData } from '../../data.js';

export const loadData = () => {
   return { 
        type: "inventorySlice/loadData",
        payload: inventoryData
    };
};

const initialState = [];
export const inventoryReducer = (inventory = initialState, action) => {
    switch (action.type) {
        case "inventorySlice/loadData":
            return action.payload;
        default:
            return inventory;
    }
}