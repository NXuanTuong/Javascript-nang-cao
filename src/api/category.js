import instance from "./instance";

export const categoriesAll = () => {
    const url = "/categories";
    return instance.get(url);
};

export const getCategory = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url, id);
};

export const add = (categories) => {
    const url = "/categories";
    return instance.post(url, categories);
};

export const update = (categories) => {
    const url = `/categories/${categories.id}`;
    return instance.put(url, categories);
};

export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url, id);
};