import { Modal } from "@mantine/core";

type movieModalProps = {
  opened: boolean;
  onClose: () => void;
  movie: any;
};

const MovieModal=({
  opened,
  onClose,
  movie,
}: movieModalProps)=> {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={movie?.Title}
      size="lg"
    >
      {movie && (
        <div className="space-y-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full rounded"
          />

          <p>
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>IMDb Rating:</strong>{" "}
            {movie.imdbRating}
          </p>

          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </div>
      )}
    </Modal>
  );
}



export default MovieModal;