import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback, useState } from "react";
import { DEFAULT_MENU } from "./constants/menu.constants";
import { ICON } from "../icon/icon";
import { IMenu } from "./types/menu.types";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuList] = useState<IMenu[]>(DEFAULT_MENU);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const getMenu = useCallback(() => {
    return menuList.map((menu, menuIndex) => {
      const Icon = menu?.icon ? ICON[menu.icon] : null;
      return (
        <ListItemButton
          key={menuIndex}
          sx={{
            "& svg": {
              color: "rgba(255,255,255,0.8)",
              transition: "0.2s",
              transform: "translateX(0) rotate(0)",
            },
            "&:hover, &:focus": {
              bgcolor: "unset",
              "& svg:first-of-type": {
                transform: "translateX(-4px) rotate(-20deg)",
              },
              "& svg:last-of-type": {
                right: 0,
                opacity: 1,
              },
            },
            "&:after": {
              content: '""',
              position: "absolute",
              height: "80%",
              display: "block",
              left: 0,
              width: "1px",
              bgcolor: "divider",
            },
          }}
        >
          {Icon && (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={menu.name} />
        </ListItemButton>
      );
    });
  }, [menuList]);

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            기본 메뉴
          </ListSubheader>
        }
      >
        {getMenu()}
      </List>
    </>
  );
};
export default Menu;
