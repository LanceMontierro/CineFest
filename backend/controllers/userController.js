import userSchema from "../models/User.js";

export const saveUser = async (req, res) => {
  const { email, userName, userId } = req.body;

  if (!email || !userId) {
    return res.status(400).json({ message: "email and userId are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });
    if (user) {
      return res.status(200).json({ message: "Welcome back ", userName });
    } else {
      const newUser = new userSchema({
        email,
        userName,
        userId,
      });
      await newUser.save();
      return res.status(201).json({ message: "User saved successfully" });
    }
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "Internal server error" });
}
};

export const getAllUserDetails = async (req, res) => {
  const username = req.query.username;

  try {
    const user = await userSchema.findOne({ username });
    if (user) {
      res.status(200).json({
        favorites: user.favoriteMovies,
        recentlyViewed: user.recentlyViewed,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const addToRecentlyViewedMovies = async (req, res) => {
  const { userId, movie } = req.body;

  if (!userId || !movie) {
    return res.status(400).json({ message: "userId and movie are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingMovieIndex = user.recentlyViewed.findIndex(
      (m) => m.title === movie.title
    );

    if (existingMovieIndex !== -1) {
      user.recentlyViewed.splice(existingMovieIndex, 1);
    }

    user.recentlyViewed.unshift(movie);

    user.recentlyViewed = user.recentlyViewed.slice(0, 20);

    await user.save();

    return res.status(200).json({ message: "Movie added to recently viewed" });
  } catch (error) {
    console.error("Error fetching recently viewed movies:", error);
    return res.status(404).json({ message: "Internal server error" });
  }
};

export const addToFavoriteMovies = async (req, res) => {
  const {
    userId,
    title,
    description,
    poster,
    genre,
    releaseDate,
    rating,
    award,
    link,
    cast,
  } = req.body;

  if (!userId || !title) {
    return res.status(400).json({ message: "userId and title are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });

    const existingItemIndex = user.favoriteMovies.findIndex(
      (movie) => movie.title === title
    );

    if (existingItemIndex !== -1) {
      user.favoriteMovies.splice(existingItemIndex, 1);
      await user.save();
      return res.status(200).json({ message: "Movie removed from favorites" });
    } else {
      user.favoriteMovies.push({
        title,
        description,
        poster,
        genre,
        releaseDate,
        rating,
        award,
        link,
        cast,
      });
      await user.save();

      return res.status(200).json({ message: "Movie added to favorites" });
    }
  } catch (error) {
    console.error("Error fetching recently viewed movies:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAllFavoriteMovies = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res
      .status(400)
      .json({ message: "UserId is required to delete all favorite movies" });
  }

  try {
    const user = await userSchema.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favoriteMovies = [];
    await user.save();

    return res.status(200).json({ message: "All favorite movies deleted" });
  } catch (error) {
    console.error("Error delete all favorite movies:", error);
  }
};

export const deleteAllRecentlyViewedMovies = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({
      message: "UserId is required to delete all recently viewed movies",
    });
  }
  try {
    const user = await userSchema.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.recentlyViewed = [];
    await user.save();

    return res
      .status(200)
      .json({ message: "All recently viewed movies deleted" });
  } catch (error) {
    console.error("Error delete all recently viewed movies:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
