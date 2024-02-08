import { formatDate } from "../helpers/helpers";
import { ItemResponse } from "../interfaces";

export const Item= ({item}: {item: ItemResponse}) => {
  return (
    <div className="bg-white shadow-lg p-10 rounded-xl flex flex-col items-center gap-2 w-72">
      <h5 className="uppercase font-medium">{item.name}</h5>
      <p>{item.description}</p>
      <div className="grid grid-cols-2 place-items-center gap-x-5 gap-y-3">
        <p className="bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-xl">
          {item.color}
        </p>
        <p className="bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-xl">
          {item.gas}
        </p>
        <p className="bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-xl">
          {item.price}
        </p>
        <p className="bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-xl">
          {item.year}
        </p>
      </div>
      <p className="bg-indigo-500 text-white font-medium px-3 py-1.5 rounded-xl">
        {formatDate(item.createdAt ? item.createdAt : "")}
      </p>
    </div>
  );
};
