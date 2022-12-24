import { useEffect } from "react";
import { useUserManualApiHook } from "../../../hook/userManualApiHook/userManualApiHook";
import useUserManualPageHook from "../../../hook/userManualApiHook/userManualPageHook";

const Footer = () => {
  const { pageInit } = useUserManualApiHook();
  const { state } = useUserManualPageHook();
  useEffect(() => {
    pageInit();
  }, []);

  return <div>Footer</div>;
};

export default Footer;
