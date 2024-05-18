import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { setInputValue } from "../../../navbar/navbarSlice";
import { getMovie } from "../../../singleMovie/singleMovieSlice";
import { setIsFavoriteOpen } from "../../profileSlice";
import {
  FavoriteFilm,
  FavoriteFilms as Container,
  RemoveMovie,
} from "../Settings.styled";

const FavoriteFilms = () => {
  const [movieIndex, setMovieIndex] = useState<number>(0);
  const { favoriteMovieId } = useAppSelector((store) => store.profile);
  const { movieInfo } = useAppSelector((store) => store.singleMovie);
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w154/";

  const handleClick = (index: number) => {
    setMovieIndex(index);

    dispatch(setIsFavoriteOpen(true));
    dispatch(setInputValue(""));
  };

  useEffect(() => {
    dispatch(getMovie(favoriteMovieId.toString()));
  }, [favoriteMovieId]);

  return (
    <Container>
      <h3>Favorite Films</h3>
      <ul>
        <FavoriteFilm
          onClick={() => handleClick(0)}
          background={
            movieInfo.poster_path ? posterUrl + movieInfo.poster_path : ""
          }
        >
          <RemoveMovie />
          <FaCirclePlus />
        </FavoriteFilm>
        <FavoriteFilm
          onClick={() => handleClick(1)}
          background={
            movieInfo.poster_path ? posterUrl + movieInfo.poster_path : ""
          }
        >
          <RemoveMovie />
          <FaCirclePlus />
        </FavoriteFilm>
        <FavoriteFilm
          onClick={() => handleClick(2)}
          background={
            movieInfo.poster_path ? posterUrl + movieInfo.poster_path : ""
          }
        >
          <RemoveMovie />
          <FaCirclePlus />
        </FavoriteFilm>
        <FavoriteFilm
          onClick={() => handleClick(3)}
          background={
            movieInfo.poster_path ? posterUrl + movieInfo.poster_path : ""
          }
        >
          <RemoveMovie />
          <FaCirclePlus />
        </FavoriteFilm>
      </ul>
    </Container>
  );
};

export default FavoriteFilms;
