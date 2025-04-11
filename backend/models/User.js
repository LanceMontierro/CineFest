import mongoose from "mongoose";

const userSchema = mongoose.model(
  "Users",
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    userId: { type: String, required: true, unique: true },

    favoriteMovies: [
      {
        movieId: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        poster: { type: String, required: true },
        releaseDate: { type: String, required: true },
      },
    ],
  })
);

export default userSchema;
