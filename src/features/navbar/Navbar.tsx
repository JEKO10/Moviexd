import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { IconWrapper, Input, Nav } from "../../assets/style/Navbar.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { searchMovies, setQuery } from "./navbarSlice";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { query } = useAppSelector((store) => store.navbar);
  const dispatch = useAppDispatch();

  const setClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    dispatch(setQuery(event.currentTarget.text));
  };

  return (
    <Nav query={query}>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link
            to={"/profile"}
            onClick={(event) => setClicked(event)}
            className={query === "Profile" ? "active" : ""}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={"/films"}
            onClick={(event) => setClicked(event)}
            className={query === "Films" ? "active" : ""}
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            to={"/likes"}
            onClick={(event) => setClicked(event)}
            className={query === "Likes" ? "active" : ""}
          >
            Likes
          </Link>
        </li>
        <li>
          <Link
            to={"/lists"}
            onClick={(event) => setClicked(event)}
            className={query === "Lists" ? "active" : ""}
          >
            Lists
          </Link>
        </li>
        <li>
          <Link
            to={"/reviews"}
            onClick={(event) => setClicked(event)}
            className={query === "Reviews" ? "active" : ""}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            to={"/watchlist"}
            onClick={(event) => setClicked(event)}
            className={query === "Watchlist" ? "active" : ""}
          >
            Watchlist
          </Link>
        </li>
        <li>
          <IconWrapper onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <VscChromeClose /> : <FaSearch />}
          </IconWrapper>
          <Input
            isSearchOpen={isSearchOpen}
            type="text"
            placeholder="Enter movie title..."
            onChange={(e) => {
              dispatch(searchMovies(e.target.value));
            }}
          />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;