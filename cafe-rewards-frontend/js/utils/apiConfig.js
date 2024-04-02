export const API_BASE_URL = 'http://localhost:3000/api';

export const ENDPOINTS = {
    get coffeeshops() { return `${API_BASE_URL}/coffeeshops` },
    get orders() { return `${API_BASE_URL}/orders` },
    get rewards() { return `${API_BASE_URL}/rewards` },
    get transactions() { return `${API_BASE_URL}/transactions` },
    get menus() { return `${API_BASE_URL}/menus` },
    get owners() { return `${API_BASE_URL}/owners` },
    get digitalwallets() { return `${API_BASE_URL}/digitalwallets` },
    get users() { return `${API_BASE_URL}/users` },
};
