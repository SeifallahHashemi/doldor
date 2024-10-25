const BASKET_KEY = 'shopping_basket';

const isBrowser = () => typeof window !== 'undefined';

export const addToBasket = (product) => {
    if (isBrowser()) {
        const currentBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];

        // Check if the product already exists in the basket
        const existingProductIndex = currentBasket.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            // If it exists, increment its count
            currentBasket[existingProductIndex].count += 1; // Increment quantity
        } else {
            // If it does not exist, add it with a count of 1
            const newProduct = {
                ...product,
                count: 1 // Set count to 1
            };
            currentBasket.push(newProduct);
        }

        localStorage.setItem(BASKET_KEY, JSON.stringify(currentBasket));
    }
};

export const getBasket = () => {
    if (isBrowser()) {
        return JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
    }
    return [];
};

export const removeFromBasket = (productId) => {
    if (isBrowser()) {
        const currentBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
        const updatedBasket = currentBasket.filter(item => item.id !== productId);
        localStorage.setItem(BASKET_KEY, JSON.stringify(updatedBasket));
    }
};

export const clearBasket = () => {
    if (isBrowser()) {
        localStorage.removeItem(BASKET_KEY);
    }
};

// const BASKET_KEY = 'shopping_basket';

// const isBrowser = () => typeof window !== 'undefined';

// export const addToBasket = (product) => {
//     if (isBrowser()) {
//         const currentBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
//         currentBasket.push(product);
//         localStorage.setItem(BASKET_KEY, JSON.stringify(currentBasket));
//     }
// };

// export const getBasket = () => {
//     if (isBrowser()) {
//         return JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
//     }
//     return [];
// };

// export const removeFromBasket = (productId) => {
//     if (isBrowser()) {
//         const currentBasket = JSON.parse(localStorage.getItem(BASKET_KEY)) || [];
//         const updatedBasket = currentBasket.filter(item => item.id !== productId);
//         localStorage.setItem(BASKET_KEY, JSON.stringify(updatedBasket));
//     }
// };

// export const clearBasket = () => {
//     if (isBrowser()) {
//         localStorage.removeItem(BASKET_KEY);
//     }
// };