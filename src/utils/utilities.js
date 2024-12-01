export function calculatePrice(price, currency){
    switch(currency){
        case "EUR":
            return price*0.86;
        case "RPS":
            return price*84.45;
        default:
            return price;
    }
}

export function calculateTotal(cart, currency){
    let totalUsd = 0;
    Object.keys(cart).forEach((item) => {
        totalUsd += cart[item].price * cart[item].quantity;
    });
    return calculatePrice(totalUsd, currency).toFixed(2);
}

export function getCurrencySymbol(currencyFilter){
    switch(currencyFilter){
        case "EUR":
            return '€';
        case "RPS":
            return "₹";
        case "USD":
            return "$";
        default:
            return "";
    }
}