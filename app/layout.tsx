import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { Box } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plafonds tendus",
  description: "Artisan spécialiste du plafond tendu depuis 2009",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
    <body className={inter.className}>
    <Navbar />
    <Box component="main" sx={{ minHeight: "calc(100vh - 160px)", paddingTop: "80px" }}>
      {children}
    </Box>
    <Footer />
    </body>
    </html>
  );
}

