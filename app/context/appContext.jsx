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

  console.log(API_URL);

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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
