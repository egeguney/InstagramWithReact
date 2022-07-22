

const SearchHeader = () => {
    return(
        <div className="search_header">
            <input type="search" className="search-console" placeholder="Search"><img className="scan-search"
                                                                                      src="Images/Icons/Scan.png"/></input>
            <div className="search-icon"><img className="search" src="Images/Icons/Search.png"/></div>
        </div>
    );
}

export default SearchHeader;