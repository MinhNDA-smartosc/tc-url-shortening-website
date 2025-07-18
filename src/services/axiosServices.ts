/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApiClient } from "../api/axiosInstance";
import type { AxiosRequestConfig } from "axios";
import type { IAppResponse } from "../interfaces";

export const AxiosService = {
  post: async <TResponse = any, TRequest = any>(url: string, body?: TRequest, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.post(url, body, config);
  },

  postFormData: async <TResponse = any, TRequest = any>(url: string, body?: TRequest, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.post(url, body, {
      ...config,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  },

  put: async <TResponse = any, TRequest = any>(url: string, body?: TRequest, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.put(url, body, config);
  },
  patch: async <TResponse, TRequest = any>(url: string, body?: TRequest, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.patch(url, body, config);
  },
  delete: async <TResponse = any, TRequest = any>(url: string, body?: TRequest, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.delete(url, {
      ...config,
      data: body,
    });
  },
  get: async <TResponse = any, TRequest = any>(url: string, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.get(url, config);
  },
  request: async <TResponse = any, TRequest = any>(url: string, config?: AxiosRequestConfig<TRequest>): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.request({
      url,
      ...config,
    });
  },
};
