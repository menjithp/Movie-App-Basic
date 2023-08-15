import MovieCard from "./movie_card";

export default ({ movie_list }) => {
  return (
    <div className="mx-3 my-2 pt-1 grid-display">
      {movie_list.length &&
        movie_list.map((movie, movie_index) => {
          return (
              <div key={movie_index}>
              <MovieCard key={movie_index} data={movie} />
              </div>
          );
        })}
    </div>
  );
};

