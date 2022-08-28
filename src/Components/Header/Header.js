import React, { useRef, useState } from "react";
import LogoML from "../../assets/ml-logo.png"
import { Link, useNavigate } from 'react-router-dom';
import './header.css'

function Header(props) {

	const { updateQueryFunction } = props;
	const [value, setValue] = useState("")
	const inputSearcher = useRef()
	const updateValue = (e) => {
		setValue(e.target.value);
	};

	const navigate = useNavigate();
	const redirectFunction = (e) => {
		e.preventDefault();
		updateQueryFunction(value);
		navigate(`/items?search=${value}`);
	}

	return (
		<header>
			<Link to="/">
				<img className="logo" src={LogoML} alt="logo" />
			</Link>
			<form className="searcher" onSubmit={(e) => redirectFunction(e)}>
				<input
					type="text"
					name="searcher"
					id="searcher"
					placeholder="Nunca dejes de buscar"
					ref={inputSearcher}
					onChange={(e) => updateValue(e)}
				/>
				<i className="fa-solid fa-magnifying-glass" onClick={redirectFunction} />
			</form>
		</header>
	);
}

export default Header;
