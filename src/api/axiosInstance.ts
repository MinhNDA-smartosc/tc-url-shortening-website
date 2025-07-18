import axios, { type AxiosInstance } from "axios";

export const axiosClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL || "https://cleanuri.com",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const ApiClient = axiosClient();
