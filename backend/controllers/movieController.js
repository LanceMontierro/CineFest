import movieSchema from "../models/Movies.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await movieSchema.find();
    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }
    res.status(200).json({ dishes });
    return res.status(200).json(movies);
  } catch (error) {}
};

export const createMovie = async (req, res) => {
  const {
    title,
    description,
    poster,
    genre,
    releaseDate,
    rating,
    awards,
    link,
  } = req.body;

  if (
    !title ||
    !description ||
    !poster ||
    !genre ||
    !releaseDate ||
    !rating ||
    !awards ||
    !link
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMovie = new movieSchema({
      title,
      description,
      poster,
      genre,
      releaseDate,
      rating,
      awards,
      link,
    });
    await newMovie.save();
    return res.status(200).json({ message: "Movie created successfully" });
  } catch (error) {
    console.error("Error creating movie:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
