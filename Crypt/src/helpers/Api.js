const BASE_URL = 'http://localhost:3000';

export class Api {
    static async login(login, password) {
        return await getResponse(fetch(BASE_URL + '/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({login, password}),
        }));
    }

    static async createAccount() {
        return await getResponse(fetch(BASE_URL + '/create-account', {
            method: 'POST',
            ...getCommonFetchSettings()
        }));
    }

    static async getAccounts() {
        return await getResponse(fetch(BASE_URL + '/accounts', {
            method: 'GET',
            ...getCommonFetchSettings()
        }));
    }

    static async getAccount(id) {
        return await getResponse(fetch(BASE_URL + '/account/' + id, {
            method: 'GET',
            ...getCommonFetchSettings()
        }));
    }

    static async transfer(from, to, amount) {
        return await getResponse(fetch(BASE_URL + '/transfer-funds', {
            method: 'POST',
            body: JSON.stringify({from, to, amount}),
            ...getCommonFetchSettings(),
        }));
    }

    static async getPlacesOnMap() {
        return await getResponse(fetch(BASE_URL + '/banks', {
            method: 'GET',
            ...getCommonFetchSettings(),
        }));
    }

    static async getUserCurrencies() {
        return await getResponse(fetch(BASE_URL + '/currencies', {
            method: 'GET',
            ...getCommonFetchSettings(),
        }));
    }

    static async getAllCurrencies() {
        return await getResponse(fetch(BASE_URL + '/all-currencies', {
            method: 'GET',
            ...getCommonFetchSettings(),
        }));
    }

    static async buyCurrency(from, to, amount) {
        return await getResponse(fetch(BASE_URL + '/currency-buy', {
            method: 'POST',
            body: JSON.stringify({from, to, amount}),
            ...getCommonFetchSettings(),
        }));
    }

    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static removeToken() {
        localStorage.removeItem('token');
    }
}

function getCommonFetchSettings() {
    return {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${localStorage.getItem('token')}`
        },
    }
}

function getResponse(promise) {
    return promise.then(e => e.json())
        .catch(() => {
            return {
                payload: null,
                error: "Server error"
            }
        });
}
