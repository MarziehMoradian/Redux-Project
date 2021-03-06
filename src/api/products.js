import axios from "axios";

export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: `https://fakestoreapi.com/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};