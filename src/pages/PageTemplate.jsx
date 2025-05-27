//import './All.css';
import React from "react";
import Artcard from '../components/Artcard'
import {artcards} from '../ArtcardData';

const PageTemplate = ({bool_condition = true}) => {
return (
	<div>
		<div className = "artcard-container">
			{artcards.filter((card) => bool_condition).map((artcard, index) => (
				<Artcard
					key={index}
					src={artcard.src}
					title={artcard.title}
					author={artcard.author}
					year={artcard.year}
				/>
			))}
		</div>
	</div>
)
}

export default PageTemplate;
