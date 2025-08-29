function Form({ setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  return (
    <form className="flex flex-col gap-3">
      <h5 className="text-2xl font-bold text-gray-100 mb-6">Agregar post</h5>

      <input
        onChange={(event) => setTitulo(event.target.value)}
        className="p-2 bg-gray-900 border border-gray-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
        placeholder="Título"
      />

      <input
        onChange={(event) => setImgSRC(event.target.value)}
        className="p-2 bg-gray-900 border border-gray-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
        placeholder="URL"
      />

      <textarea
        onChange={(event) => setDescripcion(event.target.value)}
        className="p-2 bg-gray-900 border border-gray-700 text-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
        placeholder="Descripción"
      ></textarea>

      <button
        onClick={agregarPost}
        className="bg-blue-600 text-white py-2 shadow-md rounded-xl hover:bg-blue-700 transition"
      >
        Agregar
      </button>
    </form>
  );
}

export default Form;
