import DocumentCard from "@/components/document/documentCard";
import { Stack, Typography } from "@mui/material";

//TODO = move to API
const documents: Document[] = [
  {
    header: "Document 1",
    description: "This is the first document",
  },
  {
    header: "Document 2",
    description: "This is the second document",
  },
  {
    header: "Document 3",
    description: "This is the third document",
  },
];

type Document = {
  header: string;
  description: string;
};

export default function Home() {
  return (
    <main>
      <Stack spacing={2}>
        <Typography variant="h1">Main Page</Typography>
        <Typography variant="body1">
          This is a sample app, built to demonstrate the use of various
          technologies.
        </Typography>
        {documents.map((document, index) => (
          <DocumentCard
            key={index}
            header={document.header}
            description={document.description}
          />
        ))}
      </Stack>
    </main>
  );
}
