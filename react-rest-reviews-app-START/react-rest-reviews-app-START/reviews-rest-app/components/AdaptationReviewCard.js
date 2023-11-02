import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { deleteReview } from "../utils/api/reviews";

export default function AdaptationReviewCard(props) {
  const removeReview = () => {
    console.log(`removing review ${props.id}`);
    // remove it from the back end
    deleteReview(props.id).then((data) => {
      // remove it from the front end
      let newReviews = props.reviews.filter((review) => {
        return review.id !== props.id;
      });
      props.setReviews(newReviews);
    });
  };
  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            {props.rating}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={removeReview}>
            <DeleteIcon />
          </IconButton>
        }
        title={
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
