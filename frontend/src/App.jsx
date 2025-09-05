import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";
import NoPosts from "./components/NoPosts";

const urlBaseServer = import.meta.env.VITE_API_URL || "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      setLoading(true);
      const { data: posts } = await axios.get(urlBaseServer + "/posts");
      setPosts(posts);
    } catch (err) {
      console.error("Error al cargar posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const agregarPost = async () => {
    const post = { titulo, url: imgSrc, descripcion };
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`);
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-900 text-gray-100">
      {/* aside */}
      <div className="bg-gray-800 flex-shrink-0">
        <div className="flex items-center px-4 pt-2">
          <h2 className="text-xl font-semibold text-gray-100 inline-flex">
            Like Me <span className="ml-2">📷</span>
          </h2>
          <div className="p-4 md:hidden ml-auto">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="text-gray-100 p-2 rounded-md border border-gray-500"
            >
              &#9776; {/* icono de burger */}
            </button>
          </div>
        </div>
        <aside
          className={`${
            isFormOpen ? "flex" : "hidden"
          } md:flex flex-col lg:w-80 p-6`}
        >
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </aside>
      </div>

      {/* main */}
      <div className="flex-1 overflow-auto p-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-500"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {posts.map((post, i) => (
              <Post
                key={i}
                post={post}
                like={like}
                eliminarPost={eliminarPost}
              />
            ))}
          </div>
        ) : (
          <NoPosts />
        )}
      </div>
    </div>
  );
}

export default App;
