import instance from "./instance";

export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};

export const All = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url, id);
};

export const update = (user) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
};