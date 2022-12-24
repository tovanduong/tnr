import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userManualControllerApi } from "../../../api";
import { FooterState, StateFooter } from "./footerState";
import { userManualResponse } from "./interface";

export const getAllUserManual = createAsyncThunk(
  "footer/getAllUserManual",
  async (): Promise<userManualResponse> => {
    const response = await userManualControllerApi.getAll();
    return response;
  }
);

const footerSlice = createSlice({
  name: "footer",
  initialState: FooterState,
  reducers: {},

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      getAllUserManual.fulfilled,
      (state: StateFooter, action: any) => {
        state.userManualAllRes = action.payload;
      }
    );
  },
});

const { reducer } = footerSlice;
// export const {} = actions;
export default reducer;
