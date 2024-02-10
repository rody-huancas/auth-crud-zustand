import { Link } from "react-router-dom";
import { formatDate } from "../helpers/helpers";
import { ItemResponse } from "../interfaces";

export const Item= ({item}: {item: ItemResponse}) => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-xl w-72">
      <div className="flex flex-col items-center gap-2">
        <h5 className="uppercase font-medium">{item.name}</h5>
        <p className="text-gray-700 font-medium px-3 py-1.5 rounded-xl text-center">
          {item.description}
        </p>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 font-bold px-3 py-1.5 rounded-xl text-center">
            Color: <span className="font-normal capitalize text-gray-900">{item.color}</span>
          </p>
          <p className="text-gray-700 font-bold px-3 py-1.5 rounded-xl text-center">
            Tipo: <span className="font-normal capitalize text-gray-900">{item.gas}</span>
          </p>
          <p className="text-gray-700 font-bold px-3 py-1.5 rounded-xl text-center">
            Precio: <span className="font-normal capitalize text-gray-900">{item.price}</span>
          </p>
          <p className="text-gray-700 font-bold px-3 py-1.5 rounded-xl text-center">
            Año: <span className="font-normal capitalize text-gray-900">{item.year}</span>
          </p>
        </div>
        <p className="text-gray-700 font-bold px-3 py-1.5 rounded-xl text-center">
          Fecha: {formatDate(item.createdAt ? item.createdAt : "")}
        </p>
      </div>
      <div className="w-full flex items-center justify-between gap-2 mt-3">
        <Link to={""} className="bg-indigo-600 text-white rounded-xl py-2 px-4">Editar</Link>
        <button className="bg-red-600 text-white rounded-xl py-2 px-4">Eliminar</button>
      </div>
    </div>
  );
};
