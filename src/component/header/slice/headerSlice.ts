import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { menuBarControllerApi } from "../../../api/menuBarController/menuBarControllerApi";
import { HeaderState, StateHeader } from "./headerState";
import { ProjectRespones, ProjectTypeRespones } from "./interface";

export const getProjectType = createAsyncThunk(
  "header/getProjectType",
  async (): Promise<ProjectTypeRespones[]> => {
    const response = await menuBarControllerApi.getProjectType();
    return response;
  }
);

export const getProject = createAsyncThunk(
  "header/getProject",
  async (): Promise<ProjectRespones[]> => {
    const response = await menuBarControllerApi.getProject();
    return response;
  }
);

const HeaderSlice = createSlice({
  name: "header",
  initialState: HeaderState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      getProjectType.fulfilled,
      (state: StateHeader, action: any) => {
        state.projectTypeResponse = action.payload;
      }
    );
    builder.addCase(getProject.fulfilled, (state: StateHeader, action: any) => {
      state.projectResponse = action.payload;
    });
  },
});

const { reducer } = HeaderSlice;
// export const {} = actions;
export default reducer;
