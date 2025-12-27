import { useState, useEffect } from 'react'
import './css/styles.css'
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'
import Footer from './components/Footer'

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    // Load dữ liệu từ file movies.json
    fetch('/movies.json')
      .then(response => response.json())
      .then(data => {
        // Chuyển đổi rating từ string sang number
        const moviesData = data.map((movie: any) => ({
          ...movie,
          rating: parseFloat(movie.rating)
        }))
        setMovies(moviesData)
      })
      .catch(error => console.error('Error loading movies:', error))
  }, [])

  return (
    <>
      <div className="container">
        <Header 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <MoviesGrid movies={movies} />
        
        <Footer />
      </div>
    </>
  )
}

export default App
