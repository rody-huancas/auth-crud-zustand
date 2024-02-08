import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header className="h-20 w-full bg-indigo-600 flex items-center justify-center text-white px-10 lg:px-0">
        <div className="w-[75rem] flex items-center justify-between">
          <Link to="/" className="font-extrabold uppercase text-3xl">Logo</Link>
      
          <nav className={`flex items-center gap-4 uppercase font-medium fixed md:static top-0 flex-col md:flex-row justify-center md:justify-normal bg-indigo-600 h-screen md:h-auto w-60 md:w-auto ${showMenu ? 'right-0' : '-right-full'} transition-all duration-300 ease-linear`}>
            <Link to="/profile">Perfil</Link>
            <Link to="/new-product">Nuevo Item</Link>
            <button className="uppercase bg-red-500 px-5 py-2.5 rounded-lg">Cerrar Sesión</button>
          </nav>
        </div>
      </header>

      <button onClick={handleShowMenu} className="md:hidden fixed left-5 bottom-5 bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
        <RiMenu2Line/>
      </button>
    </>
  );
};
