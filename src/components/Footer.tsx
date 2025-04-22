"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        backgroundColor: "#f5f5f5",
        mt: 4,
        fontSize: "0.9rem",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; 2025 MonPlafond — Tous droits réservés.
      </Typography>
    </Box>
  );
}