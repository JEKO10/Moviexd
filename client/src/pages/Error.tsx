import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import RandomStyledError from "../assets/style/ErrorPage.styled";
import { useAppDispatch } from "../common/hooks";
import { Loader, LoaderWrapper } from "../common/Loader";
import { setQuery } from "../redux/navbar/navbarSlice";

const Error = () => {
  const { component: ErrorComponent, movie } = RandomStyledError;
  const dispatch = useAppDispatch();

  const getMovieTitle = (movie: number) => {
    const text = {
      intro: "",
      movieName: "",
    };
    switch (movie) {
      case 0:
        text.intro = "'I can't find her. She checked out of the hotel.' ";
        text.movieName = "Michael Curtiz’s Casablanca (1942)";
        return text;
      case 1:
        text.intro = "'I can't find it.' ";
        text.movieName = "Sergio Leone’s Once Upon a Time in America (1984)";
        return text;
      case 2:
        text.intro = "'I can't find it anywhere.' ";
        text.movieName = "Frank Capra’s It’s a Wonderful Life (1946)";
        return text;
      case 3:
        text.intro = "'Where is it? I can't even find it.' ";
        text.movieName = "Antoine Fuqua’s Training Day (2001)";
        return text;
      case 4:
        text.intro =
          "'But, Mom, I can't find him!\nHoney, just grab some other' link. ";
        text.movieName = "John Lasseter’s Toy Story (1995)";
        return text;
      default:
        text.intro = "'I can't find it.' ";
        text.movieName = "Sergio Leone’s Once Upon a Time in America (1984)";
        return text;
    }
  };

  const text = {
    intro: getMovieTitle(movie).intro,
    movie: getMovieTitle(movie).movieName,
  };

  useEffect(() => {
    dispatch(setQuery("error"));
  }, []);

  if (!ErrorComponent || !movie) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <ErrorComponent>
      <article>
        <p
          dangerouslySetInnerHTML={{
            __html: text.intro.replace(/\n/g, "<br>"),
          }}
        />
        <p>
          Get back on <Link to="/">safe</Link>.
        </p>
        <h3>
          Please <Link to="/contact">contact</Link> us if the problem persists.
        </h3>
        <h4>{text.movie}</h4>
      </article>
    </ErrorComponent>
  );
};

export default Error;
