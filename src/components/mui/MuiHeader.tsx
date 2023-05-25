"use client";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React, { FC } from "react";

interface HeaderProps extends TypographyProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <Typography
      {...props}
      sx={{
        fontFamily:
          'Inter,sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      }}
    >
      {children}
    </Typography>
  );
};
export default Header;
