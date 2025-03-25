import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
function Contact() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFunction });
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3 p-10 gap-10">
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.image} className="h-40 w-40 "></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
