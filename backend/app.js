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

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});
