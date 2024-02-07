import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <main>
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
          >
            <div className="w-full h-100">
              <Outlet/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
