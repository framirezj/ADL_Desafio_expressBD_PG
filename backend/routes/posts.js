import express from 'express'
const router = express.Router()
import { findAll } from '../models/posts.model.js';


router.get("/", async (req, res) => {
    const posts = await findAll()
    res.json(posts)
})



export default router;