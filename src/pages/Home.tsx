import React, { useEffect } from "react";

import { useAppDispatch } from "../common/hooks";
import { setQuery } from "../features/navbar/navbarSlice";
import { toggleModal } from "../features/singleMovie/singleMovieSlice";
import TrendingMovies from "../features/trendingMovies/TrendingMovies";
import TrendingPeople from "../features/trendingPeople/TrendingPeople";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(toggleModal(false));
  }, []);

  return (
    <section>
      <TrendingMovies />
      <TrendingPeople />
    </section>
  );
};

export default Home;
