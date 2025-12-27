interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="header">
        <img className="logo" src="logo.png" alt="Coi Phim Logo" />
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
        onChange={(e) => onSearchChange(e.target.value)}
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
  );
}

export default Header;
