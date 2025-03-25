import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
const postFunction = async (productData) => {
  const { data } = await axios.post(
    "https://fakestoreapi.com/products",
    productData
  );
  return data;
};
function Contact() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFunction });
  const mutation = useMutation({
    mutationFn: postFunction,
    onSuccess: (res) => {
      console.log("res", res);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    const productData = {
      title: "dnckdscs",
      price: "15",
      description: "jkafvf vaflvjfv oacfvlsv aj ",
      image: "fvdblfdhvb ",
      category: "sdahvjs",
    };
    mutation.mutate(productData);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <button onClick={handleSubmit}>Click</button>
        <div className="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-3 p-10 gap-10">
          {data?.map((item) => (
            <div key={item.id}>
              <img src={item.image} className="h-40 w-40 "></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
