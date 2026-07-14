import { Link } from "react-router-dom";
export default function CreateProjectView() {
  return (
    <>
      <h1 className="text-5xl font-black">Crear Proyecto</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Completa el formulario para crear un nuevo proyecto</p>
      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 cursor-pointer text-2xl text-white font-bold px-10 py-3"
          to="/"
        >
          Volver a Proyectos
        </Link>
      </nav>
    </>
  );
}
