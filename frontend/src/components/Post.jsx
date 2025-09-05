function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
}) {
  return (
    <div className="bg-gray-900 shadow-xl shadow-blue-500/20 rounded-2xl overflow-hidden text-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2 border-dashed border-gray-500">
      {/* Contenedor imagen */}
      <div className="relative">
        <img className="w-full h-56 object-cover" src={img} />
        {/* Botón eliminar */}
        <button
          onClick={() => eliminarPost(id)}
          className="absolute top-3 right-3 bg-black/50 hover:bg-red-500/80 text-white rounded-full px-2 transition"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-4 gap-3">
        {/* Footer con acciones */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i
              onClick={() => like(id)}
              className={`cursor-pointer fa-heart fa-lg transition-colors ${
                likes
                  ? "fa-solid text-red-500"
                  : "fa-regular text-gray-400 hover:text-red-400"
              }`}
            ></i>
            <span className="text-sm">{likes ? likes : 0}</span>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold">{titulo}</h4>
          <p className="text-gray-400 text-sm">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
