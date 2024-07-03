"use client";

import DocumentList from "@/components/organism/documentList/documentList";
import { Stack, Typography } from "@mui/material";
import React from "react";

interface DocumentPageProps {
  // Define the props for your component here
}

function DocumentPage(props: DocumentPageProps) {
  // Implement your component logic here

  return (
    <Stack spacing={2}>
      <Typography variant="h1">Main Page</Typography>
      <Typography variant="body1">
        This is a sample app, built to demonstrate the use of various
        technologies.
      </Typography>
      <DocumentList />
    </Stack>
  );
}

export default DocumentPage;
