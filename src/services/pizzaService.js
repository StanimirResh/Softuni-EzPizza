import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/pizzas/'

export const getAll = () => request.get(baseUrl)

export const getOne = (pizzaId) => request.get(`${baseUrl}${pizzaId}`)