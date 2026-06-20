"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Loader,LoadingOverlay} from "@mantine/core";
import MovieCard from "@/components/MovieCard";
import MovieModal from "@/components/MovieModal";
import Pagination from "@/components/Pagination";
import { toast } from "sonner";
import { Box } from "lucide-react";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const totalPages = Math.ceil(totalResults / 10);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const fetchMovies = async (search: string, pageNumber: number) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${search}&page=${pageNumber}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );

      if (res.data.Response === "False")
      {
        setMovies([]);
        setTotalResults(0);
      }
      else 
      {
        setMovies(res.data.Search || []);
        setTotalResults(Number(res.data.totalResults) || 0);
      }
    } 
    catch (error) {
      toast.error("",{
          description:"Something went wrong. Try again",
          className:"!bg-red-500 !text-black !font-bold !text-lg flex items-center justify-start"
        });
    } 
    finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (movieID: string) => {
    try {
      setDetailsLoading(true);

      const res = await axios.get(
        `https://www.omdbapi.com/?i=${movieID}&plot=full&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );

      setSelectedMovie(res.data);
    } 
    catch (error) {
      toast.error("",{
          description:"Failed to load movie details",
          className:"!bg-red-500 !text-black !font-bold !text-lg flex items-center justify-start"
        });
    } 
    finally {
      setDetailsLoading(false);
    }
  };

  const toggleFavorite = (movieId: string, title: string) => {
    const updatedFavorites = favorites.includes(movieId)
      ? favorites.filter((id) => id !== movieId)
      : [...favorites, movieId];

    setFavorites(updatedFavorites);
    
    const msg=updatedFavorites.includes(movieId)
      ? `${title} added to favorites`
      : `${title} removed from favorites`;

    toast.warning("", {
      description: msg,
      className: "!text-black !font-bold !text-lg flex items-center justify-start"
    });

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };


  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites)
      setFavorites(JSON.parse(savedFavorites));
  }, []);

  // debounce effect

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) {
        setPage(1)
        fetchMovies(query,1);
      }
    }, 500); // debounce 500ms

    return () => clearTimeout(timeout);
  }, [query]);

  // page change effect add
  useEffect(() => {
    fetchMovies(query, page);
  }, [page]);


  const handleSearch=(e:any)=>{
    e.preventDefault();
    fetchMovies(query,1);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Movie Finder</h1>
      <p className="mb-4 text-gray-600">
        Favorites: {favorites.length}
      </p>

      {/* SEARCH */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
          placeholder="Search movies..."
        />
        <button className="cursor-pointer bg-black text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* GRID */}
      {!loading? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.length==0?(
            <p className="text-center ml-45 font-bold text-xl w-full">No movie found</p>):(
              movies.map((movie: any,idx:number) => (
                <MovieCard
                  key={idx}
                  movie={movie}
                  isFavorite={favorites.includes(movie.imdbID)}
                  onFavorite={() => toggleFavorite(movie.imdbID,movie.Title)}
                  onOpen={() => fetchMovieDetails(movie.imdbID)}
                />
              ))
            )}
        </div>
        ):(
          <div className="flex gap-2 items-center justify-center">
            <Loader size={20}/>
            <p>Loading movies...</p>
          </div>
            
          )
      }

      {selectedMovie&&(
        <Box>
          <LoadingOverlay
            visible={detailsLoading}
            zIndex={1000}
            overlayProps={{ radius: 'md', blur: 5 }}
            loaderProps={{ color: 'pink', type: 'bars' }}
          />
        </Box>
      )}

      <MovieModal
        opened={!!selectedMovie}
        onClose={()=>setSelectedMovie(null)}
        movie={selectedMovie}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={()=>setPage((p)=>p-1)}
        onNext={()=>setPage((p)=>p+1)}
      />
    </main>
  );
}