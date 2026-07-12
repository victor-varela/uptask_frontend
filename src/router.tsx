import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./Layouts/AppLayout";
import DashboardView from "./Views/DashboardView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Esta ruta tiene AppLayout | Esta ruta tiene el rol de agrupar a pesar que es Route-singular */}
        <Route element={<AppLayout />}>
          {/* Cuando visite '/' renderiza DashboardView que es index */}
          <Route path="/" element={<DashboardView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * Armamos un router. El router tiene browserRouter, Routes (plural par agrupar rutasssssss) y Route(la ruta en si). Por ser una app grande vamos a tener Layouts diferentes y nos conviene ya por cada ruta renderizar los layouts, por eso los inyectamos con element={<Layout/>} para que tengan un mismo diseño. Fijate que el layout esta en Route - singular- y dentro de esa ruta van y pueden haber otra ruta - singular. Si un componente tiene hijos debe llevar OUTLET para que AHI se inyecten.
 *
 * Agregamos los layouts y las views donde corresponden.
 *Este es el ejemplo que esta en la documentacion es bien claro:


 <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>


 * Este Router lo llamamos en main.tsx | ahi empieza el juego.
 * 
 *
 *
 *
 */
