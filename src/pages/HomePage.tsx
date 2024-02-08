import { useEffect } from "react";
import { useItemStore } from "../stores";
import { Item } from "../components/Item";

export const HomePage = () => {
  const getAllItems = useItemStore((state) => state.getAllItems);
  const items = useItemStore((state) => state.items);

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {items.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </div>
  );
};
