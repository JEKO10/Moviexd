import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector, useResize } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import {
  getCredits,
  getTrending
} from "../../redux/trendingMovies/trendingMoviesSlice";
import {
  Header as Container,
  HeaderInfo,
  HeaderMovie,
  HeaderRating,
  HeaderSlides
} from "./Home.style";

type GenreList = {
  id: number;
  name: string;
};

const Header = () => {
  const [slide, setSlide] = useState(0);
  const [genresList, setGenresList] = useState<GenreList[]>();
  const { trendingMovies, movieCredits, time, isLoading } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const backdropUrl = "https://image.tmdb.org/t/p/w1280/";
  const profileUrl = "https://image.tmdb.org/t/p/w185/";

  useResize();

  const handleClick = (index: number) => {
    setSlide(index);
  };

  useEffect(() => {
    const fetchTrendingAndCredits = async () => {
      const trendingAction = await dispatch(getTrending(time));

      if (getTrending.fulfilled.match(trendingAction)) {
        const trendingMovies = trendingAction.payload;

        if (trendingMovies.length > 0) {
          dispatch(getCredits());
        }
      }
    };

    fetchTrendingAndCredits();

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenresList(response.data.genres);
      });
  }, [dispatch, time]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Container>
      <HeaderMovie slide={slide}>
        {trendingMovies.slice(0, 4).map((movie) => (
          <article key={movie.id}>
            <div>
              <h3>
                {innerWidth > 992 ? movie.title.slice(0, 14) : movie.title}
                {movie.title?.length > 14 && innerWidth > 992 && "..."}
              </h3>
              <p>{movie.overview.slice(0, 200)}...</p>
              <h5>{movie.release_date.slice(0, 4)}</h5>
              <button>
                <Link to={`/movie/${movie.id}`}>Rate</Link>
              </button>
            </div>
            <img src={backdropUrl + movie.backdrop_path} alt="backdropImg" />
            <HeaderRating slide={Math.floor(movie.vote_average / 2)}>
              <span>
                {[0, 1, 2, 3, 4].map((index) => (
                  <IoStar key={index} />
                ))}
              </span>
              <p>{movie.vote_average.toString().slice(0, 3)}</p>
            </HeaderRating>
          </article>
        ))}
        <HeaderSlides slide={slide}>
          <div onClick={() => handleClick(0)} />
          <div onClick={() => handleClick(1)} />
          <div onClick={() => handleClick(2)} />
          <div onClick={() => handleClick(3)} />
        </HeaderSlides>
      </HeaderMovie>
      <HeaderInfo slide={slide}>
        <article>
          {movieCredits?.map((credits) => {
            const director = credits?.crew.find(
              (person) =>
                person.job === "Director" ||
                person.known_for_department === "Directing"
            );

            return (
              <Link to={`/person/${director?.id}`} key={credits.id}>
                <img src={profileUrl + director?.profile_path} alt="Director" />
                <span>
                  <h4>Director:</h4>
                  <p>
                    {
                      credits?.crew.find(
                        (person) =>
                          person.job === "Director" ||
                          person.known_for_department === "Directing"
                      )?.name
                    }
                  </p>
                </span>
              </Link>
            );
          })}
        </article>
        <article>
          {movieCredits?.map((credits) => (
            <Link to={`/person/${credits?.cast[0].id}`} key={credits.id}>
              <img
                src={profileUrl + credits?.cast[0].profile_path}
                alt="Director"
              />
              <span>
                <h4>Top cast:</h4>
                <p>{credits?.cast[0].name}</p>
              </span>
            </Link>
          ))}
        </article>
        <article>
          {trendingMovies.slice(0, 4).map((movie) => (
            <div key={movie.id}>
              <h4>Genre:</h4>
              <ul>
                {movie.genre_ids.map((id) => {
                  const genre = genresList?.find((genre) => genre.id === id);

                  return genre && <li key={genre.id}>#{genre.name}</li>;
                })}
              </ul>
            </div>
          ))}
        </article>
      </HeaderInfo>
    </Container>
  );
};

export default Header;
