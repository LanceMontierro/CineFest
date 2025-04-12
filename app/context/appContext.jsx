import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const appContext = createContext();

export const useAppContext = () => {
  return useContext(appContext);
};

const ContextApi = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const [movies, setMovies] = useState([]);
  const [favortiteMovies, setFavoriteMovies] = useState([]);
  const [recentOpenMovies, setRecentOpenMovies] = useState([]);
  const [userName, setUserName] = useState("");

  return (
    <appContext.Provider
      value={{
        movies,
        setMovies,
        favortiteMovies,
        setFavoriteMovies,
        recentOpenMovies,
        setRecentOpenMovies,
        userName,
        setUserName,
        isSignedIn,
        user,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default ContextApi;
