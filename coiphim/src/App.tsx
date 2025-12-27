import { useState } from 'react'
import './css/styles.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="title">🎬 Coi Phim</h1>
          <p className="app-subtitle">Khám phá và cách học code yêu thích của bạn</p>
          
          <nav>
            <ul>
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#watchlist">Danh sách xem</a></li>
            </ul>
          </nav>

          <input 
            type="text" 
            className="search-input" 
            placeholder="Tìm kiếm phim..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="filter-bar">
            <div className="filter-slot">
              <select className="filter-dropdown">
                <option>Tất cả thể loại</option>
                <option>Programming Language</option>
                <option>Cloud Service</option>
                <option>Design Tool</option>
              </select>
            </div>
          </div>
        </header>

        <div className="movies-grid">
          <div className="movie-card">
            <img src="./logo.png" alt="Movie" />
            <div className="movie-card-info">
              <h3 className="movie-card-title">Tên phim mẫu</h3>
              <div className="movie-card-rating rating-good">8.5</div>
              <span className="movie-card-genre">Programming Language</span>
              <button className="watchlist-btn">+ Thêm vào danh sách</button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p className="footer-text">© 2025 Coi Phim. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
