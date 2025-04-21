import mongoose from "mongoose";

const movieSchema = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String },
    genre: { type: [String], required: true },
    releaseDate: { type: String, required: true },
    rating: { type: [String], default: [] },
    awards: { type: [String], default: [] },
    link: { type: String },
  })
);

export default movieSchema;
