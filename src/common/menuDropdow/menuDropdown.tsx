import { useState } from "react";
import { ButtonMenu, MenuGroup, MenuItemGroup } from "./menuDropdowStyle";

interface MenuProps {
  option: any[];
  title: string;
}
const MenuDropdown = ({ option, title }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonMenu
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
      </ButtonMenu>
      <MenuGroup
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {option.map((el: string) => (
          <MenuItemGroup onClick={handleClose}>{el}</MenuItemGroup>
        ))}
      </MenuGroup>
    </div>
  );
};

export default MenuDropdown;
