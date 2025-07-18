import { AxiosService } from "../../services";
import { URI_ENDPOINTS } from "./URI.endpoints";

export const URIApi = {
  shorten: async (url: string) => {
    const response = await AxiosService.postFormData(URI_ENDPOINTS.shorten, { url });
    return response.data;
  },
};
