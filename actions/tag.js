import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';
import queryString from 'query-string';

export const create = (tag, token) => {
    return fetch(`${API}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            handleResponse(response);
            return response
        })
        .catch(err => console.log(err));
};

export const getTags = (token) => {
    return fetch(`${API}/tags`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response
        })
        .catch(err => console.log(err));
};

export const singleTag = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const removeTag = (slug, token) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response
        })
        .catch(err => console.log(err));
};

export const tagSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${API}/tags/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};