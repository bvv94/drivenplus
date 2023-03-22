import axios from "axios"

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/"

function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body)
    return promise
}

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

const apiAuth = { login, signup } 
export default apiAuth