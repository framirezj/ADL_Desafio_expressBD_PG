import express from "express";
const router = express.Router();
import { create, findAll } from "../models/posts.model.js";
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
    const errors = validaBody(req.body)

    if (errors.length > 0) {
      return res.status(400).json(errors)
    }

    const saved = await create(req.body);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error al crear el post:", error)
    res.status(500).json(error)
  }
});

export default router;
