import { pool } from '../database/connection.js'

const table = "posts"



 export const findAll = async () => {
    const res = await pool.query(`SELECT * FROM ${table}`)
    return res.rows
}

/*
export const findById = async (id) => {

    const query = "SELECT * FROM todos WHERE id = $1"
    const values = [id]

    const res = await pool.query(query, values)
    return res.rows[0]

}

export const create = async (title) => {
    const query = "INSERT INTO todos (title) VALUES ($1) RETURNING *"
    const values = [title]

    const res = await pool.query(query, values)

    return res.rows[0]
}

export const remove = async (id) => {
    const query = "DELETE FROM todos WHERE id = $1 RETURNING *"
    const res = await pool.query(query,[id])
    return res.rows[0]
}

export const update = async (id) => {
    const query = "UPDATE todos SET done = NOT done WHERE id = $1 RETURNING *"
    const res = await pool.query(query,[id])
    return res.rows[0]
} */