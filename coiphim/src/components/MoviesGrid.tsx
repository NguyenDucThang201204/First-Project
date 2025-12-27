import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string;
}

interface MoviesGridProps {
  movies: Movie[];
}

function MoviesGrid({ movies }: MoviesGridProps) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
          genre={movie.genre}
        />
      ))}
    </div>
  );
}

export default MoviesGrid;
