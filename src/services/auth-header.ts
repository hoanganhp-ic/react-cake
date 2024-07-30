export default function authHeader() {
    const userStr = localStorage.getItem('user');
    let user = null;
    if (userStr) {
        user = JSON.parse(userStr);
    }

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export function getCurrentUserClient() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}

export const logout = () => {
    localStorage.removeItem("user");
};
