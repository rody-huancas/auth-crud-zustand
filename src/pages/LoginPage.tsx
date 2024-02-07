export const LoginPage = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
        Inicia Sesión
      </h1>
      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            placeholder="correo@correo.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoComplete=""
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
          />
        </div>
        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
          Log In
        </button>
      </form>
    </>
  );
};
