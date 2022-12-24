// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userManualResponse } from "../../component/footer/slice/interface";
import { RootState } from "../../store/store";

interface State {
  userManual: {
    userManualAll?: userManualResponse;
  };
}
const useUserManualPageHook = () => {
  const [state, setState] = useState<State>();
  const userManual = {
    userManualAll: useSelector(
      (state: RootState) => state.userManualAll.userManualAllRes
    ),
  };

  useEffect(() => {
    setState({ userManual });
  }, [userManual.userManualAll]);
  return { state };
};

export default useUserManualPageHook;
