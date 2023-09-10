import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../images/google.png';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import '../styles/SearchPage.css';

function SearchPage() {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);
  console.log(data)

  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img src={googleImg} alt="" />
        </Link>
        <div className="searchPageHeaderBody">
          <Search hidebuttons />
          <div className="searchPageOptions">
            <div className="searchPageOptionLeft">
              <div className="searchPageOption">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPageOption">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPageOption">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPageOption">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPageOption">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPageOption">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPageOptionRight">
              <div className="searchPageOption">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPageOption">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPageResults">
          <p className="searchPageResultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map((item) => {
            return (
              <div className="searchPageResult">
                <a href={item.link} className="searchPageResultLink">
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={item.pagemap?.cse_image[0]?.src}
                        alt="pic"
                        className="searchPageResultImage"
                      />
                    )}
                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPageResultTitle" target='__main'>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPageResultDescription">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
