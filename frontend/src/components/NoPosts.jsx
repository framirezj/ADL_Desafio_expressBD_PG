export default function NoPosts() {
  return (
    <div className=" max-h-[80vh] h-screen flex flex-col justify-center items-center ">
      <div className="w-full max-w-md">
        <iframe
          src="https://tenor.com/embed/16946746"
          width="100%"
          height="300"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl font-bold text-gray-50 text-center">
        ¡Crea tu primer post!
      </h2>
    </div>
  );
}