import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

type DocumentCardProps = {
  description: string;
  header: string;
};

export default function DocumentCard({
  description,
  header,
}: DocumentCardProps) {
  return (
    <Card>
      <CardHeader title={header} />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
