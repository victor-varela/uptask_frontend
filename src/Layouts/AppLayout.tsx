import { Outlet } from "react-router-dom";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";

export const AppLayout = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
          <NavMenu/>
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        {/* Yo tengo hijos | Van en Outlet */}
        <Outlet />
      </section>
      <footer className="py-5">
        <p className="text-center">Todos los derechos reservados {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

/**
 * Como este componente tiene HIJOS los hijos se inyectan en OUTLET
 * Estilos: tienes la referencias_ui Es el layout general
 *
 *
 *
 *
 *
 *
 */
