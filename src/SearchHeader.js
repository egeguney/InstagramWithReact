
import Scan from "./Images/Icons/Scan.png";
import SearchIcon from "./Images/Icons/Search.png";

const SearchHeader = () => {
    return(
        <div className="search_header">
            <input className="search-console" placeholder="Search" onChange={event => event.preventDefault()}/>
            <div><img className="scan-search" src={Scan}/></div>
            <div className="search-icon"><img className="search" src={SearchIcon}/></div>
        </div>
    );
}

export default SearchHeader;