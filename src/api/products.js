import instance from "./instance";

export const productAll = (param) => {
    const url = `/products?${param || ""}`;
    return instance.get(url);
};

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url, id);
};

export const add = (products) => {
    const url = "/products";
    return instance.post(url, products);
};

export const update = (products) => {
    const url = `/products/${products.id}`;
    return instance.put(url, products);
};

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};
export const productpage = (page = "", limit = "") => {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return instance.get(url);
};
export const limitPageProducts = (inter) => {
    const url = `/products${inter}`;
    return instance.get(url);
};