

import { userService } from '../services/user.service';
export const http = {
    get,
    post,
};

async function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...authHeader() }
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
}
async function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader() },
        body: JSON.stringify(body)
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
}

function authHeader() {
    const user = userService.userValue;
    const isLoggedIn = user && user.data.access_token;
    if (isLoggedIn) {
        return { "access-token":  user.data.access_token};
    } else {
        return {};
    }
}