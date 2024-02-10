import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../stores";

export const RegisterUser = () => {
  const registerUser = useAuthStore(state => state.registerUser);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if ([name, email, password].includes(""))
      return toast.error("Todos los campos son requeridos");

    try {
      await registerUser(user);
      toast.success("Registro de usuario correctamente");
      navigate("/auth");
    } catch (error) {
      toast.error(`${error}`)
    }
  };

  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-gray-600 uppercase">
        Registrate
      </h2>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Nombre Completo</label>
          <input
            type="text"
            placeholder="José Pablo Atienza"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            placeholder="correo@correo.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            placeholder="**************"
            minLength={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <p className="mt-2 text-gray-500">
          ¿Ya tienes una cuenta?{" "}
          <Link to={"/auth"} className="text-indigo-600 underline">
            Incia Sesión
          </Link>
        </p>
        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
        >
          Registrarme
        </button>
      </form>
    </>
  );
};
