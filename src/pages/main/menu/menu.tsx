import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useState } from "react";

const Menu = ()=>{
    const [open , setOpen] = useState(false);
    const [menuList , ] = useState([]);
    const handleClick = ()=>{
        setOpen((prev)=>!prev)
    }
    
    return (<List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            서브헤더
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <AccessAlarmIcon/>
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <AccessAlarmIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? < ></> : < ></>}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>)
}
export default Menu;