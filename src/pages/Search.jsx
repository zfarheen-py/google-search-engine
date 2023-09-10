import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import '../styles/Search.css';

function Search({ hidebuttons }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    // setting the state
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate('/search');
  };
  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hidebuttons ? (
        <div className="searchButtons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="searchButtons" style={{display:'none'}}>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
