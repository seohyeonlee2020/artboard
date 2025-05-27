//import './All.css';
import React from "react";
import Artcard from '../components/Artcard'
import {artcards} from '../ArtcardData';

const PageTemplate = ({fn = () => true}) => {
return (
	<div>
		<div className = "artcard-container">
			{artcards.filter(fn).map((artcard, index) => (
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
