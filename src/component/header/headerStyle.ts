import styled from "styled-components";

export const SectionGroup = styled.div`
  width: 100%;
  height: auto;

  background: #ffffff;
  box-shadow: 0px -4px 20px 1px rgba(0, 0, 0, 0.15);
`;
export const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1b3459;
  padding: 9px 0;
`;

export const AboutList = styled.ul`
  width: 100%;
  max-width: 509px;

  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;

export const AboutItem = styled.li`
  font-weight: 400;
  font-size: 13px;
  color: #dbdee3;

  transition: all 0.35s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffff00;
  }
`;

export const MainHeader = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 28px 0;
  @media screen and (max-width: 1600px) {
    max-width: 1280px;
  }
`;

export const GroupLeftSize = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const GroupRightSize = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
`;
export const LogoContain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    object-fit: cover;
  }
`;

export const ListMain = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 38px;
  gap: 35px;
  list-style-type: none;
`;

export const ItemMain = styled.li`
  cursor: pointer;
`;

export const BtnContain = styled.div``;

export const UserGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const IconBox = styled.div`
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  width: 145px;
  padding: 8px 25px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: #ea242a;
    a {
      color: #ffffff;
    }
  }
`;

export const Button = styled.a`
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  color: #000000;
`;
