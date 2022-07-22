import './searchStyle.css';
import SearchHeader from './SearchHeader';
import Categories from "./Categories";
import PictureGrid from "./PictureGrid";



const Search = () => {
    return(
        <div className="search_tab">
            <SearchHeader />
            <Categories />
            <PictureGrid />
        </div>
    );


}

export default Search;