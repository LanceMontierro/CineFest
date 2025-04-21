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
      console.log("Fetched movies:", movies);
      setUserAcc(user);
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies/get-movie`);
        setMovies(res.data || []);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchUserData();
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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
