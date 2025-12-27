interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
}

function MovieCard({ title, image, rating, genre }: MovieCardProps) {
  const getRatingClass = (rating: number) => {
    if (rating >= 8) return 'rating-good';
    if (rating >= 6) return 'rating-ok';
    return 'rating-bad';
  };

  return (
    <div className="movie-card">
      <img src={`code-images/${image}`} alt={title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        <div className={`movie-card-rating ${getRatingClass(rating)}`}>
          {rating}
        </div>
        <span className="movie-card-genre">{genre}</span>
        <button className="watchlist-btn">+ Thêm vào danh sách</button>
      </div>
    </div>
  );
}

export default MovieCard;
