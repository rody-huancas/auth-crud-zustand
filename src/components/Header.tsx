import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <header className="h-20 w-full bg-indigo-600 flex items-center justify-center text-white">
      <div className="w-[75rem] flex items-center justify-between">
        <Link to="/" className="font-extrabold uppercase text-3xl">Logo</Link>

        <nav className="flex items-center gap-4 uppercase font-medium">
            <Link to="/profile">Perfil</Link>
            <Link to="/new-product">Nuevo Producto</Link>
            <button className="uppercase bg-red-500 px-5 py-2.5 rounded-lg">Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  );
};
