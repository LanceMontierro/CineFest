import mongoose from "mongoose";

const movieSchema = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: String, required: true },
    rating: { type: String, required: true },
    awards: { type: [String], required: true },
    link: { type: String, required: true },
  })
);

export default movieSchema;
