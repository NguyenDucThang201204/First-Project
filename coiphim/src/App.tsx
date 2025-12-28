import { useState, useEffect } from 'react'
import './css/styles.css'
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'
import Footer from './components/Footer'
import axios from 'axios'

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string;
}

function App() {
  // State để lưu trữ từ khóa tìm kiếm và danh sách phim
  // bên trong useState sẽ là giá trị khởi tạo (initial value)
  // searchTerm khởi tạo là chuỗi rỗng
  // movies khởi tạo là mảng rỗng
  // setSearchTerm và setMovies là hàm để cập nhật giá trị tương ứng có sẵn từ useState
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const loadMovies = async () =>{
      try{
        const res = await axios.get('/movies.json');
        const moviesData = res.data.map((movie: Movie) => ({
          ...movie,
          rating: Number(movie.rating)
        }));
        setMovies(moviesData);
      }catch(exception){
        console.log("Error loading movies: ", exception);
        }
      }
      loadMovies();
    }, []);

  return (
    // footer thì để bên ngoài container để nó full width
    // container vì đa số ngày nay người ta hay để max-width= 1200px để nội dung không bị quá rộng
    <>
      <div className="container">
        <Header 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <MoviesGrid movies={movies} />
        
        
      </div>
      <Footer />
    </>
  )
}

export default App
