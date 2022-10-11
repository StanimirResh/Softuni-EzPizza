import * as request from './requester'

const baseUrl = "http://localhost:3030/users"

export const login = async (email, password) => {
    const response = await request.post(`${baseUrl}/login`, { email, password })
    return response
}


export const register = (email, password) => {
    return request.post(`${baseUrl}/register`, { email, password })
}

export const logout = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': token
            }
        });

        return response;
    } catch (err) {
        throw err
    }
}
