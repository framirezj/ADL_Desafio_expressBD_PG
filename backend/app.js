import express from "express";
import cors from "cors";
import routerPosts from './routes/posts.js'
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewares
app.use(express.json()); //req.body
// CORS para toda la app
app.use(cors());


//routers
app.use("/posts", routerPosts)

//bienvenida
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!!!" });
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
