import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// Component imports
import NavBar from "../components/NavBar";
import AdaptationReviewCard from "../components/AdaptationReviewCard";
import { useState } from "react";
import { getReviews } from "../utils/api/reviews";
import FormAdaptationReview from "../components/FormAdaptationReview";

export default function Home() {
  const [reviews, setReviews] = useState([]);

  const loadAllReviews = () => {
    // gettting it from the backend
    getReviews().then((reviewsData) => {
      // setting it on the front end
      setReviews(reviewsData);
    });
  };

  return (
    <div>
      <Head>
        <title>Adaptation Reviews.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title={"Adaptation Reviews"} />
      <main>
        <Container maxWidth="md">
          {/* this is where the form was  */}
          <FormAdaptationReview reviews={reviews} setReviews={setReviews} />
          <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
            <Button variant="contained" onClick={loadAllReviews}>
              Load All Current Reviews
            </Button>
          </Box>
          {reviews.map((adaptation, index) => {
            return (
              <AdaptationReviewCard
                key={adaptation.id}
                id={adaptation.id}
                title={adaptation.title}
                comment={adaptation.comment}
                rating={adaptation.rating}
                reviews={reviews}
                setReviews={setReviews}
              />
            );
          })}
        </Container>
      </main>
    </div>
  );
}
