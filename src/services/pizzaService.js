import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/'

export const getAll = (db) => request.get(`${baseUrl}/${db}`)

export const getOne = (db, pizzaId) => request.get(`${baseUrl}${db}/${pizzaId}`)