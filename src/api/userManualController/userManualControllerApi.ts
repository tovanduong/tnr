import axiosClient from "../axiosClient";
import { GET_ALL, GET_BY_ID } from "./constant";
import { userManual } from "./interface";

export const userManualControllerApi = {
  getAll: async () => {
    try {
      const response = await axiosClient.get(GET_ALL);
      return response.data.responseData;
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (payload: userManual) => {
    try {
      const response = await axiosClient.get(GET_BY_ID + payload.id);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
// userManualControllerApi.getById()
