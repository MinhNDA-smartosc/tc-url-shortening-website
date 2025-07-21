import axios, { type AxiosInstance } from "axios";

export const axiosClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL || "https://terem-shorten.vercel.app/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const ApiClient = axiosClient();
