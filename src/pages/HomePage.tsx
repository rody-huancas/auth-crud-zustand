import { useEffect } from "react";
import { useItemStore } from "../stores";

export const HomePage = () => {

  const getAllItems = useItemStore(state => state.getAllItems);
  const items = useItemStore(state => state.items);

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  return (
    <>
      {
        items.map((item) =>(
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.description}</p>
            <p>{item.color}</p>
            <p>{item.gas}</p>
            <p>{item.price}</p>
            <p>{item.year}</p>
            <p>{item.createdAt}</p>
          </div>
        ))
      }
    </>
  );
};
