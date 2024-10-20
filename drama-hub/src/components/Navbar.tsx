import React, { FC, useEffect, useState, ChangeEvent, FormEvent } from 'react';
import searchIcon from "../assets/images/search_icon_4.png";
import axios from 'axios';
import { Movie, NavbarProps } from '../utils/index';




const Navbar:React.FC<NavbarProps> = ({query, getMovies, handleQueryInput}) => {

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className='logoName'>
            <h1 className="logo">Drama Hub</h1>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#" id="tvshows-btn">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" id="nowplaying-btn">
                  Now Playing
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={getMovies} className="search-box">
              <input
                type="text"
                id="search-box"
                className="search-input"
                placeholder="search for a movie..."
                value={query}
                onChange={handleQueryInput}
              />
              <button type="submit" className="search-button" id="searchBtn">
                <img src={searchIcon} alt="search icon" />
              </button>
            </form>

          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;