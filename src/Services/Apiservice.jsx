import axios from "axios";

const baseURL = "http://localhost:3333";

export const getProducts = () => {
    return axios.get(baseURL + "/List");
  };