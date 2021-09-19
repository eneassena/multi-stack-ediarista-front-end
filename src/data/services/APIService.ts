import axios from "axios";

const url = process.env.NEXT_PUBLIC_API;

export const APIService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
