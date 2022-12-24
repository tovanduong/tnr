import { Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

export const ButtonMenu = styled.button`
  padding: 5px 10px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const MenuGroup = styled(Menu)``;
export const MenuItemGroup = styled(MenuItem)`
  min-width: 180px !important;
  padding: 10px 12px !important;
  font-size: 14px !important;
`;
