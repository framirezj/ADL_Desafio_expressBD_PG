import { pool } from "../database/connection.js";

const table = "posts";

/*FRONTEND
/* const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/posts");
    setPosts([...posts]);
  }; */
export const findAll = async () => {
  const res = await pool.query(`SELECT * FROM ${table} ORDER BY id`);
  return res.rows;
};

export const findById = async (postId) => {
  const query = `SELECT * FROM ${table} WHERE id = $1`;
  const values = [postId];

  const res = await pool.query(query, values);
  return res.rows[0];
};

/*FRONTEND
const agregarPost = async () => {
    const post = { titulo, url: imgSrc, descripcion };
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
  };
*/
export const create = async (post) => {
  const { titulo, url, descripcion } = post;

  const query = `INSERT INTO ${table} (titulo, img, descripcion) VALUES (UPPER($1),$2,$3) RETURNING *`;
  const values = [titulo, url, descripcion];

  const res = await pool.query(query, values);
  return res.rows[0];
};

/*FRONTEND
   este método se utilizará en el siguiente desafío
  const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`);
    getPosts();
  };
*/

export const update = async (postId) => {
  const query = `UPDATE ${table} SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *`;
  const res = await pool.query(query, [postId]);

  return res.rows[0];
};


/*
// este método se utilizará en el siguiente desafío
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };
*/

export const deleteById = async (postId) => {
  const query = `DELETE FROM ${table} WHERE id = $1 RETURNING *`
  const values = [postId]
  const res = await pool.query(query, values)

  return res.rows[0]
}


/*********************************************************** */

/*
EXAMPLES METODOS BACKEND
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

/******************************************************* */
/*
METODOS FRONTEND

  

  

*/
