import instance from "./instance";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url, id);
};

export const add = (blogs) => {
    const url = "/posts";
    return instance.post(url, blogs);
};

export const update = (blogs) => {
    const url = `/posts/${blogs.id}`;
    return instance.put(url, blogs);
};

export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url, id);
};