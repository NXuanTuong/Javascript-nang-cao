import instance from "./instance";

export const OrderAll = () => {
    const url = "/orders";
    return instance.get(url);
};
export const getOrders = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url, id);
};

export const add = (orders) => {
    const url = "/orders";
    return instance.post(url, orders);
};

export const update = (orders) => {
    const url = `/orders/${orders.id}`;
    return instance.put(url, orders);
};

export const remove = (id) => {
    const url = `/orders/${id}`;
    return instance.delete(url, id);
};