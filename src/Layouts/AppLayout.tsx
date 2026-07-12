import { Outlet } from "react-router-dom";
import Logo from "../componentes/Logo";

export const AppLayout = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Logo />
          </div>
        </div>
      </header>

      <section className="max-w-screen-2xl max-auto mt-10 p-5">
        {/* Yo tengo hijos | Van en Outlet */}
        <Outlet />
      </section>
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
