import axios, { type AxiosInstance } from "axios";

export const axiosClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL || process.env.NEXT_PUBLIC_API_URL || "https://cleanuri.com",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const ApiClient = axiosClient();
