import * as request from './requester'

const baseUrl = 'http://localhost:3030/data'

export const getAll = (db) => request.get(`${baseUrl}/${db}`)

export const getOne = (db, pizzaId) => request.get(`${baseUrl}${db}/${pizzaId}`)

export const getIngridients = () => request.get(`${baseUrl}ingridients`)

export const edit = (db, pizzaId, pizza) => request.put(`${baseUrl}${db}/${pizzaId}`, pizza)

export const create = (db, pizza) => request.post(`${baseUrl}/${db}`, pizza)

export const del = (db, pizzaId) => request.del(`${baseUrl}/${db}/${pizzaId}`)