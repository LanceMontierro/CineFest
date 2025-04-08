import axios from "axios";

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  HEADERS: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({
  query,
}: {
  query?: string;
}): Promise<Movie[]> => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}&language=en-US`
    : `/discover/movie?with_origin_country=PH&primary_release_date.gte=2024-12-25&primary_release_date.lte=2024-12-25&language=en-US&sort_by=popularity.desc`;

  try {
    const response = await axios.get(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
      headers: TMDB_CONFIG.HEADERS,
    });

    const data = response.data;

    if (query) {
      return (data.results || []).filter(
        (movie: any) =>
          (movie.origin_country?.includes("PH") ||
            movie.original_language === "tl") &&
          new Date(movie.release_date).getMonth() === 11 &&
          new Date(movie.release_date).getDate() === 25 &&
          new Date(movie.release_date).getFullYear() >= 2010 &&
          new Date(movie.release_date).getFullYear() <= 2024
      );
    }

    return data.results || [];
  } catch (error: any) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await axios.get(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?language=en-US&region=PH`,
      {
        headers: TMDB_CONFIG.HEADERS,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error fetching movie details:", error.message);
    throw new Error("Failed to fetch movie details");
  }
};
