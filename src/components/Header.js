import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<div className="header">
			<Link className="headerLink" to={'/'} onClick={props.resetStates}>
				<img className="headerImg" src="/images/dna_icon.png" alt="dna logo" />
				<h1 className="headerText">Date Night App</h1>
			</Link>
		</div>
	);
}
