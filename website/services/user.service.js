import getConfig from 'next/config'
import { http } from '../helpers/http';
import { BehaviorSubject } from 'rxjs';
const { publicRuntimeConfig } = getConfig();
import Router from 'next/router'
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));
export const userService = {
    register,
    login,
    getAll,
    logout,
    createArticle,
    fetchSingleUserArticles,
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    addArticle
};

function getAll() {
    return http.get(`http://localhost:3000/api/article/get_articles_count`);
}

async function register(data) {
    const user = await http.post(`${baseUrl}/user/signup`, data);
    if (user.status) {
        userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}
async function login(data) {
    const user = await http.post(`${baseUrl}/user/login`, data);
    if (user.status) {
        userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}

async function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

// adding routes for articles here
async function createArticle(data) {
    return await http.post(`${baseUrl}/article/create_article`, data);
}

async function fetchSingleUserArticles(userId) {
    return http.get(`${baseUrl}/article/fetch_single_user_articles?user_id=${userId}`);
}

// add articles new
async function addArticle(data) {
    return await http.post(`${baseUrl}/article/add_article`, data);
}