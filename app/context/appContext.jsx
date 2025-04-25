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
  const { signOut } = useClerk();

  const API_URL = Constants.expoConfig.extra.EXPO_PUBLIC_API_URL;

  const latestMovies = movies
    .filter((movie) => {
      const date = new Date(movie.releaseDate);
      return movie.releaseDate && date.getFullYear() === 2024;
    })
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

  console.log(movies);

  const createMovie = async () => {
    if (!userAcc) {
      console.log("User account not found. Cannot create movies.");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/movies/create-movie`, {});
    } catch (error) {
      console.error("Error creating movies:", error);
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

  return (
    <appContext.Provider
      value={{
        movies,
        setMovies,
        favortiteMovies,
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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
