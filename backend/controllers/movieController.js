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
