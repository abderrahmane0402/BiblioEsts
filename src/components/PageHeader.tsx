"use client";
import Header from "@/ui/Header";
import { getTitle } from "@/utils/dashboard";
import { ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";

const PageHeader = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const title = getTitle();
  const [user, setUser] = useState<{ NOM: string; PRENOM: string }>();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    fetch("/api/user", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <header className="container flex justify-between items-center px-3 py-1">
      <Header>{title}</Header>
      <Tooltip title="Account settings">
        <Chip
          onClick={handleClick}
          variant="outlined"
          color="primary"
          avatar={<Avatar>{user?.NOM.at(0)?.toUpperCase()}</Avatar>}
          label={(user?.NOM || "") + " " + (user?.PRENOM || "")}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            sessionStorage.clear();
            router.push("/");
          }}
        >
          <ListItemIcon>
            <BiLogOut fontSize={"small"} />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </header>
  );
};
export default PageHeader;
