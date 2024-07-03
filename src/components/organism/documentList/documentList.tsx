import React from "react";
import DocumentCard from "../documentCard/documentCard";
import { Stack } from "@mui/material";
import axios from "axios";

type Document = {
  id: number;
  heading: string;
  description: string;
};

interface DocumentListProps {}

function DocumentList({}: DocumentListProps) {
  const [data, setData] = React.useState<Document[]>([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:32768/api/Documents")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Stack spacing={2}>
      {data.map((document) => (
        <DocumentCard
          key={document.id}
          header={document.heading}
          description={document.description}
        />
      ))}
    </Stack>
  );
}

export default DocumentList;
