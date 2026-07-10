import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <div>AppLayout</div>

        {/* Yo tengo hijos | Van en Outlet */}
      <Outlet />
    </>
  );
};

/**
 * Como este componente tiene HIJOS los hijos se inyectan en OUTLET
 * 
 * 
 * 
 * 
 * 
 */
