import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ onSearch, onChange }) => {
    return (
        <div className="flex justify-center search-bar br2">
            <input type="text" className="pa1 w-70 br3 outline-0 mr1" onChange={onChange} />
            <button type="button" className="pa2 w-10 white bg-orange f4-l f3-ns tc ba" onClick={onSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default Searchbar;