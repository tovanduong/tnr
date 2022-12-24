import { useEffect } from "react";
import { userManualControllerApi } from "../../api";
import Basket from "../../assets/images/basket-1.png";
import Heart from "../../assets/images/heart-1.png";
import Logo from "../../assets/images/logo-1.png";
import User from "../../assets/images/user-circle-1.png";
import MenuDropdown from "../../common/menuDropdow/menuDropdown";
import { MenuBarControllerApiHook } from "../../hook/menuBarControllerApiHook/menuBarControllerApiHook";
import useMenuBarControllerPageHook from "../../hook/menuBarControllerApiHook/menuBarControllerPageHook";
import {
  AboutItem,
  AboutList,
  Button,
  ButtonBox,
  GroupLeftSize,
  GroupRightSize,
  IconBox,
  ItemMain,
  ListMain,
  LogoContain,
  MainHeader,
  SectionGroup,
  SubHeader,
  UserGroup,
} from "./headerStyle";
import { ProjectTypeRespones } from "./slice/interface";

const Header = () => {
  const { pageInit } = MenuBarControllerApiHook();
  const { state } = useMenuBarControllerPageHook();
  useEffect(() => {
    pageInit();
  }, []);
  console.log(state);

  const renderProjectType = (data: any[]) => {
    if (data?.length) {
      let listProjectType = data.map((item: ProjectTypeRespones) => item.name);
      return listProjectType;
    } else {
      return [];
    }
  };
  return (
    <SectionGroup>
      <SubHeader>
        <AboutList>
          <AboutItem>Tài khoản</AboutItem>
          <AboutItem>Quy trình mua BĐS Online</AboutItem>
          <AboutItem>Về TNR</AboutItem>
          <AboutItem>Hỗ trợ</AboutItem>
        </AboutList>
      </SubHeader>
      <MainHeader>
        <GroupLeftSize>
          <LogoContain>
            <img src={Logo} alt="logo" />
          </LogoContain>
          <ListMain>
            <MenuDropdown
              option={renderProjectType(
                state?.menuBarController.projectTypeResponse || []
              )}
              title={"Loại bất động sản"}
            />
            <MenuDropdown
              option={renderProjectType(
                state?.menuBarController.projectResponse || []
              )}
              title={"Dự án"}
            />
            <ItemMain>Khuyến mãi</ItemMain>
            <ItemMain>Tin tức</ItemMain>
            <ItemMain>Gửi yêu cầu</ItemMain>
            {/* {renderProjectType(state?.menuBarController.projectTypeResponse)} */}
          </ListMain>
        </GroupLeftSize>
        <GroupRightSize>
          <ButtonBox>
            <Button href="#">Bảng hàng trực tuyến</Button>
          </ButtonBox>
          <UserGroup>
            <IconBox>
              <img src={User} alt="User" />
            </IconBox>
            <IconBox>
              <img src={Heart} alt="Heart" />
            </IconBox>
            <IconBox>
              <img src={Basket} alt="Basket" />
            </IconBox>
          </UserGroup>
        </GroupRightSize>
      </MainHeader>
    </SectionGroup>
  );
};

export default Header;
