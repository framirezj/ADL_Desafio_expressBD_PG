import express from "express";
const router = express.Router();
import { create, deleteById, findAll, findById, update } from "../models/posts.model.js";
import validaBody from "../helpers/validaBody.js";

router.get("/", async (req, res) => {
  try {
    const posts = await findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    res.status(500).json({ error_message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const errors = validaBody(req.body);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const saved = await create(req.body);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error al crear el post:", error);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {

    const post = await findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error_message: "EL id no se encuentra." });
    }

    const updated = await update(req.params.id);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error al editar el post", error);
    res.status(500).json({ error_message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error_message: "EL id no se encuentra." });
    }

    //metodo para eliminar
    const deletedPost = await deleteById(req.params.id)

    res.status(200).json({...deletedPost, message: "Recurso Eliminado"})
  } catch (error) {
    console.error("Error al eliminar el recurso", error)
    res.status(500).json({ error_message: error })
  }
})

export default router;
