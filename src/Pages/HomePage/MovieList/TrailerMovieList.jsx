import React from "react";
import { useSelector } from "react-redux";
const TrailerMovieList = (props) => {
  const { movieTrailer } = useSelector((state) => state.movieReducer.movieList);
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ marginTop: "23rem", marginRight: "45%" }}
        >
          <div className="modal-content">
            <iframe width={800} height={500} src={movieTrailer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerMovieList;
