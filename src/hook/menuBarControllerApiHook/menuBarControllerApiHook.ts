import { useCallback } from "react";
import {
  getProject,
  getProjectType,
} from "../../component/header/slice/headerSlice";
import { useAppDispatch } from "../../store/store";
import { StateHook } from "./interface";

export const MenuBarControllerApiHook = (): StateHook => {
  const dispatch = useAppDispatch();
  const pageInit = useCallback(() => {
    dispatch(getProjectType());
    dispatch(getProject());
  }, []);

  return {
    pageInit,
  };
};
