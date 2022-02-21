let cart = [];

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);

    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increase = (id, next) => {
    // eslint-disable-next-line no-plusplus
    const currentProduct = cart.find((item) => item.id == id);
    currentProduct.quantity++;

    const priceInt = +currentProduct.pricenew;
    // console.log(typeof (priceInt));
    currentProduct.total += priceInt;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decrease = (id, next) => {
    const currentProduct = cart.find((item) => item.id == id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;

    let priceInt = +currentProduct.pricenew;
    // console.log(typeof (priceInt));
    currentProduct.total -= priceInt;
    // console.log(typeof (priceInt))

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa không ?");
        if (confirm) {
            cart = cart.filter((item) => item.id != id);
        } else {
            currentProduct.quantity = 1;
            currentProduct.total = currentProduct.quantity * currentProduct.pricenew;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const removeItem = (id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa không ?");
    if (confirm) {
        console.log(cart = cart.filter((item) => item.id != id));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};