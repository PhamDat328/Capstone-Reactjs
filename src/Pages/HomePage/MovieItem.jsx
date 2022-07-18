import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setSelectPage } from "../../Slice/movie";
import { getMovieShowingPages } from "../../Slice/movie";

const MovieItem = () => {

  const { movieShowing, selectPage } = useSelector(
    (state) => state.movieReducer.movieList
  );

  console.log(movieShowing);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // dùng để gọi api và thay đổi giá trị state movieShowing trên store
    dispatch(getMovieShowingPages());
  }, [searchParams]);

  const dispatch = useDispatch();

  // hàm để lấy được số trang đang chọn
  const changePage = (page) => {

    // set lại giá trị của url
    setSearchParams({ page });
    
    // dùng để thay đổi state selectPage trên store
    dispatch(setSelectPage(page));
  };

  return (
    <div>
      <div className="row">
        {movieShowing.items.map((movie) => {
          return (
            <div key={movie.maPhim} className="col-sm-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={movie.hinhAnh}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.tenPhim}</h5>
                  <p className="card-text">{movie.moTa}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button onClick={() => changePage(1)}>1</button>
        <button onClick={() => changePage(2)}>2</button>
        <button onClick={() => changePage(3)}>3</button>
      </div>
    </div>
  );
};

export default MovieItem;
