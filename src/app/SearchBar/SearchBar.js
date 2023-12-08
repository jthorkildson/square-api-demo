import React, { useState } from "react";
import Products from "../Products/Products";
import "./SearchBar.css"

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("")
	const handleInput = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div id="searchbar">
			<input type="text" value={searchValue} onChange={handleInput}/>
			<Products search={searchValue}/>
		</div>
		
	)
}

export default SearchBar