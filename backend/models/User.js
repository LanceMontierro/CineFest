import mongoose from "mongoose";

const userSchema = mongoose.model(
  "Users",
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    userId: { type: String, required: true, unique: true },

    favoriteMovies: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        poster: { type: String },
        genre: { type: [String], required: true },
        releaseDate: { type: String, required: true },
        rating: { type: [String], default: [] },
        awards: { type: [String], default: [] },
        link: { type: String },
      },
    ],
    recentlyViewed: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        poster: { type: String },
        genre: { type: [String], required: true },
        releaseDate: { type: String, required: true },
        rating: { type: [String], default: [] },
        awards: { type: [String], default: [] },
        link: { type: String },
        viewedAt: { type: Date, default: Date.now },
      },
    ],
  })
);

export default userSchema;
