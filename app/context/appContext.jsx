import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useUser, useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
const appContext = createContext();
import Constants from "expo-constants";

export const useAppContext = () => {
  return useContext(appContext);
};

const ContextApi = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const [movies, setMovies] = useState([]);
  const [favortiteMovies, setFavoriteMovies] = useState([]);
  const [recentOpenMovies, setRecentOpenMovies] = useState([]);
  const [userAcc, setUserAcc] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeFilter, setActiveFilter] = useState({
    genre: [],
    year: null,
    awards: [],
    rating: null,
  });
  const { signOut } = useClerk();

  const API_URL = Constants.expoConfig.extra.EXPO_PUBLIC_API_URL;

  function applyFilters(movies) {
    return movies.filter((movie) => {
      const {
        genre = [],
        awards = [],
        rating = null,
        year = null,
      } = activeFilter;

      const matchesGenre =
        genre.length === 0 ||
        genre.some((selected) => movie.genre.includes(selected));

      const matchesAwards =
        awards.length === 0 ||
        awards.some((selected) => movie.awards.includes(selected));

      const matchesRating =
        !rating ||
        (Array.isArray(movie.rating)
          ? movie.rating
              .map(String)
              .includes(String(rating).replace("Rating ", ""))
          : String(movie.rating) === String(rating).replace("Rating ", ""));

      const matchesYear =
        !year ||
        (movie.releaseDate &&
          (movie.releaseDate.length === 4
            ? Number(movie.releaseDate) === Number(year)
            : new Date(movie.releaseDate).getFullYear() === Number(year)));

      return matchesGenre && matchesAwards && matchesRating && matchesYear;
    });
  }

  const latestMovies = movies
    .filter((movie) => !!movie.releaseDate)
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    )
    .slice(0, 10);

  const topRatedMovies = movies
    .filter(
      (movie) =>
        Array.isArray(movie.rating) &&
        movie.rating.length > 0 &&
        movie.rating[0] !== "N/A" &&
        !isNaN(parseFloat(movie.rating[0]))
    )
    .sort((a, b) => parseFloat(b.rating[0]) - parseFloat(a.rating[0]))
    .slice(0, 6);

  useEffect(() => {
    const filterMovies = movies.filter((movie) => {
      const matchFilter = activeFilter;
    });
  });

  const fetchMovieDetails = async () => {
    try {
      const res = await axios.get(`${API_URL}/movies/get-movie`);
      const data = res.data;

      return Array.isArray(data)
        ? data.map(
            ({
              _id,
              title,
              poster,
              description,
              awards,
              cast,
              links,
              releaseDate,
              genre,
              rating,
            }) => ({
              _id,
              title,
              poster,
              cast,
              releaseDate,
              rating,
              genre,
              description,
              awards,
              links,
            })
          )
        : [];
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      return [];
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();

      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  useEffect(() => {
    if (isSignedIn && user) {
      console.log("User object:", user);
      const email = user?.primaryEmailAddress?.emailAddress;
      console.log("User Email:", email);

      setUserAcc(user);
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies/get-movie`);
        setMovies(res.data || []);

        if (!userAcc) return;

        const userRes = await axios.get(
          `${API_URL}/users/get-user-details?username=${userAcc}`
        );
        setFavoriteMovies(userRes.data.favorites || []);
        setRecentOpenMovies(userRes.data.recentlyViewed || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (userAcc) {
      fetchUserData();
    }
  }, [userAcc]);

  const saveUser = async (user) => {
    if (!userAcc) return;

    try {
      const res = await axios.post(`${API_URL}/users/saveUser`, {
        email: user.emailAddresses[0].emailAddress,
        userName: user?.fullName,
        userId: user?.id,
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const createMovie = async ({
    title,
    description,
    poster,
    genre,
    releaseDate,
    rating,
    awards,
    link,
    cast,
  }) => {
    if (!userAcc) {
      console.log("User account not found. Cannot create movies.");
      return;
    }
    try {
      const genreArr = Array.isArray(genre)
        ? genre
        : genre
        ? genre.split(",").map((g) => g.trim())
        : [];
      const ratingArr = Array.isArray(rating)
        ? rating
        : rating
        ? rating.split(",").map((r) => r.trim())
        : [];
      const awardsArr = Array.isArray(awards)
        ? awards
        : awards
        ? awards.split(",").map((a) => a.trim())
        : [];
      const castArr = Array.isArray(cast)
        ? cast
        : cast
        ? cast.split(",").map((c) => c.trim())
        : [];

      const res = await axios.post(`${API_URL}/movies/create-movie`, {
        title,
        description,
        poster,
        genre: genreArr,
        releaseDate,
        rating: ratingArr,
        awards: awardsArr,
        link,
        cast: castArr,
      });

      if (res.status === 200) {
        const updatedMovies = await fetchMovieDetails();
        setMovies(updatedMovies);
      }
      console.log(res.data);
    } catch (error) {
      console.error("Error creating movies:", error);
    }
  };

  const deleteMovie = async (id) => {
    if (!userAcc) {
      console.log("User account not found. Cannot delete movies.");
      return;
    }

    try {
      const res = await axios.delete(`${API_URL}/movies/delete-movie/${id}`);
      const updatedMovies = await fetchMovieDetails();
      setMovies(updatedMovies);
      console.log(res.data);
    } catch (error) {
      console.error("Error deleting movies:", error);
    }
  };

  const addToFavoriteMovies = async (movie) => {
    if (!userAcc) {
      console.log("User account not found. Cannot add to favorite movies.");
      return;
    }
    try {
      const isAlreadyFavorite = favortiteMovies.some(
        (m) => m.title === movie.title
      );

      const res = await axios.post(`${API_URL}/users/add-to-favorite-movies`, {
        userId: userAcc.id,
        title: movie.title,
        description: movie.description,
        poster: movie.poster,
        genre: movie.genre,
        releaseDate: movie.releaseDate,
        rating: movie.rating,
        awards: movie.awards,
        link: movie.link,
        cast: movie.cast,
      });

      setFavoriteMovies((prev) =>
        isAlreadyFavorite
          ? prev.filter((prevMovie) => prevMovie.title !== movie.title)
          : [...prev, movie]
      );
    } catch (error) {
      console.error("Error adding to favorite movies:", error);
    }
  };

  const addToRecentlyViewedMovies = async (movie) => {
    if (!userAcc) {
      console.log(" Cannot add to recently viewed movies.");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/users/add-to-recently-viewed-movies`,
        {
          userId: userAcc.id,
          movie: {
            title: movie.title,
            description: movie.description,
            poster: movie.poster,
            genre: movie.genre,
            releaseDate: movie.releaseDate,
            rating: movie.rating,
            awards: movie.awards,
            link: movie.link,
            cast: movie.cast,
          },
        }
      );
      setRecentOpenMovies((prev) => {
        const existingMovieIndex = prev.findIndex(
          (m) => m.title === movie.title
        );

        if (existingMovieIndex !== -1) {
          const updatedMovies = [...prev];
          updatedMovies.splice(existingMovieIndex, 1);
          return [movie, ...updatedMovies];
        }
        return [movie, ...prev];
      });
    } catch (error) {
      console.error("Error adding to recently viewed movies:", error);
    }
  };

  const deleteAllFavoriteMovies = async () => {
    if (!userAcc) {
      console.log("User account not found. Cannot delete favorite movies");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/users/delete-all-favorite-movies`,
        {
          userId: userAcc.id,
        }
      );
      setFavoriteMovies([]);
    } catch (error) {
      console.error("Error deleting favorite movies:", error);
    }
  };

  const deleteAllRecentlyViewedMovies = async () => {
    if (!userAcc) {
      console.log("User account not found. Cannot delete favorite movies");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/users/delete-all-recently-viewed-movies`,
        {
          userId: userAcc.id,
        }
      );
      setRecentOpenMovies([]);
    } catch (error) {
      console.error("Error deleting favorite movies:", error);
    }
  };

  return (
    <appContext.Provider
      value={{
        movies,
        setMovies,
        favortiteMovies,
        fetchMovieDetails,
        setFavoriteMovies,
        recentOpenMovies,
        setRecentOpenMovies,
        userAcc,
        setUserAcc,
        isSignedIn,
        user,

        handleSignOut,
        saveUser,
        createMovie,
        latestMovies,
        topRatedMovies,
        addToFavoriteMovies,
        addToRecentlyViewedMovies,
        deleteAllFavoriteMovies,
        deleteAllRecentlyViewedMovies,
        activeFilter,
        setActiveFilter,
        applyFilters,
        deleteMovie,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
