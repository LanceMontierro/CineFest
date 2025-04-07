export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
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
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?with_origin_country=PH&primary_release_date.gte=2024-12-25&primary_release_date.lte=2024-12-25&language=en-US&sort_by=popularity.desc`


    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();

    if (query) {
        return (data.results || []).filter((movie: any) =>
            (movie.origin_country?.includes('PH') || movie.original_language === 'tl') &&
            new Date(movie.release_date).getMonth() === 11 &&
            new Date(movie.release_date).getDate() === 25 &&
            new Date(movie.release_date).getFullYear() >= 2010 &&
            new Date(movie.release_date).getFullYear() <= 2024
        );
    }

    return data.results || [];
};

export const fetchMovieDetails = async (
    movieId: string
): Promise<MovieDetails> => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?language=en-US&region=PH`,
            {
                method: "GET",
                headers: TMDB_CONFIG.headers,
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch movie details: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};
