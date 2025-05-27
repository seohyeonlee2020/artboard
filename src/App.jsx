import 'App.css';
import Artcard from './components/Artcard'
import Header from './components/Header'

/* page imports */
import All from './pages/All'
import Projects from './pages/Projects'
import Archive from './pages/Archive'

const App = () => {
	const artcards = [
		{src: '/need-break.jpg', title: "Need a Break", author: "Seohyeon Lee", year: "Nov 2023", hidden: false},
		{src: '/self-portrait-double.png', title: "Self w/ Long Hair", author: "Seohyeon Lee", year: "Oct 2023", hidden: false},
		{src: '/art-studio.png', title: "Art Studio", author: "Seohyeon Lee", year: "Sep 2023", hidden: false},
		{src: '/dance-in-the-rain.jpg', title: "Dance In the Rain", author: "Seohyeon Lee", year: "Jul 2022", hidden: false},
		{src: '/wall-of-truth.png', title: "Foolbox and the Wall of Truth", hidden: false},
		{src: '/blame.png', title: "Blame", author: "Seohyeon Lee", year: "Jul 2022", hidden: false},
		{src: '/stumped.png', title: "Stumped", author: "Seohyeon Lee", year: "Jun 2022", hidden: false},
		{src: '/out-but.png', title: "Out, But...", author: "Seohyeon Lee", year: "Jun 2022", hidden: false},
		{src: '/there-will-be-a-way-out.png', title: "Way Out", author: "Seohyeon Lee", year: "Spring 2022", hidden: false},
		{src: '/financial-literacy.png', title: "Financial Literacy", author: "Seohyeon Lee", year: "Jun 2022", hidden: false},
		{src: '/창작의-기쁨.png', title: "창작의 기쁨", author: "Seohyeon Lee", year: "Jun 2022", hidden: false},
		{src: '/undecided-future.jpg', title: "진로 고민", author: "Seohyeon Lee", year: "HS", hidden: false},
		{src: '/writing.jpg', title: "Writing", author: "Seohyeon Lee", year: "HS", hidden: false},
	]
return (
	<div className="App">
		<Header />

		<div className = "artcard-container">
			{artcards.map((artcard, index) => (
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

export default App;
