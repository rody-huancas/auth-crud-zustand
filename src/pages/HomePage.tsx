import { useEffect, useState } from "react";
import { useItemStore } from "../stores";
import { Item } from "../components/Item";
import { Loader } from "../components/Loader";

export const HomePage = () => {
  const getAllItems = useItemStore((state) => state.getAllItems);
  const items = useItemStore((state) => state.items);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchAllItems = () => {
      setLoad(true);
      try {
        getAllItems();
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    fetchAllItems();
  }, [getAllItems]);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
