import movieSchema from "../models/Movies.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await movieSchema.find();
    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }

    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
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
    cast,
  } = req.body;

  if (!title || !description || !genre || !releaseDate) {
    return res.status(400).json({ message: "this fields are required" });
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
      cast,
    });
    await newMovie.save();
    return res.status(200).json(newMovie);
  } catch (error) {
    console.error("Error creating movie:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Movie ID is required" });
  }

  try {
    const deletedMovie = await movieSchema.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
