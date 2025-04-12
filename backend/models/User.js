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
        poster: { type: String, required: true },
        genre: { type: String, required: true },
        releaseDate: { type: String, required: true },
        rating: { type: String, required: true },
        awards: { type: [String], required: true },
        link: { type: String, required: true },
      },
    ],
  })
);

export default userSchema;
