import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SimpleDialogDemo from "@/components/SimpleDialog";
import ConfirmationDialog from "@/components/ConfirmationDialog";
import ConfirmationDialogOrig from "@/components/ConfirmationDialogOrig";
import { useState } from "react";
import { Box, Button, List, ListItem, ListItemText, Stack } from "@mui/material";
import ConfirmationDialogRaw from "@/components/ConfirmationDialogRaw";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClickListItem}>
        Abre Dialog
      </Button>
      <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} onClose={handleClose} />
    </Stack>
  );
}
