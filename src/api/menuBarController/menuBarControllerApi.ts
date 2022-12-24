import { ProjectTypeRespones } from "../../component/header/slice/interface";
import axiosClient from "../axiosClient";
import { GET_PROJECT, GET_PROJECT_TYPE } from "./constant";

interface MenuBarController {
  getProjectType: () => Promise<ProjectTypeRespones[]>;
  getProject: () => Promise<ProjectTypeRespones[]>;
}
export const menuBarControllerApi: MenuBarController = {
  getProjectType: async () => {
    try {
      const response = await axiosClient.get(GET_PROJECT_TYPE);
      return response.data.responseData;
    } catch (error) {
      console.error(error);
    }
  },
  getProject: async () => {
    try {
      const response = await axiosClient.get(GET_PROJECT);
      return response.data.responseData;
    } catch (error) {
      console.error(error);
    }
  },
};
// userManualControllerApi.getById()
