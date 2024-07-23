import React from "react";
import { useEffect, useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Nav from "../Comp/NavBar/app";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";

function NavbarDemo() {
  const [rotation, setRotation] = useState(false);

  const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="flex z-[1000] justify-end">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <WidgetsIcon
              className="icon"
              fontSize="large"
              sx={{ color: "white" }}
            />{" "}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{backgroundColor:'black'}}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingLeft: "20px",
              }}
            >
              <CloseIcon
                fontSize="large"
                onClick={toggleDrawer(anchor, false)}
                sx={{
                  "&:hover": { animation: `${rotate} 2s linear infinite` },
                }}
              />
            </Button>
            <Nav />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavbarDemo;
