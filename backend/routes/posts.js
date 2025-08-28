import express from 'express'

const router = express.Router()


router.get("/", async (req, res) => {
    res.json({message: "aqui van los post"})
})



export default router;