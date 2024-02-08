import { FormEvent, useState } from "react";
import { useItemStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const FormProduct = () => {
  const cretateItem = useItemStore((state) => state.cretateItem);
  const navigate = useNavigate();

  const [items, setItems] = useState({
    name: "",
    color: "",
    gas: "electric",
    year: "",
    description: "",
    price: "",
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    if ((name === "year" || name === "price") && value !== '' && !/^\d+$/.test(value)) {
      return toast.error("El campo solo permite valores numéricos");
    }
    setItems((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, color, gas, year, description, price } = items;
    if ([name, color, gas, year, description, price].includes(""))
      return toast.error("Todos los campos son obligatorios");
    try {
      await cretateItem(items);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-2/3 lg:w-1/2 bg-white p-10 shadow-lg flex flex-col gap-2 ">
      <h2 className="text-gray-600 uppercase text-center text-xl font-bold">
        Registrar nuevo carro
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
        <input
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
          placeholder="Nombre"
          name="name"
          value={items.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
          placeholder="Color"
          name="color"
          value={items.color}
          onChange={handleChange}
        />
        <select
          name="gas"
          value={items.gas}
          onChange={handleChange}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
        >
          <option value="electric">Electrico</option>
          <option value="gasoline">Gasolina</option>
        </select>
        <input
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
          placeholder="Año"
          name="year"
          value={items.year}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
          placeholder="Descripción"
          name="description"
          value={items.description}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full px-3 py-2 border-2 border-gray-300 rounded-md text-gray-500 outline-none"
          placeholder="Precio"
          name="price"
          value={items.price}
          onChange={handleChange}
        />

        <button className="bg-indigo-600 py-3 rounded-md text-white uppercase font-medium">
          Registrar
        </button>
      </form>
    </div>
  );
};
