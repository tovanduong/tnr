import { useCallback } from "react";
import { getAllUserManual } from "../../component/footer/slice/footerSlice";
import { useAppDispatch } from "../../store/store";
import { StateHook } from "./interface";

export const useUserManualApiHook = (): StateHook => {
  const dispatch = useAppDispatch();
  const pageInit = useCallback(() => {
    dispatch(getAllUserManual());
  }, []);

  return {
    pageInit,
  };
};
