import userSchema from "../models/User.js";

export const saveUser = async (req, res) => {
  const { email, userName, userId } = req.body;

  if (!email || !userId) {
    return res.status(400).json({ message: "email and userId are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });
    if (user) {
      return res.status(200).json({ message: "User already exists" });
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
        username: user.userName,
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
  } = req.body;
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
  } = req.body;

  if (!userId || !title) {
    return res.status(400).json({ message: "userId and title are required" });
  }

  try {
    const user = await userSchema.findOne({ userId });

    const isAlreadyFavorite = user.favoriteMovies.some(
      (movie) => movie.title === title
    );

    if (isAlreadyFavorite) {
      return res.status(400).json({ message: "Movie already in favorites" });
    }

    user.favoriteMovies.push({
      title,
      description,
      poster,
      genre,
      releaseDate,
      rating,
      award,
      link,
    });
    await user.save();

    return res.status(200).json({ message: "Movie added to favorites" });
  } catch (error) {
    console.error("Error fetching recently viewed movies:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
