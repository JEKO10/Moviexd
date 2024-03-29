import React from "react";

import { Fade } from "../../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { SearchData } from "../../../common/types/typesTS";
import { setIsMovieModalOpen } from "../navbarSlice";
import { MovieInfo, SearchedData, SingleMovie } from "./SearchModal.styled";

const SearchModal = () => {
  const { searchData, inputValue, isLogOpen } = useAppSelector(
    (store) => store.navbar
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w92/";

  return (
    <SearchedData isLogOpen={isLogOpen}>
      {searchData?.map((movie: SearchData) => {
        const {
          id,
          profile_path,
          poster_path,
          title,
          name,
          release_date,
          media_type
        } = movie;

        return (
          <SingleMovie
            key={id}
            isLogOpen={isLogOpen}
            to={
              isLogOpen
                ? "#"
                : media_type === "movie"
                  ? `/movie/${id}`
                  : `/person/${id}`
            }
            onClick={
              isLogOpen
                ? () => dispatch(setIsMovieModalOpen({ isOpen: true, id }))
                : () => {}
            }
          >
            {!isLogOpen && (
              <img
                src={
                  poster_path || profile_path
                    ? posterUrl + (profile_path || poster_path)
                    : import.meta.env.VITE_IMG
                }
                alt="POSTER"
              />
            )}
            <div>
              <MovieInfo>{title || name}</MovieInfo>
              <MovieInfo>{release_date?.slice(0, 4)}</MovieInfo>
              {title && title.length > 13 && <Fade isTrending={false} />}
            </div>
          </SingleMovie>
        );
      })}
      {searchData.length === 0 && inputValue && (
        <p>There were no matches for your search term.</p>
      )}
    </SearchedData>
  );
};

export default SearchModal;
