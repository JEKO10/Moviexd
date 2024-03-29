import React, { useEffect } from "react";

import { Fade } from "../../assets/style/Fade.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { Loader, LoaderWrapper } from "../../common/Loader";
import { Underline } from "../discoverMovies/DiscoverMovies.styled";
import { Title, Trend, TrendInfo, TrendLink } from "./Trending.styled";
import { changeTime, getTrending } from "./trendingMoviesSlice";

const Trending = () => {
  const { isLoading, trendingMovies, time } = useAppSelector(
    (store) => store.trendingMovies
  );
  const dispatch = useAppDispatch();
  const posterUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    dispatch(getTrending(time));
  }, [time]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
  return (
    <Trend className="trending">
      <Title time={time}>
        <h2>Popular movies</h2>
        <select
          name="time"
          onChange={(e) => dispatch(changeTime(e.currentTarget.value))}
          value={time}
        >
          <option value="day">Today</option>
          <option value="week">This week</option>
        </select>
      </Title>
      <Underline></Underline>
      <TrendInfo>
        {trendingMovies?.slice(0, 5).map(({ id, title, name, poster_path }) => (
          <TrendLink to={`/movie/${id}`} key={id} className="trendElement">
            <img
              src={
                poster_path ? posterUrl + poster_path : import.meta.env.VITE_IMG
              }
              alt="Poster"
            />
            <div>
              <h4>{title ? title : name}</h4>
              {title?.length > 17 && <Fade isTrending={true} />}
            </div>
          </TrendLink>
        ))}
      </TrendInfo>
    </Trend>
  );
};

export default Trending;
