import api from "./api";


export const login = async (loginData) => {

    const response = await api.post(
        "/Auth/Login",
        loginData
    );

    const data = response.data;


    if (data.isSuccess && data.token) {

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(data)
        );
    }


    return data;
};


export const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");
};


export const getUser = () => {

    const user =
        localStorage.getItem("user");

    return user
        ? JSON.parse(user)
        : null;
};