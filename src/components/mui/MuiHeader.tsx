"use client";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h4" textAlign={"center"} gutterBottom>
      {children}
    </Typography>
  );
}
