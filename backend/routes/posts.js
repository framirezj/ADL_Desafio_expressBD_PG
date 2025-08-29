import express from "express";
const router = express.Router();
import { create, findAll } from "../models/posts.model.js";

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
    const saved = await create(req.body);
    res.status(201).json(saved);
  } catch (error) {
    console.error("Error al crear el post:", error)
    res.status(500).json(error)
  }
});

export default router;
