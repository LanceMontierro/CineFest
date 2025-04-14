import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-expo";
const appContext = createContext();

export const useAppContext = () => {
  return useContext(appContext);
};

const ContextApi = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const [movies, setMovies] = useState([]);
  const [favortiteMovies, setFavoriteMovies] = useState([]);
  const [recentOpenMovies, setRecentOpenMovies] = useState([]);
  const [userAcc, setUserAcc] = useState("");

  useEffect(() => {
    if (isSignedIn && user) {
      console.log("User object:", user);
      const email = user?.primaryEmailAddress?.emailAddress;
      console.log("User Email:", email);
      setUserAcc(user);
    }
  }, [isSignedIn, user]);

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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
