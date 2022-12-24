// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ProjectRespones,
  ProjectTypeRespones,
} from "../../component/header/slice/interface";
import { RootState } from "../../store/store";

interface State {
  menuBarController: {
    projectTypeResponse?: ProjectTypeRespones[];
    projectResponse?: ProjectRespones[];
  };
}
const useMenuBarControllerPageHook = () => {
  const [state, setState] = useState<State>();
  const menuBarController = {
    projectTypeResponse: useSelector(
      (state: RootState) => state.menuBar.projectTypeResponse
    ),
    projectResponse: useSelector(
      (state: RootState) => state.menuBar.projectResponse
    ),
  };

  useEffect(() => {
    setState({ menuBarController });
  }, [
    menuBarController.projectResponse,
    menuBarController.projectTypeResponse,
  ]);

  return { state };
};

export default useMenuBarControllerPageHook;
